'use strict';

const mobMenuNavBtn = document.querySelector('.nav-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const mobMenuCloseBtn = document.querySelector('.mob-menu-closeBtn');
const body = document.querySelector('body');

mobMenuNavBtn.addEventListener('click', toggleMobMenuClass);
mobMenuCloseBtn.addEventListener('click', toggleMobMenuClass);

function toggleMobMenuClass() {
  mobMenu.classList.toggle('is-hidden');
  body.classList.toggle('is-overflowHidden');
}
