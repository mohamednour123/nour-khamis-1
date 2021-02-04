//selectors
let header = document.querySelector('.header');
let Hamburgermenu = document.querySelector('.Hamburger-menu');

Hamburgermenu.addEventListener('click', function () {
    header.ClassList.toggle('menu-open');
})