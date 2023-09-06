document.querySelector(".descr-list").addEventListener("click",(function(t){if(t.target===t.currentTarget)return;const e=t.target.classList;if(e.contains("description-item"))e.toggle("js-descr");else{t.target.closest(".description-item").classList.toggle("js-descr")}}));
//# sourceMappingURL=cur-teacher-course.e9071f2c.js.map
