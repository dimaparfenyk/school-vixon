'use strict';

const coursesList = document.querySelector('.children-courses-card-list');

coursesList.addEventListener('click', e => {
  console.dir(e.target);
  console.dir(e.currentTarget);
});
