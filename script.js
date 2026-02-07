const overlay = document.getElementById('overlay');
const btn = document.getElementById('open-btn');
const music = document.getElementById('bg-music');

// 1. The main button logic
btn.addEventListener('click', () => {
  music.play().catch(e => console.log("Music play failed:", e));
  overlay.classList.add('hidden');
  
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    // Show the question after 7 seconds
    setTimeout(() => {
      const message = document.getElementById('valentine-question');
      if(message) {
        message.classList.remove('message-hidden');
        message.classList.add('message-visible');
      }
    }, 7000); 

  }, 500);
});

// 2. The Yes button logic (Must be OUTSIDE the listener above)
function showItinerary() {
  const question = document.getElementById('valentine-question');
  const itinerary = document.getElementById('itinerary');

  // Hide the question
  question.classList.remove('message-visible');
  question.classList.add('message-hidden');

  // Show the itinerary
  setTimeout(() => {
    itinerary.classList.remove('message-hidden');
    itinerary.classList.add('message-visible');
    
    // START THE HEARTS!
    createHearts();
  }, 600);
}

function createHearts() {
  const heartColors = ['💜', '✨', '🌸', '💜', '🤍'];
  
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-float';
      heart.innerHTML = heartColors[Math.floor(Math.random() * heartColors.length)];
      
      // Randomize position and speed
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      heart.style.opacity = Math.random();
      
      document.body.appendChild(heart);
      
      // Clean up the heart after animation ends
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 150); // Hearts will spawn one by one
  }
}
function closeItinerary() {
  const itinerary = document.getElementById('itinerary');
  
  // Remove the visible class and add the hidden class
  itinerary.classList.remove('message-visible');
  itinerary.classList.add('message-hidden');
}