$(document).ready(function() {
  $('h1').click(function() {
    $('p').eq(1).css('background-color', 'red');
  });
});

/*

Selectie manipulatie

add('selector') // Breidt de selectie uit
not('p.second')
next() sibling not child
next('div')
prev()
parent()
find('p') // selector div; vindt all p als div parent is, tegenovergesteld van parent
first() // Enkel de eerste
last() // Enkel de laatste van selectie
eq(n) // index 0, denk array, selecteer eentje van selectie

*/
