document.addEventListener('DOMContentLoaded', function(){
  $('#prosjekt-link').click(function(){
    $('html, body').animate({
      scrollTop: $('#prosjekter').offset().top
    }, 1500);
  });

  $('#kontakt-link').click(function(){
    $('html, body').animate({
      scrollTop: $('#kontakt').offset().top
    }, 1500);
  });

   $('#arrow-up').click(function(){
    $('html, body').animate({
      scrollTop: $('#navi').offset().top
    }, 1500);
  });

});
