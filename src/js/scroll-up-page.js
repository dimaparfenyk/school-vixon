import throttle from 'lodash.throttle';

const footer = document.querySelector('.footer');
const scrollUpBtn = document.querySelector('.scroll-up-btn');

hideScrollUpBtn();
scrollUpBtn.addEventListener('click', scrollPageToTop);
document.addEventListener('scroll', throttle(hideScrollUpBtn, 200));

function hideScrollUpBtn() {
  if (window.scrollY < 400) {
    scrollUpBtn.style.opacity = 0;
    scrollUpBtn.style.pointerEvents = 'none';
  } else {
    positionedBtn();
    scrollUpBtn.style.opacity = 0.8;
    scrollUpBtn.style.pointerEvents = 'auto';
  }
}

function positionedBtn() {
  let bottomPositionOfBtn = `${footer.getBoundingClientRect().height + 10}px`;
  scrollUpBtn.style.bottom = bottomPositionOfBtn;
}

function scrollPageToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
