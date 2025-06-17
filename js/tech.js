window.onload = function () {
  if (window.innerWidth >= 992) {
    document.body.style.backgroundImage = `url("assets/technology/background-technology-desktop.jpg")`;
  } else if (window.innerWidth >= 768) {
    document.body.style.backgroundImage = `url("assets/technology/background-technology-tablet.jpg")`;
  } else {
    document.body.style.backgroundImage = `url("assets/technology/background-technology-mobile.jpg")`;
  }
};
