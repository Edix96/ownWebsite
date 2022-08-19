function changeTheme(currentTheme) {
  if (currentTheme == "ligth") {
    document.body.classList.add("dark");
    console.log(currentTheme);
  } else {
    document.body.classList.remove("dark");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  delay: 1000,
  origin: "top",
  distance: "30px",
  duration: 1000,
}).reveal(`
    #profile-img,
    #title,
    #social-media`);
