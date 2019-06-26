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
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    }
  });
});


$(".scroll").click(function(e) {
  e.preventDefault();
  var hash = $(this).attr("href");
  var target = $(hash);
$(".mobileMenu").removeClass("active");
  $("html, body").animate({
    scrollTop: target.offset().top - 10
  }, 500, function() {
    //       window.location.hash = hash;

  });
});

$(".mobileMenuToggle").click(function (e) {
  e.preventDefault();
  $(".mobileMenu").toggleClass("active");
});

$(".mobileMenu__close").click(function (e) {
  e.preventDefault();
  $(".mobileMenu").toggleClass("active");
});
