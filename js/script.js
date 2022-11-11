$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$(document).ready(function() {

  $('#contact').on('click', function() {

    //this scroll withour animations in chrome
    $('.contacts').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });

  });

  //this scroll WITH animations in all browsers

  //taken from: http://praveenlobo.com/techblog/how-to-scroll-elements-smoothly-in-javascript-jquery-without-plugins/

})
