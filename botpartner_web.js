// ✅ Fjern hash fra URL hvis siden lastes med #anker
if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}

// ✅ Chatbot toggle (hvis brukt)
const toggle = document.getElementById("chatToggle");
const widget = document.getElementById("chatWidget");

if (toggle && widget) {
  toggle.addEventListener("click", () => {
    widget.style.display = widget.style.display === "none" ? "block" : "none";
  });
}

// ✅ Fade-in på seksjoner
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });

  // ✅ Scroll til "hvordan"
  const scrollHvordan = document.getElementById("scrollToHvordan");
  const sectionHvordan = document.getElementById("hvordan");

  if (scrollHvordan && sectionHvordan) {
    scrollHvordan.addEventListener("click", (e) => {
      e.preventDefault();
      sectionHvordan.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ✅ Scroll til "kontakt"
  const scrollKontakt = document.getElementById("scrollToKontakt");
  const sectionKontakt = document.getElementById("kontakt");

  if (scrollKontakt && sectionKontakt) {
    scrollKontakt.addEventListener("click", (e) => {
      e.preventDefault();
      sectionKontakt.scrollIntoView({ behavior: "smooth" });
    });
  }
});
