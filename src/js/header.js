const header = document.querySelector('.header');
const pagesLinks = [...document.querySelectorAll('.nav-link')];
const allPagesRefs = [...document.querySelectorAll('.js-nav-link')];

// URL текущей страницы
const curUrl = window.location.href;

const makeHeaderFixed = () => {
  const pageHeaderHeight = header.getBoundingClientRect().height;

  document.body.style.paddingTop = `${pageHeaderHeight}px`;
};

const findCurPageLink = (links, url) => {
  // находим ссылку href которой = URL тек. стр.
  const curPageLink = links.find(link => link.href === url);
  // если такой ссылки нет выходим
  if (!curPageLink) return;

  return curPageLink;
};

const preventReloadPage = (refs, url) => {
  const curPageLink = refs.filter(({ href }) => href === url);
  // предотвращаем перезагрузку страницы при повторном клике

  curPageLink.forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
  });
};

const highlightCurPage = () => {
  const curPageLink = findCurPageLink(pagesLinks, curUrl);
  // вешаем аттрибут для изменения стилей CSS на ссылку текущей стр.
  if (!curPageLink) return;
  curPageLink.setAttribute('aria-current', 'page');
};

highlightCurPage();
makeHeaderFixed();
preventReloadPage(allPagesRefs, curUrl);
