const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links li a");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Đổi icon giữa bars ↔ X
  const icon = menuIcon.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
