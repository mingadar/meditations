class MeditationTimer {
    constructor(audioElement, durationInSeconds, timerElement) {
        this.audioElement = audioElement;
        this.durationInSeconds = durationInSeconds;
        this.timerElement = timerElement;
        this.interval = null;
    }
  
    start() {
        this.interval = setInterval(() => {
        const currentTime = Math.floor(this.audioElement.currentTime);
        const remainingTime = this.durationInSeconds - currentTime;
  
        if (remainingTime < 0) {
            clearInterval(this.interval);
            return;
        }
  
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        this.timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000);
    }
  
    stop() {
        clearInterval(this.interval);
    }
  }

  const oceanMeditationTimer = new MeditationTimer(
    document.querySelector('#player'),
    719, // 11 minutes and 52 seconds in seconds
    document.getElementById('timer'),
  );

  oceanMeditationTimer.audioElement.addEventListener('play', () => {
    oceanMeditationTimer.start();
  });
  
  oceanMeditationTimer.audioElement.addEventListener('pause', () => {
    oceanMeditationTimer.stop();
  });

  oceanMeditationTimer.audioElement.addEventListener('timeupdate', () => {
    if (!oceanMeditationTimer.audioElement.paused) {
      oceanMeditationTimer.start();
    }
  });

// Get the SVG element by its ID
const svgElement = document.getElementById('like-svg');

// Get the path element
const pathElement = svgElement.querySelector('path');

// Check if the fill color is stored in localStorage
const storedColor = localStorage.getItem('svgFillColor');
if (storedColor) {
  // Set the fill color from localStorage
  pathElement.setAttribute('fill', storedColor);
}

// Add a click event listener
svgElement.addEventListener('click', function() {
  // Get the current fill color
  const currentColor = pathElement.getAttribute('fill');
  
  // Toggle the fill color between red and white
  if (currentColor === 'red') {
    pathElement.setAttribute('fill', 'white');
    // Store the fill color in localStorage
    localStorage.setItem('svgFillColor', 'white');
  } else {
    pathElement.setAttribute('fill', 'red');
    // Store the fill color in localStorage
    localStorage.setItem('svgFillColor', 'red');
  }
});

// Get the heart logo element
const heartLogo = document.getElementById('heart');

// Add the 'heart-animation' class to start the animation
heartLogo.classList.add('heart-animation');