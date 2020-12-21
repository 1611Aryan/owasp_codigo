const $ = (element) => {
    return document.querySelector(element);
};
let x = 0;
let y = 0;
const BWImage = $(".black_white");
window.addEventListener("scroll", () => {
    if (pageYOffset > 0.5 * innerHeight) {
        $("header").classList.add("navChange");
    }
    if (pageYOffset > 0.9 * innerHeight) {
        $(".aboutUs__content").classList.add("aboutUs__contentFinalPos");
    }
    if (pageYOffset < 0.9 * innerHeight) {
        $(".aboutUs__content").classList.remove("aboutUs__contentFinalPos");
    }
    if (pageYOffset > 1.7 * innerHeight) {
        $(".aboutUs__content").classList.remove("aboutUs__contentFinalPos");
    }
    if (pageYOffset <= 0.9 * innerHeight) {
        $("header").classList.remove("navChange");
    }
});
$('.home').addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY + pageYOffset;
    BWImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
});
$('header').addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    BWImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
});
