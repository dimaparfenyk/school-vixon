const Pikaday = require('pikaday');

let currentYear = new Date().getFullYear();

const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach((card, index) => {
  const datepickerInput = card.querySelector(`#datepicker${index + 1}`);
  if (datepickerInput) {
    const picker = new Pikaday({
      field: datepickerInput,
      bound: false,
      yearRange: [currentYear, currentYear + 1],
      i18n: {
        previousMonth: 'Предыдущий месяц',
        nextMonth: 'Следующий месяц',
        months: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь',
        ],
        weekdays: [
          'Понедельник',
          'Вторник',
          'Среда',
          'Четверг',
          'Пятница',
          'Суббота',
          'Воскресенье',
        ],
        weekdaysShort: ['Пон', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      },
    });
  }
});
