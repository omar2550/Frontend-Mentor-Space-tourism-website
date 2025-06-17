window.onload = function () {
  if (window.innerWidth >= 992) {
    document.body.style.backgroundImage = `url("/assets/crew/background-crew-desktop.jpg")`;
  } else if (window.innerWidth >= 768) {
    document.body.style.backgroundImage = `url("/assets/crew/background-crew-tablet.jpg")`;
  } else {
    document.body.style.backgroundImage = `url("/assets/crew/background-crew-mobile.jpg")`;
  }
};
