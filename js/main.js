const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-link-container');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
// const body = document.querySelector('body');

function activate() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
//   body.classList.toggle('lock-scroll');
}

hamburger.addEventListener('click', () => {
  activate();
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    activate();
  });
});