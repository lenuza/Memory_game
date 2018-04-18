//on line 67 cards are shuffled while turing so you can see then!!!

  let cards = [   "fas fa-anchor",
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

  let win = [];
  let cardMatch = [];
  const newGame = document.getElementById("newGame");
  const backSides = document.getElementsByClassName("back");
  const frontSides = document.getElementsByClassName("front");


/*Shuffle cards*/
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


/*  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * 16.1);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }*/

  /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1.1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  /*Assigning card classes*/

  cards = shuffleArray(cards);

  document.addEventListener("load", function() {

  for ( let i = 0; i < frontSides.length; i++) {
   frontSides[i].className += " " + cards[i];

  };

}, true);

/*New game*/
newGame.addEventListener( "click", function() {

   for ( let i = 0; i < frontSides.length; i++) {
    frontSides[i].setAttribute("class", "front");
    backSides[i].style.transform = "rotateY(0deg)";
    frontSides[i].style.transform = "rotateY(-180deg)";
    frontSides[i].className += " " + cards[i];
  }
   cards = shuffleArray(cards);//cards are shuffled while turing so you can see then!!!

  modal.style.display = "none";
  cardMatch = [];
  win = [];

});

/*Select a card*/

 for ( let i = 0; i < backSides.length; i++) {
       backSides[i].addEventListener( "click", flipCard.bind(this, i));
};

  function flipCard (i) {
  backSides[i].style.transform = "rotateY(-180deg)";
  frontSides[i].style.transform = "rotateY(0deg)";

/* Comparing cards*/

   const halfMatch = frontSides[i].getAttribute("class");
   cardMatch.push(halfMatch);
   const click = i;
   console.log(click);


       if ( cardMatch.length == 2) {

          if( cardMatch[0] != cardMatch[1]) {

           for ( let i = 0; i < backSides.length; i++) {
              backSides[i].style.transform = "rotateY(0deg)";
               frontSides[i].style.transform = "rotateY(-180deg)";
               console.log("nah");
             }
          cardMatch = [];
      }

        else if (cardMatch[0] == cardMatch[1]) {
           win.push(halfMatch);
           cardMatch = [];
        //   backSides[i].classList.add("hide");
      //     frontSides[i].classList.add("show");
           console.log(win);
      }

}
   if ( win.length == 8) {
   console.log("tralala");
   modal.style.display = "block";
}
}


/*When all matches are done( all disabled ?) Win message*/

/*Counting clicks*/
/* let click = 0;
 click++;
 console.log(click.length);*/

/*Assigning stars depending on clicks*/
