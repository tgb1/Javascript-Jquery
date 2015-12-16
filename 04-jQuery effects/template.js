$(document).ready(function() {
  //$('h2').hide();

  $('h1').click(function() {
    $('h2').hide(1000, function() {
      $('h3').fadeOut(1000);
    });
  });
});

/*

hide(n ms)
show(n ms)
toggle(n ms)
slideUp(n ms)
slideDown(n ms)
slideToggle(n ms)
fadeOut(n ms)
fadeIn(n ms)
fadeToggle(n ms)

fadeTo(n ms, n between 0 and 1)

delay(n ms)

callback function

*/
