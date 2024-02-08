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

// ====== Infiniti text horizontal  Scroll
const rows = document.querySelectorAll('.cb-tagreel-row');

rows.forEach(function (e, i) {
  let row_width = e.getBoundingClientRect().width;
  let row_item_width = e.children[0].getBoundingClientRect().width;
  let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
  let x_translation = initial_offset * -1;
  // console.log(e.children[0].clientWidth);

  gsap.set(e, {
    xPercent: `${initial_offset}`,
  });

  let duration = 25 * (i + 1);

  var tl = gsap.timeline();

  tl.to(e, {
    ease: 'none',
    duration: duration,
    xPercent: 0,
    repeat: -1,
  });
});

// ========= Section hover

const contactbutton = document.querySelector('.contact-button');
const card = document.querySelector('.card');
card.addEventListener('mouseenter', (e) => {
  contactbutton.classList.add('active-button');
  
});

card.addEventListener('mouseleave', (e) => {
  contactbutton.classList.remove('active-button');
});

card.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  contactbutton.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)  `;
});
