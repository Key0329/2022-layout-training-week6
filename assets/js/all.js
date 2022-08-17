"use strict";

// 學習程式swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 10
    },
    1440: {
      slidesPerView: 10,
      spaceBetween: 0
    }
  }
});
//# sourceMappingURL=all.js.map
