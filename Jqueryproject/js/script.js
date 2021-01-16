$(document).ready(function() {
  $("form#aboutyou").submit(function(event) {
    const age = parseInt($("input#age").val());
    const hours = parseInt($("input#hours").val());
    const hobbies = $("select#hobbies").val();
    const knowledge = $("select#knowlede").val();
    const movies = $("select#movies").val();

    const quote = (100 - age) * 3;

    $("#rate").text(quote);
    $("#quote").show();

    event.preventDefault();
  });
});