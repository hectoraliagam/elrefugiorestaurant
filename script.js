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
