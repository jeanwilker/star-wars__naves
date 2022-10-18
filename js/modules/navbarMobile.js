export default function initNavbarMobile() {
  const navbarMobile = document.querySelector('[data-navbar-mobile="transform"]');
  const navbarMenu  = document.querySelector('.navbar');

  function openMenu() {
    navbarMobile.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  };

  navbarMobile.addEventListener('click', openMenu);
};