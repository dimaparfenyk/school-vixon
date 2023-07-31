'use strict';

const mobMenuNavBtn = document.querySelector('.nav-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const mobMenuCloseBtn = document.querySelector('.mob-menu-closeBtn');

mobMenuNavBtn.addEventListener('click', () => {
  mobMenu.classList.remove('is-hidden');
});

mobMenuCloseBtn.addEventListener('click', () => {
  mobMenu.classList.add('is-hidden');
});
