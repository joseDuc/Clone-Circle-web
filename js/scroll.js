// This component will create the behaviour for a button that let us go to the top of the page.
const scrollUpBtn = document.querySelector(".btn-scroll");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollUpBtn.style.visibility = "visible";
    } else {
        scrollUpBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
