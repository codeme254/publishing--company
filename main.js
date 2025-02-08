const toggleMenuBtn = document.getElementById("toggle-menu-btn");
const nav = document.getElementById("header-nav");

toggleMenuBtn.addEventListener("click", () => {
  console.log("working");
  nav.classList.toggle("nav-active");
});
