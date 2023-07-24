const about = new Swiper('.about-content__slider-swiper', {
   loop: true,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   }, allowTouchMove: false,

   parallax: true,
   slidesPerView: 1,
   speed: 700,
   navigation: {
      nextEl: '.about-content__arrows-next',
      prevEl: '.about-content__arrows-prev',
   },
});
about.on('slideChange', function () {
   const slide_2 = document.querySelectorAll('.list-skils')
   if (!slide_2[0].classList.contains('_count-anim')) {
      if (about.realIndex == 1) {
         slide_2.forEach(item => {
            item.classList.add('_count-anim')
            const numbers_percent = item.querySelectorAll('.list-skils__name-percent span')

            numbers_percent.forEach(percent => {
               const percent_per = parseInt(percent.innerHTML)
               let num_step = 0
               let interval_about = setInterval(function () {
                  if (num_step <= percent_per) {
                     num_step += 1
                     percent.innerHTML = `${num_step - 1}%`
                  } else {
                     clearInterval(interval_about)
                  }
               }, 10)
            });
         });
      }
   }
});


const clients = new Swiper('.clients-says__slider', {
   loop: true,
   slidesPerView: 1,
   speed: 1400,
   centeredSlides: true,
   parallax: true,
   spaceBetween: 70,
   autoplay: {
      delay: 3000,
   },
   navigation: {
      nextEl: '.portfolio__clients-navigation-next',
      prevEl: '.portfolio__clients-navigation-prev',
   },
});

const home_slider_first = new Swiper('.main-home-slider__slider-first', {
   loop: true,
   slidesPerView: 1,
   speed: 1400,
   touchRation: 0.4,
   autoplay: {
      delay: 3000,
   },
   navigation: {
      prevEl: '.main-home-slider__navigation-prev',
      nextEl: '.main-home-slider__navigation-next',
   },
})
const home_slider_second = new Swiper('.main-home-slider__slider-second', {
   loop: true,
   slidesPerView: 1,
   touchRation: 0.4,
   speed: 1400,
   autoplay: {
      delay: 3000,
   },
});


const swipeAllSliders = (index) => {
   home_slider_first.slideTo(index);
   home_slider_second.slideTo(index);
}
home_slider_first.on('slideChange', () => swipeAllSliders(home_slider_first.activeIndex));
home_slider_second.on('slideChange', () => swipeAllSliders(home_slider_second.activeIndex));

const home2_slider = new Swiper('.main-home-2__slider', {
   loop: true,
   slidesPerView: 1,
   touchRation: 0.4,
   speed: 1400,
   autoplay: {
      delay: 5000,
   },
   allowTouchMove: false,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   navigation: {
      prevEl: '.home-2-buttons__navigation-prev',
      nextEl: '.home-2-buttons__navigation-next',
   },
   on: {
      init: home2Init,
   },
});
function home2Init() {
   document.querySelectorAll('.home-2-slide').forEach(home2Slide => {
      let home2Slide_index = Number(home2Slide.getAttribute('data-swiper-slide-index'))
      home2Slide_index <= 9 ? home2Slide.querySelector('.home-2-slide__number').innerHTML = `0${(home2Slide_index + 1)}` : home2Slide.querySelector('.home-2-slide__number').innerHTML = (home2Slide_index + 1)
   });
}


const about_comand_first = new Swiper('.comand-slider__slider-first', {
   loop: true,
   slidesPerView: 1,
   speed: 1400,
   touchRation: 0.4,
   autoplay: {
      delay: 3000,
   },
   navigation: {
      prevEl: '.comand-slider__navigation-prev',
      nextEl: '.comand-slider__navigation-next',
   },

})
const about_comand_second = new Swiper('.comand-slider__slider-second', {
   loop: true,
   slidesPerView: 1,
   touchRation: 0.4,
   speed: 1400,
   autoplay: {
      delay: 3000,
   },
});


const AboutComandSynchronyzation = (index) => {
   about_comand_first.slideTo(index);
   about_comand_second.slideTo(index);
}
about_comand_first.on('slideChange', () => AboutComandSynchronyzation(about_comand_first.activeIndex));
about_comand_second.on('slideChange', () => AboutComandSynchronyzation(about_comand_second.activeIndex));