// ==========   Swiper Slider function

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// $(function () {
//   var $startAnim = $('#start-anim');
//   var $demoText = $('#demo-text');

//   //Split the text into characters and wrap every character into span element, then convert the whitespaces to whitespace characters.
//   $demoText.html(
//     $demoText.html().replace(/./g, '<h1>$&</h1>').replace(/\s/g, '&nbsp;')
//   );

//   $startAnim.on('click', startAnimation);

//   function startAnimation() {
//     TweenLite.set($startAnim, {
//       autoAlpha: 0,
//     });

//     //TweenMax.staggerFromTo( $demoText.find("span"), 0.4, {autoAlpha:0, scale:0}, {autoAlpha:1, scale:1}, 0.1, reset );

//     TweenMax.staggerFromTo(
//       $demoText.find('h1'),
//       0.4,
//       {
//         autoAlpha: 0,
//         scale: 7,
//       },
//       {
//         autoAlpha: 1,
//         scale: 1,
//       },
//       0.1
//     );
//   }

// function reset() {
//   TweenMax.to($startAnim, 1, {
//     autoAlpha: 1,
//   });
// }
// });
