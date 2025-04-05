let currentIndex = 0;
const images = document.querySelectorAll('.image');
const totalImages = images.length;
let intervalId;
let isPaused = false;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = 'none';
    });
    images[index].style.display = 'block';
}

function startCarousel() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }, 1000);
}

function stopCarousel() {
    clearInterval(intervalId);
    isPaused = true;
}

function nextImage() {
    if (isPaused) {
        startCarousel(); 
        isPaused = false;
    }
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    if (isPaused) {
        startCarousel(); 
        isPaused = false;
    }
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

startCarousel();
