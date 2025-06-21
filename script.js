function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function togglePopUp(projectNum) {
  let allPopUps = document.querySelectorAll(".details-popup");

  allPopUps.forEach((popup, index) => {
    if (index === projectNum-1) {
      popup.classList.toggle("open-popup");
    } else {
      popup.classList.remove("open-popup");
    }
  });
}