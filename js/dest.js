window.onload = function () {
  if (window.innerWidth >= 992) {
    document.body.style.backgroundImage = `url("/assets/destination/background-destination-desktop.jpg")`;
  } else if (window.innerWidth >= 768) {
    document.body.style.backgroundImage = `url("/assets/destination/background-destination-tablet.jpg")`;
  } else {
    document.body.style.backgroundImage = `url("/assets/destination/background-destination-mobile.jpg")`;
  }
};
