$(document).ready(function () {
  $(
    "a[rel='home'], a[rel='about'], a[rel='team'], a[rel='services'], a[rel='process'], a[rel='client'], a[rel='wework']"
  ).mPageScroll2id();

  new WOW().init();

  //! Параллакс
  $(window).scroll(function () {
    var st = $(this).scrollTop();

    $(".men-bord-header").css({
      transform: "translate(0%, " + st / 60 + "%",
    });
  });

  $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slickCurrentSlide: 2,

    responsive: [
      {
        breakpoint: 3570,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $("#tabs #comment_1").siblings().fadeOut();

  $("#targgle_1").on("click", function () {
    $("#comment_1").fadeIn(500).siblings().fadeOut(0);
  });

  $("#targgle_2").on("click", function () {
    $("#comment_2").fadeIn(500).siblings().fadeOut(0);
  });

  $("#targgle_3").on("click", function () {
    $("#comment_3").fadeIn(500).siblings().fadeOut(0);
  });
});
