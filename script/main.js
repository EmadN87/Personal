const scrollTopBtn = document.querySelector('#scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const subtitleElement = document.querySelector('.subtitle');
    const textToType = "Front end developer";
    let index = 0;
    subtitleElement.textContent = ''; 
    const type = () => {
        if (index < textToType.length) {
            subtitleElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 200);
        }
    }
    type();
});