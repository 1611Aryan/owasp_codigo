const $ = (element) => {
    return document.querySelector(element);
};
let x = 0;
let y = 0;
const BWImage = document.querySelector(".black_white");
const eventCards = document.querySelectorAll('.eventCard');
window.addEventListener("scroll", () => {
    if (pageYOffset < 0.1 * innerHeight) {
        document.querySelector('.footer').classList.add('footerChange2');
    }
    if (pageYOffset > 0.5 * innerHeight) {
        document.querySelector("header").classList.add("navChange");
    }
    if (pageYOffset > 0.7 * innerHeight) {
        document.querySelector(".aboutUs__content").classList.add("aboutUs__contentFinalPos");
    }
    if (pageYOffset < 0.7 * innerHeight) {
        document.querySelector(".aboutUs__content").classList.remove("aboutUs__contentFinalPos");
    }
    if (pageYOffset > 1.7 * innerHeight) {
        document.querySelector(".aboutUs__content").classList.remove("aboutUs__contentFinalPos");
    }
    if (pageYOffset <= 0.9 * innerHeight) {
        document.querySelector("header").classList.remove("navChange");
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
        document.querySelector('.footer').classList.add('footerChange');
        document.querySelector('.footer').classList.remove('footerChange2');
    }
    else {
        document.querySelector('.footer').classList.remove('footerChange');
    }
});
document.querySelector('.home').addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY + pageYOffset;
    BWImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
});
document.querySelector('header').addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    BWImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
});
document.querySelector('.footer').addEventListener("mousemove", (e) => {
    if (pageYOffset <= 0) {
        x = e.clientX;
        y = e.clientY;
        BWImage.style.clipPath = `circle(100px at ${x}px ${y}px)`;
    }
});
document.querySelector('.goDown').addEventListener('click', () => {
    document.querySelector('.aboutUs').scrollIntoView();
});
document.querySelector('.logo').addEventListener('click', () => {
    document.querySelector('.home').scrollIntoView();
});
let posCounter = 0;
document.querySelector('.rightArrow').addEventListener('click', () => {
    posCounter++;
    if (posCounter > 3) {
        posCounter = 0;
    }
    document.querySelector('.pageContainer').style.transform = `translateX(calc(-100%/4*${posCounter}))`;
});
document.querySelector('.leftArrow').addEventListener('click', () => {
    posCounter--;
    if (posCounter < 0) {
        posCounter = 3;
    }
    document.querySelector('.pageContainer').style.transform = `translateX(calc(-100%/4*${posCounter}))`;
});
