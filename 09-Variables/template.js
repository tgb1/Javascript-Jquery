$(document).ready(function() {
  //var hText = 'The heading text is ' + $('#head1').text();
  var lineNum = 0;
  var imageName = ['http://placehold.it/105x105', 'http://placehold.it/110x110', 'http://placehold.it/115x115'];
  var indexNum = 0;

  $('h1').click(function() {
    //$('p').text(hText);
    $('p').css('background-color', 'yellow');
    $('p').eq(lineNum).css('background-color', 'red');
    lineNum++;
    if(lineNum > 2) {
      lineNum = 0;
    }
  });

  $('#afbeelding').click(function () {
    $(this).fadeOut(300, function() {
      $(this).attr('src', imageName[indexNum]);
      indexNum++;
      if(indexNum > 2) {
        indexNum = 0;
      }
      $(this).fadeIn(500);
    });

  });
});

/*


*/
