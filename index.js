const navBtn = document.getElementById('nav-btn');
const menuContent = document.getElementById('menu-content');
const allNavLinks = document.querySelectorAll('.navbar-item');

/* burger menu */
navBtn.addEventListener('click', () => {
  menuContent.classList.toggle('is-active');
  navBtn.classList.toggle('is-active');
});

/* All nav links closing burger-navbar*/
allNavLinks.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    menuContent.classList.toggle('is-active');
  });
});
