$(window).scroll(function() {
  if(window.scrollY >= window.innerHeight/2) {
    $(".flip").addClass('flip-180');
    
    $(".flip-180").one('webkitTransitionEnd msTransitionEnd oTransitionEnd transitionend',
      function() {
        if(window.scrollY >= window.innerHeight/2) {
          $(".fa-chevron-up").removeClass("hidden");
        }
      })
  } else {
    $(".flip").removeClass('flip-180');
    $(".fa-chevron-up").addClass("hidden");
  }
});