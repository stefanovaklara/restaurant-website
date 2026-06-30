document.addEventListener('DOMContentLoaded', () => {
    console.log('%cРесторан Пелистер - Скопје успешно вчитан!', 'color: #8B4513; font-size: 16px;');


    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});