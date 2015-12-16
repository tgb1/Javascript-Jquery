$(document).ready(function() {
  $('h1').mouseenter(function() {
    $(this).css('background-color', 'red');
  });

  $('h1').mouseleave(function() {
    $(this).css('background-color', 'blue');
    $('*').unbind('mouseleave');
  });
});

/*
mousedown
mouseup

mouseenter
mouseleave

unbind(mouseleave)
*/
