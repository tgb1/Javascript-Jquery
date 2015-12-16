$(document).ready(function() {
  $('h1').click(function() {
    $('#picture').attr('src', 'http://placehold.it/125x125');
  });
});

/*

text('string')
html('<p style="color: red;">paragraph</p>')
empty()
append('string')
append('<p style="color: red;">paragraph</p>') (inside)
after('<div>Extra tekst</div>') (after/outside)
prepend('<p>Extra tekst</p>') (inside)
before('<p>Extra tekst</p>') (voor element)
replaceWith('html can be inside here');
attr('attribuut', 'value')


*/
