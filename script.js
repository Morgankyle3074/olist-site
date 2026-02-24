// script.js

// Highlight active nav link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const setActive = () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute("id");
  });

  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActive);
setActive();

// Footer year (safe if the element exists)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
