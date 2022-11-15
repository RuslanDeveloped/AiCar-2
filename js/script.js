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
})

$(document).ready(function() {

  $('#form').on('click', function() {

    $('#form-under').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });

  });
})
