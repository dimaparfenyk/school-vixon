const refs = {
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop'),
  closeModalBtnList: [...document.querySelectorAll('[data-modal-close]')],
  openModalBtn: [...document.querySelectorAll('[data-open-modal]')],
};

refs.closeModalBtnList.map(btn => btn.addEventListener('click', toggleModal));
refs.openModalBtn.map(btn => btn.addEventListener('click', toggleModal));
refs.body.addEventListener('keydown', closeModalbyEsc);
refs.backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
});

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

function closeModalbyEsc(e) {
  let isHidden = refs.backdrop.classList.contains('is-hidden');
  if (e.code === 'Escape' && !isHidden) {
    toggleModal();
  }
}
