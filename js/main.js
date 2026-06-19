const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navButton && nav) {
  navButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      navButton.setAttribute("aria-expanded", "false");
    }
  });
}
