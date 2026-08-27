const menu = document.querySelector('.list-nav');
const btnMenu = document.querySelector('.btn-toggle-container');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active-menu');
});