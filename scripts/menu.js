let fullscreenMenu = document.querySelector (".fullscreen-menu");
let hamburger = document.querySelector (".hamburger");

function toggleMenu () {
  hamburger.classList.toggle ('hamburger--active');
  fullscreenMenu.classList.toggle ('fullscreen-menu--active');
};

hamburger.addEventListener ('click', toggleMenu);
