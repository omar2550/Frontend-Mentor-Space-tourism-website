document.querySelector("nav .bars").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("opend");

  if (document.querySelector("nav ul").classList.contains("opend")) {
    document.querySelector("nav .bars").className = "fa-solid fa-x bars";
    document.querySelector("nav .bars").style.color = "white";
  } else {
    document.querySelector("nav .bars").className = "fa-solid fa-bars bars";
    document.querySelector("nav .bars").style.color = "revert-layer";
  }
});
