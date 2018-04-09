
/*Assigning card classes*/

   const cards = [ "fas fa-anchor",
                   "fas fa-binoculars",
                   "fas fa-bell",
                   "fas fa-globe",
                   "fas fa-ship",
                   "fas fa-cloud",
                   "fas fa-coffee",
                   "far fa-life-ring",
                   "fas fa-anchor",
                   "fas fa-binoculars",
                   "fas fa-bell",
                   "fas fa-globe",
                   "fas fa-ship",
                   "fas fa-cloud",
                   "fas fa-coffee",
                   "far fa-life-ring"];


  const frontSides = document.getElementsByClassName("front");

  for ( let i = 0; i < frontSides.length; i++) {
    frontSides[i].className += " " + cards[i];
  }

  /*Shuffle cards*/
  /*cards.Math.floor(Math.random()*16.1);

  //let cards = ["fas fa-anchor", "fas fa-binoculars", "fas fa-bell", "fas fa-globe", "fas fa-ship", "fas fa-cloud", "fas fa-coffee", "far fa-life-ring"];
  cards.prototype.shuffle = function() {
      var input = this;

      for (var i = cards.length-1; i >=0; i--) {

          var randomIndex = Math.floor(Math.random()*(i+1));
          var itemAtIndex = cards[randomIndex];

          cards[randomIndex] = cards[i];
          cards[i] = itemAtIndex;
      }
      return cards;
  }

  var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  tempArray.shuffle();

  // and the result is...
  alert(tempArray);

/*Select cards*/

   backSides = document.getElementsByClassName("back");

  for ( let i = 0; i < backSides.length; i++) {
   backSides[i].addEventListener("click", function() {
   backSides[i].style.transform = "perspective(500px) rotateY(-180deg)";
   frontSides[i].style.transform = "perspective(500px) rotateY(0deg)";
 });
};

/*Making a match*/



/*When all matches are done( all disabled ?) Win message*/
/*Counting clicks*/
/*Assigning stars depending on clicks*/
