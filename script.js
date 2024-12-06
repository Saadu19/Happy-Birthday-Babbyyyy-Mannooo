// Music Play/Pause
const music = document.getElementById('music');
const musicButton = document.getElementById('music-button');

musicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicButton.textContent = 'Pause Music';
  } else {
    music.pause();
    musicButton.textContent = 'Play Music';
  }
});

// Hearts Animation
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);
