// 'use strict';
// import courses from '../data/children-courses';

// const coursesCardSetRef = document.querySelector('.children-courses-cardset');
// const containerRef = document.querySelector('.container');

// const coursesGalleryMarkup = courses
//   .map(({ id, image, title }) => {
//     return ` <li class="children-courses-card" id="${id}">
// <img
//   src=${image}
//   alt="${title}"
//   data-action="open"
//   loading="lazy"
// />
// <div class="course-card-info">
//   <div class="course-subinfo">
//     <p class="course-card-text" data-start>старт 17.09.22</p>
//     <p class="course-card-text" data-group>группа до 7 чел</p>
//     <p class="course-card-text" data-time>время 4 мес</p>
//     <p class="course-card-text" data-price>цена 6000 грн</p>
//   </div>
//   <h3 class="course-name" data-action="open">
//     ${title}
//   </h3>
// </div>
// </li>`;
//   })
//   .join('');

// coursesCardSetRef.insertAdjacentHTML('beforeend', coursesGalleryMarkup);

// coursesCardSetRef.addEventListener('click', e => {
//   if (e.target.dataset.action !== 'open') return;

//   // const currentCourse = e.target.closest('.children-courses-card');

//   // находим целевой курс по идентификатору
//   // const targetCourse = courses.find(course => course.id === currentCourse.id);

//   // window.location.href += '/' + targetCourse.id + '.html';
// });

// Url-string
// const currentUrl = window.location.href;
