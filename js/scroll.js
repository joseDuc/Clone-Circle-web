
const scrollUpBtn = document.querySelector(".btn-scroll");
/*
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollUpBtn.style.visibility = "visible";
    } else {
        scrollUpBtn.style.visibility = "hidden";
    }
};
*/
//capturar el evento 'scroll' de document para visibilizar o no el botón de dirección al top
document.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollUpBtn.style.visibility = "visible";
    } else {
        scrollUpBtn.style.visibility = "hidden";
    }
});
//capturar el evento 'clic' para ejecutar el desplazamiento
scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0
        //,behavior: "smooth"
    });
});
