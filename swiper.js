$(".testimonial-swipe").owlCarousel({
  loop: true,
  margin: 10,
  // center: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

$(".sponsor-swipe").owlCarousel({
  loop: true,
  margin: 10,
  // center: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});
