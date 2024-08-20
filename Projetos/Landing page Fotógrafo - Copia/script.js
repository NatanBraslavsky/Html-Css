const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});
