document.querySelector(".descr-list").addEventListener("click",(function(t){if(t.target===t.currentTarget)return;const e=t.target.classList;if(e.contains("description-item"))e.toggle("js-descr");else{t.target.closest(".description-item").classList.toggle("js-descr")}}));
//# sourceMappingURL=current-children-course.3edc87d8.js.map
