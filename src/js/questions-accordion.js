const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', toggleClassName);

function toggleClassName(e) {
  if (e.target === e.currentTarget) return;

  const clickedItem = e.target.classList;

  if (clickedItem.contains('accordion__item')) {
    clickedItem.toggle('accordion__item-active');
  } else {
    const curParentItem = e.target.closest('.accordion__item');
    curParentItem.classList.toggle('accordion__item-active');
  }
}
// document.addEventListener('XY', function () {}, { passive: true });
