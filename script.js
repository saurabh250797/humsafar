const textBtn = document.getElementById('text-btn');
const resultSection = document.getElementById('result-section');
const questionSection = document.getElementById('question-section');

function moveButton() {
    // Keeps it safe within the screen edges
    const x = Math.random() * (window.innerWidth - textBtn.offsetWidth - 40);
    const y = Math.random() * (window.innerHeight - textBtn.offsetHeight - 40);
    
    textBtn.style.position = 'fixed';
    textBtn.style.left = `${x}px`;
    textBtn.style.top = `${y}px`;
    textBtn.style.transition = '0.2s all ease';
}

textBtn.addEventListener('mouseover', moveButton);
textBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

function showCelebration() {
    // Add a fade-out effect to question
    questionSection.style.opacity = '0';
    setTimeout(() => {
        questionSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        resultSection.style.opacity = '1';
        
        // 41 Hearts for 41 Days
        for(let i = 0; i < 41; i++) {
            setTimeout(createHeart, i * 150);
        }
    }, 500);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.getElementById('heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// Very subtle slow background hearts
setInterval(createHeart, 2000);