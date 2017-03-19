$(document).ready(function(){

  smoothScroll.init();

  window.sr = ScrollReveal({reset: true});
  sr.reveal('.banner-top');
  sr.reveal('.section-1');
  sr.reveal('.card-1');
  sr.reveal('.card-2');
  sr.reveal('.section-2');
  sr.reveal('.section-3');
  sr.reveal('.section-4');
  sr.reveal('.section-5');

  $('.go-to-top').click(function(){
    scrollToTop();
  });

  showHideFab();

});

$(document).scroll(function(){
  showHideFab();
});

function scrollToTop(){
  var toggle = null;
  var options = {speed: 500};
  smoothScroll.animateScroll(0, toggle, options);
}

function showHideFab(){
  if($(document).scrollTop() >= ($('.banner-top img').outerHeight()/2)){
    $('.go-to-top').show(500);
  }
  else{
    $('.go-to-top').hide(500);
  }
}
