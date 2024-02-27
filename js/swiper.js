const swiper1 = new Swiper(".swiper-services", {
    spaceBetween: 20, 
    loop: true, 
    rewind: true,  
    speed: 1000,  
  initialSlide: 3,
     
    // autoplay: {       
    //     delay: 3000,
    // },
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
	speed: 500,
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
