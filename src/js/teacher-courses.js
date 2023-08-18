import Pikaday from 'pikaday';
let currentYear = new Date().getFullYear();

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  //   format: 'D MMM YYYY',
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
