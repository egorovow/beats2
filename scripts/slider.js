const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});

$('.product__icon-left').click( e => {
  e.preventDefault();

  slider.goToPrevSlide();
});

$('.product__icon-right').click( e => {
  e.preventDefault();

  slider.goToNextSlide();
});