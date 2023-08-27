const header = document.querySelector('.header');
const pageHeaderHeight = header.getBoundingClientRect().height;

document.body.style.paddingTop = `${pageHeaderHeight}px`;
