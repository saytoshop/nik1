$(".collapsed").click(function() {
  $(this).toggleClass("collapsed");
});

$(document).ready(function() {
  $(".carousel1").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    lazyLoad: true,
    navText: []
  });
  $(".news__slider").owlCarousel({
    loop: true,
    items: 2,
    margin: 20,
    nav: true,
    navText: [],
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:2
        }
    }
  });
});
