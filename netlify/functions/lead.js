const RESEND_API = "https://api.resend.com/emails";
const TO_EMAIL = process.env.FORM_TO_EMAIL || "hei@botpartner.no";
const FROM_EMAIL = process.env.FORM_FROM_EMAIL || "Botpartner <noreply@botpartner.no>";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, company, email, need, goal, systems, message } = body;

  if (!name || !company || !email || !need || !goal) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  const notificationHtml = `
    <h2>Ny forespørsel fra ${name}</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Navn</td><td>${name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Bedrift</td><td>${company}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">E-post</td><td>${email}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Hva ønsker de hjelp med</td><td>${need}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Mål</td><td>${goal}</td></tr>
      ${systems ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Systemer</td><td>${systems}</td></tr>` : ""}
      ${message ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Melding</td><td>${message}</td></tr>` : ""}
    </table>
  `;

  const autoReplyHtml = `
    <p>Hei ${name},</p>
    <p>Takk for forespørselen. Vi gjennomgår informasjonen og tar kontakt innen 24 timer.</p>
    <p>Med vennlig hilsen,<br>Botpartner</p>
  `;

  try {
    const send = (payload) =>
      fetch(RESEND_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

    const [notifRes, autoRes] = await Promise.all([
      send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Gjennomgang: ${company} – ${goal}`,
        html: notificationHtml,
        reply_to: email,
      }),
      send({
        from: FROM_EMAIL,
        to: email,
        subject: "Vi har mottatt forespørselen din – Botpartner",
        html: autoReplyHtml,
      }),
    ]);

    if (!notifRes.ok || !autoRes.ok) {
      if (!notifRes.ok) console.error("Resend notif error:", await notifRes.text());
      if (!autoRes.ok) console.error("Resend auto-reply error:", await autoRes.text());
      return { statusCode: 502, body: JSON.stringify({ error: "Email delivery failed" }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal error" }) };
  }
};
