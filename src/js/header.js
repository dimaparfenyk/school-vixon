const header = document.querySelector('.header');
const pagesLinks = document.querySelectorAll('.nav-link');

const makeHeaderFixed = () => {
  const pageHeaderHeight = header.getBoundingClientRect().height;

  document.body.style.paddingTop = `${pageHeaderHeight}px`;
};

const highlightCurPage = () => {
  const currentUrl = window.location.href;

  const curPage = [...pagesLinks].find(link => link.href === currentUrl);

  if (!curPage) return;

  curPage.setAttribute('aria-current', 'page');
  curPage.addEventListener('click', e => e.preventDefault());
};

highlightCurPage();
makeHeaderFixed();
