document.addEventListener('DOMContentLoaded', () => {
    const subtitleElement = document.querySelector('.subtitle');
    const phrases = [
        'Front end developer',
        'UI/UX Enthusiast',
        'Lifelong Learner',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseDuration = 2000;

    function typeAnimationLoop() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        subtitleElement.textContent = currentPhrase.substring(0, charIndex);
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeAnimationLoop, pauseDuration);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeAnimationLoop, speed);
    }
    typeAnimationLoop();
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});
scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});
