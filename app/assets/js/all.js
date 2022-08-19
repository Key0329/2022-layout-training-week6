// 學習程式swiper

const swiper1 = new Swiper(".Swiper1", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 10,
      spaceBetween: 0,
    },
  },
});



// review swiper

const swiper2 = new Swiper('.swiper2', {

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // 分頁   
  pagination: {
    el: '.swiper-pagination',
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  

});

// class swiper

const swiper3 = new Swiper(".Swiper3", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});
