$(document).ready(function() {
  $("form#aboutyou").submit(function(event) {
    const age = parseInt($("input#age").val());
    const hours = parseInt($("input#hours").val());
    const hobbies = $("select#hobbies").val();
    const knowledge = $("select#knowlede").val();
    const movies = $("select#movies").val();
    event.preventDefault();
    let programlanguage; 
    if (age == 16 && hours >= 7) {
    programlanguage = "Javascript";  
    }
    $("#language").text(programlanguage);
  });
  console.log("1st number:");
});
//Javascript: We want to have an age of 16, 6 hours on the computer or more, hobbies include being inside or on computer, favorite movie is the Matrix.