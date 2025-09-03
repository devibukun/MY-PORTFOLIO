// OWL Courousel
$('.owl-carousel').owlCarousel({
  loop:true,
  items: 2,
  margin:30,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
  }
});