/*
document.querySelector(".nav-burger").addEventListener("click", function () {
  document.querySelector(".header-nav-links-vertical").classList.toggle("nav-active");
  document.querySelector(".nav-burger").classList.toggle("grey-background");
  const burgerLines = document.querySelectorAll(".nav-burger .line");
  burgerLines.forEach((line) => {
    line.classList.toggle("white");
  });

  document.body.classList.toggle("no-scroll");
});

*/


document.querySelector(".nav-burger").addEventListener("click", function () {
  //agrega o elimina la clase pasada por el parámetro
  document.querySelector(".header-nav-links-vertical").classList.toggle("nav-active");
});