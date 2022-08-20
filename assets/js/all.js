"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 學習程式swiper
var swiper1 = new Swiper(".Swiper1", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
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
}); // review swiper

var swiper2 = new Swiper('.swiper2', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // 分頁   
  pagination: {
    el: '.swiper-pagination'
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true,
  loop: true
}); // class swiper

var swiper3 = new Swiper(".Swiper3", (_Swiper = {
  slidesPerView: 2,
  spaceBetween: 10,
  // init: true,
  freeMode: true,
  loop: true,
  loopAdditionalSlides: 6,
  loopPreventsSlide: true,
  loopedSlides: 6
}, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "breakpoints", {
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
    slidesPerView: 6,
    spaceBetween: 10
  },
  1440: {
    slidesPerView: 6,
    spaceBetween: 0
  }
}), _Swiper)); // datepicker

var elem = document.querySelector('input[name="foo"]');
var datepicker = new Datepicker(elem, {// ...options
}); // const datepicker = new Datepicker(elem, {
//   buttonClass: 'datepicker',
// });
//# sourceMappingURL=all.js.map
