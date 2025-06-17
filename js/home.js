window.onload = function () {
  if (window.innerWidth >= 992) {
    document.body.style.backgroundImage = `url("assets/home/background-home-desktop.jpg")`;
  } else if (window.innerWidth >= 768) {
    document.body.style.backgroundImage = `url("assets/home/background-home-tablet.jpg")`;
  } else {
    document.body.style.backgroundImage = `url("assets/home/background-home-mobile.jpg")`;
  }
};

document
  .querySelector("section .button .start-btn")
  .addEventListener("click", () => {
    window.location.href = "destination-moon.html";
  });
