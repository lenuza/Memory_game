/*$(document).ready(function() {
  $('#one').on('keypress click', function() {
    $('#one').toggle();
    $('#purple').toggle();
  });
});*/


   const cardFlip = document.getElementById("one");

   cardFlip.addEventListener("click", function() {
     const cardFace = document.getElementById("card1");
         cardFace.style.display="block";
})
