$('.main-gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
  
$('.main-benefits-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false
        }
      },
    ]
  });

new WOW().init();






