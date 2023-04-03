const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
const logo = document.querySelector('.header-logo');



// const title = document.querySelector('.header-title');
// const text = document.querySelector('.header-text');



function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  logo.classList.toggle('open');



  // title.classList.toggle('open');
  // text.classList.toggle('open')
}
hamburger.addEventListener('click', toggleMenu);


// nav.addEventListener('click', toggleMenu);