// ✅ Mobilmeny (elite) – backdrop + scroll lock + ESC + lukk på link
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


