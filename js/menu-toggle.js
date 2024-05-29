const menuIcon = document.querySelector('.menu-icono');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});