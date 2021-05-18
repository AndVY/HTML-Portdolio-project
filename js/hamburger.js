const mobIcon = document.querySelector('.mobile-menu-icon');
const mobMenu = document.querySelector('.mobile-menu');
const mobMenuContent = document.querySelector('.mobile-menu__content');
const overlay = document.querySelector('#overlay');
const bodyElement = document.body;

function toggleMobileMenu() {
    mobIcon.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyElement.classList.toggle('noscroll');
}

mobIcon.addEventListener('click', () => {
    toggleMobileMenu();
});

overlay.addEventListener('click', () => {
    toggleMobileMenu();
});

mobMenuContent.addEventListener('click', () => {
    toggleMobileMenu();
});