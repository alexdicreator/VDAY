// script.js
const showMessageButton = document.getElementById('showMessage');
const hiddenMessage = document.getElementById('hiddenMessage');
const heartsContainer = document.querySelector('.hearts-container');
const audio = new Audio('file:///C:/Users/alexb/Downloads/Voice%20002.m4a');
audio.loop = true;
audio.play();

showMessageButton.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
});


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(heart);
}

// Create multiple hearts
for (let i = 0; i < 20; i++) {
    createHeart();
}