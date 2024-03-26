const swiper1 = new Swiper(".swiper-services", {
    spaceBetween: 10, 
    loop: true, 
    rewind: true,  
    speed: 3000,   
  initialSlide: 3,     
  autoplay: {       
      delay:1000,
      // delay: 0,
      // disableOnInteraction: false
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        stretch: -60,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
//   navigation: {
//     nextEl: ".swiper-button-next-hero",
//     prevEl: ".swiper-button-prev-hero",
//     },
  pagination: {
        el: '.swiper-pagination-serv',
        clickable:true,
  },
});
const swiper2 = new Swiper(".swiper-reviews", {
  loop: true, 
  rewind: true,
	speed: 2000,
	grabCursor: true,
	slidesPerView: "auto",
	spaceBetween: 24,
  // initialSlide: 3,     
    // autoplay: {       
    //     delay: 3000,
    // },   
  navigation: {
    nextEl: ".swiper-button-next-rev",
    prevEl: ".swiper-button-prev-rev",
    },
  // pagination: {
  //       el: '.swiper-pagination-serv',
  //       clickable:true,
  // },
});

const swiper3 = new Swiper(".swiper-adv", {
  loop: true, 
  rewind: true,
	speed: 2000,
	grabCursor: true,
	slidesPerView: "auto",
	spaceBetween: 24,
  // initialSlide: 3,     
    // autoplay: {       
    //     delay: 3000,
    // },   
  // navigation: {
  //   nextEl: ".swiper-button-next-rev",
  //   prevEl: ".swiper-button-prev-rev",
  //   },
  pagination: {
        el: '.swiper-pagination-adv',
        clickable:true,
  },
});

const swiper4 = new Swiper(".swiper-team", {
  loop: true, 
  rewind: true,
	speed: 2000,
	grabCursor: true,
	slidesPerView: "auto",
	spaceBetween: 16,
 breakpoints: {  
    // when window width is >= 480px
    480: {
      slidesPerView: 2,     
    }  
  },
  pagination: {
        el: '.swiper-pagination-team',
        clickable:true,
  },
});