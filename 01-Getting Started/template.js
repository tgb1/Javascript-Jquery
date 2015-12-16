$(document).ready(function() {
  // comment
  $("p").hide();

  /*
    Also a comment
  */

  $("h1").click(function() {
    $(this).next().slideToggle(300);
  });
});
