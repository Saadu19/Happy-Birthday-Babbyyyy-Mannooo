// Music Play/Pause
const music = document.getElementById('music');
const musicButton = document.getElementById('music-button');

// Set the volume to 50%
music.volume = 0.3;


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

// Function to create static hearts in a checkered pattern
function createCheckeredHearts() {
  const heart = document.createElement('div');
  heart.classList.add('static-heart');

  // Checkered pattern: Set fixed grid positions
  const rows = 10;  // Number of rows in the checkered grid
  const cols = 10;  // Number of columns in the checkered grid
  const spacing = 10;  // Spacing between the hearts

  // Loop through the grid and place hearts in alternating positions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {  // Alternates the hearts (checkered effect)
        const xOffset = j * spacing;  // Horizontal offset
        const yOffset = i * spacing;  // Vertical offset

        // Create heart and position it
        const newHeart = document.createElement('div');
        newHeart.classList.add('static-heart');
        newHeart.style.left = `${xOffset}%`;
        newHeart.style.top = `${yOffset}%`;

        // Append the heart to the container
        document.getElementById('heart-container').appendChild(newHeart);
      }
    }
  }
}

