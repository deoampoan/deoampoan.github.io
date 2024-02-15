
function sendEmail() {
    window.open('gwapzdhie@gmail.com');
};

const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function updateCarouselWidth() {
    const carouselWidth = carousel.offsetWidth;
    carousel.computedStyleMap.transform = 'translateX(-${currentIndex * carouselWidth}px)';
}

window.addEventListener('resize', updateCarouselWidth);

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = Math.max(currentIndex -1, 0);
    updateCarouselWidth();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = Math.min(currentIndex +1, 4);
    updateCarouselWidth();
});