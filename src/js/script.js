window.addEventListener("scroll", function () {
  const previewImage = document.querySelector(".preview-image");

  if (window.innerWidth > 992) {
    const scrollPosition = window.scrollY;
    const previewImageOffsetTop = previewImage.offsetTop;

    if (scrollPosition >= previewImageOffsetTop) {
      previewImage.style.width = "100%";
    } else {
      previewImage.style.width = "80%";
    }
  } else {
    previewImage.style.width = "100%";
  }
});

// slider animation slick
$(document).ready(function () {
  function slickInit() {
    if ($(window).width() < 768) {
      if (!$(".slider-container").hasClass("slick-initialized")) {
        $(".slider-container").slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: true,
        });
      }
    } else {
      if ($(".slider-container").hasClass("slick-initialized")) {
        $(".slider-container").slick("unslick");
      }
    }
  }

  // Inisialisasi saat pertama kali load
  slickInit();

  // Cek saat window di-resize
  $(window).on("resize", function () {
    slickInit();
  });
});
