let fullscreenMenu = document.querySelector (".fullscreen-menu");
let hamburger = document.querySelector (".hamburger");
let fullscreenMenuClose = document.querySelector (".fullscreen-menu__close")

function toggleMenu () {
  event.preventDefault();
  hamburger.classList.toggle ('hamburger--active');
  fullscreenMenu.classList.toggle ('fullscreen-menu--active');
};

hamburger.addEventListener ('click', toggleMenu);
fullscreenMenuClose.addEventListener ('click', toggleMenu);