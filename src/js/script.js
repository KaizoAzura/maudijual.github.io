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
