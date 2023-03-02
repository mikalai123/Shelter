
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
const logo = document.querySelector('.header-logo');



function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  logo.classList.toggle('open')
}
hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);

// const hamburger = document.querySelector('.hamburger');
// const header = document.querySelector('.header-inner');




// function toggleMenu() {
//   hamburger.classList.toggle('open');
//   header.classList.toggle('open');
// }
// hamburger.addEventListener('click', toggleMenu);
// header-inner.addEventListener('click', toggleMenu);