// ==========   Swiper Slider function

function SwiperCustom(className, loop, autoplay) {
  new Swiper(`.${className}`, {
    spaceBetween: 30,
    effect: 'fade',
    loop: loop,
    auto: autoplay,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
  });
}

SwiperCustom('mySwiper', true, true);

// var swiper = new Swiper('.mySwiper', {
//   spaceBetween: 30,
//   effect: 'fade',
//   loop: true,
//   auto: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
