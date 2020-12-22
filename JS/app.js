const $ = (element) => {
    return document.querySelector(element);
};
let x = 0;
let y = 0;
const BWImage = $(".black_white");
window.onload = () => {
    if (pageYOffset < 0.1 * innerHeight) {
        $('.footer').classList.add('footerChange2');
    }
};
const eventCards = document.querySelectorAll('.eventCard');
window.addEventListener("scroll", () => {
    if (pageYOffset < 0.1 * innerHeight) {
        $('.footer').classList.add('footerChange2');
    }
    if (pageYOffset > 0.5 * innerHeight) {
        $("header").classList.add("navChange");
    }
    if (pageYOffset > 0.7 * innerHeight) {
        $(".aboutUs__content").classList.add("aboutUs__contentFinalPos");
    }
    if (pageYOffset < 0.7 * innerHeight) {
        $(".aboutUs__content").classList.remove("aboutUs__contentFinalPos");
    }
    if (pageYOffset > 1.7 * innerHeight) {
        $(".aboutUs__content").classList.remove("aboutUs__contentFinalPos");
    }
    if (pageYOffset <= 0.9 * innerHeight) {
        $("header").classList.remove("navChange");
    }
    if (pageYOffset > 1.4 * innerHeight) {
        eventCards.forEach(card => {
            card.style.opacity = '1';
        });
    }
    if (pageYOffset > 2.3 * innerHeight) {
        eventCards.forEach(card => {
            card.style.opacity = '0';
        });
    }
    if (pageYOffset > 0.1 * innerHeight && pageYOffset < 3 * innerHeight) {
        $('.footer').classList.add('footerChange');
        $('.footer').classList.remove('footerChange2');
    }
    else {
        $('.footer').classList.remove('footerChange');
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
$('.footer').addEventListener("mousemove", (e) => {
    if (pageYOffset <= 0) {
        x = e.clientX;
        y = e.clientY;
        BWImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
    }
});
$('.goDown').addEventListener('click', () => {
    $('.aboutUs').scrollIntoView();
});
$('.logo').addEventListener('click', () => {
    $('.home').scrollIntoView();
});
let posCounter = 0;
$('.rightArrow').addEventListener('click', () => {
    posCounter++;
    if (posCounter > 3) {
        posCounter = 0;
    }
    $('.pageContainer').style.transform = `translateX(calc(-100%/4*${posCounter}))`;
});
$('.leftArrow').addEventListener('click', () => {
    posCounter--;
    if (posCounter < 0) {
        posCounter = 3;
    }
    $('.pageContainer').style.transform = `translateX(calc(-100%/4*${posCounter}))`;
});
