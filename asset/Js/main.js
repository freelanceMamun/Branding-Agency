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

gsap.timeline().from('.md-title', {
  y: 100,
  opacity: 0,
  duration: 1.2,
  autoAlpha: 0,

  stagger: function (index, target, list) {
    // your custom logic here. Return the delay from the start (not between each)
    return index * 0.5;
  },
});

// ======

const rows = document.querySelectorAll('.cb-tagreel-row');

rows.forEach(function (e, i) {
  let row_width = e.getBoundingClientRect().width;
  let row_item_width = e.children[0].getBoundingClientRect().width;
  let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
  let x_translation = initial_offset * -1;

  gsap.set(e, {
    xPercent: `${initial_offset}`,
  });

  let duration = 25 * (i + 2);

  var tl = gsap.timeline();

  tl.to(e, {
    ease: 'none',
    duration: duration,
    xPercent: 0,
    repeat: -1,
  });
});

// gsap.registerPlugin(ScrollTrigger);

// const textElements = gsap.utils.toArray('.text');

// textElements.forEach((text) => {
//   gsap.to(text, {
//     backgroundSize: '100%',
//     ease: 'none',
//     scrollTrigger: {
//       trigger: text,
//       start: 'center 80%',
//       end: 'center 20%',
//       scrub: true,
//     },
//   });
// });
