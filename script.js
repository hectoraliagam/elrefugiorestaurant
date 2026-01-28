const header = document.querySelector(".header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");

let menuOpen = false;

/* HEADER SCROLL EFFECT */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(12, 12, 12, 0.95)";
    header.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.6)";
  } else {
    header.style.background = "rgba(18, 18, 18, 0.85)";
    header.style.boxShadow = "none";
  }
});

/* MOBILE MENU TOGGLE */
menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;

  navLinks.style.display = menuOpen ? "flex" : "none";
  navLinks.style.position = "absolute";
  navLinks.style.top = "72px";
  navLinks.style.right = "0";
  navLinks.style.width = "100%";
  navLinks.style.flexDirection = "column";
  navLinks.style.background = "#0b0b0b";
  navLinks.style.padding = "1.5rem";
  navLinks.style.gap = "1.2rem";
});

/* CLOSE MENU ON LINK CLICK */
navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menuOpen = false;
      navLinks.style.display = "none";
    }
  });
});

/* SMOOTH SCROLL WITH HEADER OFFSET */
navAnchors.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    const headerHeight = header.offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      10;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
