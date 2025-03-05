document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower');
    setTimeout(() => {
        flower.classList.add('show');
    }, 500);
});