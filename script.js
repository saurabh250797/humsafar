const textBtn = document.getElementById('text-btn');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');

// 1. Moving Button Logic (Runaway)
function moveButton() {
    // Offset to prevent button from going off-screen
    const padding = 20;
    const maxX = window.innerWidth - textBtn.offsetWidth - padding;
    const maxY = window.innerHeight - textBtn.offsetHeight - padding;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    textBtn.style.position = 'fixed';
    textBtn.style.left = randomX + 'px';
    textBtn.style.top = randomY + 'px';
    textBtn.style.zIndex = '999';
}

// MacBook (Mouse) trigger
textBtn.addEventListener('mouseover', moveButton);

// Mobile (Touch) trigger
textBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // This stops her from actually clicking it
    moveButton();
});

// 2. Success Celebration
function showCelebration() {
    questionSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    // Create exactly 41 hearts (one for each day remaining)
    for (let i = 0; i < 41; i++) {
        setTimeout(createHeart, i * 150);
    }
}

// 3. Heart Factory
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    document.getElementById('heart-container').appendChild(heart);
    
    // Cleanup to keep memory low (Good Data Practice!)
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Start a very slow background atmosphere
setInterval(createHeart, 2500);