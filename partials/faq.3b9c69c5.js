document.querySelector(".accordion").addEventListener("click",(function(t){if(t.target===t.currentTarget)return;const e=t.target.classList;if(e.contains("accordion__item"))e.toggle("accordion__item-active");else{t.target.closest(".accordion__item").classList.toggle("accordion__item-active")}}));
//# sourceMappingURL=faq.3b9c69c5.js.map
