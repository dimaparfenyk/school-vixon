const descrListRef = document.querySelector('.descr-list');

descrListRef.addEventListener('click', toggleAccordion);

function toggleAccordion(e) {
  if (e.target === e.currentTarget) return;

  const clickedItem = e.target.classList;

  if (clickedItem.contains('description-item')) {
    clickedItem.toggle('js-descr');
  } else {
    const curParentItem = e.target.closest('.description-item');
    curParentItem.classList.toggle('js-descr');
  }
}
