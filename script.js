const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");

  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

const navbar_link = document.querySelectorAll("#navbar a");

navbar_link.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");

    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
  });
});

const typed = new Typed(".multiple-text", {
  strings: ["Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1200,
  loop: true,
});
