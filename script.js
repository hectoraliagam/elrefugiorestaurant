const header = document.querySelector(".header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");

const MOBILE_BREAKPOINT = 768;

/* HEADER SCROLL */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* MOBILE MENU */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* CLOSE MENU ON LINK CLICK (MOBILE ONLY) */
navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      navLinks.classList.remove("open");
    }
  });
});

/* SMOOTH SCROLL */
navAnchors.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    const offset = header.offsetHeight + 10;
    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

/* RESIZE FIX */
window.addEventListener("resize", () => {
  if (window.innerWidth > MOBILE_BREAKPOINT) {
    navLinks.classList.remove("open");
  }
});
