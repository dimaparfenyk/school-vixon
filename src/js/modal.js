import { Notify } from 'notiflix';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  closeModalButtons: [...document.querySelectorAll('[data-modal-close]')],
  openModalButtons: [...document.querySelectorAll('[data-open-modal]')],
  modal: document.querySelector('.modal'),
  form: document.querySelector('.modal__form'),
  successPayment: document.querySelector('.after-payment-box'),
};

const notifyOptions = {
  width: '300px',
  borderRadius: '20px',
  position: 'center-top',
  zindex: 10000000000,
  cssAnimationStyle: 'from-left',
  cssAnimationDuration: 600,
  clickToClose: true,
  showOnlyTheLastOne: true,
};

let isFormSubmit = false;

hangEvtHandlerOnBtns(refs.closeModalButtons, toggleModal);
hangEvtHandlerOnBtns(refs.openModalButtons, toggleModal);
window.addEventListener('keydown', onEscPress);
refs.backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
});
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  //  изменение стилей при попытке сабмитнуть форму с незаполненными обязательными полями

  const requiredFields = e.currentTarget.querySelectorAll('[data-require]');
  const emptyFields = Array.from(requiredFields).filter(el => el.value === '');

  if (emptyFields.length > 0) {
    Notify.failure('Заполните все обязательные поля', notifyOptions);

    return emptyFields.forEach(el => {
      el.classList.add('feedback-form__input-error');

      el.addEventListener('input', e => {
        if (e.target.value !== '') {
          el.classList.remove('feedback-form__input-error');
        }
      });
    });
  }

  const formData = new FormData(e.currentTarget);
  let data = {};

  formData.forEach((name, value) => {
    data[value] = name;
  });

  e.currentTarget.reset();
  // если форма сабмит - прячем форму и выводим приветствие
  toggleModalInnerContent();
  Notify.success('Проверьте Вашу почту.', notifyOptions);
}

function toggleModal() {
  if (isFormSubmit) {
    toggleModalInnerContent();
  }
  refs.backdrop.classList.toggle('is-visible');
}

function onEscPress(e) {
  let isHidden = refs.backdrop.classList.contains('is-visible');
  if (e.code === 'Escape' && !isHidden) {
    toggleModal();
  }
}

function toggleModalInnerContent() {
  isFormSubmit = !isFormSubmit;
  refs.form.classList.toggle('is-hidden');
  refs.successPayment.classList.toggle('is-hidden');
}

function hangEvtHandlerOnBtns(buttons, callback) {
  for (const btn of buttons) {
    btn.addEventListener('click', callback);
  }
}
