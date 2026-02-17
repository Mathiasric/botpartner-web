// Nav: transparent on hero, dark bg after scroll
(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const update = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Mobilmeny – backdrop + scroll lock + ESC + lukk på link
(() => {
  const btn = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const backdrop = document.getElementById("navBackdrop");

  if (!btn || !links || !backdrop) return;

  const openMenu = () => {
    links.classList.add("open");
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("show"));
    btn.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-lock");
  };

  const closeMenu = () => {
    links.classList.remove("open");
    backdrop.classList.remove("show");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-lock");
    setTimeout(() => (backdrop.hidden = true), 180);
  };

  const toggleMenu = () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  };

  btn.addEventListener("click", toggleMenu);
  backdrop.addEventListener("click", closeMenu);

  // Lukk når man klikker en link i menyen
  links.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // ESC lukker
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Hvis man resizer til desktop: reset
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
})();



// (scroll listener consolidated above)

// Lead-skjema – send til Netlify function
(() => {
  const form = document.getElementById("leadForm");
  if (!form) return;

  const success = document.getElementById("formSuccess");
  const error = document.getElementById("formError");
  const btn = form.querySelector('button[type="submit"]');
  const btnText = btn.textContent;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    success.hidden = true;
    error.hidden = true;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sender…";

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/.netlify/functions/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      form.reset();
      success.hidden = false;
    } catch {
      error.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = btnText;
    }
  });
})();
