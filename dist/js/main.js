var hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener('click', function() {
  document.querySelector('.navbar-menu').classList.toggle('menu-visible');
}, false);
