//on line 67 cards are shuffled while turing so you can see then, workaround - removed perspective !!!

let cards = ["fas fa-anchor",
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
  "far fa-life-ring"
];

let win = [];
let cardMatch = [];
let clicks = 0;
const scoreTable = document.getElementById("score_table");
const newGame = document.getElementById("newGame");
const backSides = document.getElementsByClassName("back");
const frontSides = document.getElementsByClassName("front");

/*Shuffle cards*/
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

/*Assigning card classes at beginning of game*/

cards = shuffleArray(cards);

document.addEventListener("load", function() {

  for (let i = 0; i < frontSides.length; i++) {
    frontSides[i].className += " " + cards[i];
  };

}, true);

/*New game*/

newGame.addEventListener("click", function() {
  for (let i = 0; i < frontSides.length; i++) {
/*Removing fa class from the previous game*/
    frontSides[i].setAttribute("class", "front");
/*turn back cards*/
    backSides[i].style.transform = "rotateY(0deg)";
    frontSides[i].style.transform = "rotateY(-180deg)";
/* Assign new  fa class*/
    frontSides[i].className += " " + cards[i];
  }
/*Add back the star rating classes*/
  document.querySelector(".starOne").classList.add("fa-star");
  document.querySelector(".starTwo").classList.add("fa-star");
/* Suffle cards*/
  cards = shuffleArray(cards); //cards are shuffled while turing so you can see then!!!
  clicks = 0;
  document.getElementById("moves").textContent = "moves = " + clicks;
  modal.style.display = "none";
  cardMatch = [];
  win = [];
  document.getElementById("modal").removeChild();
});

/*Select a card*/

for (let i = 0; i < backSides.length; i++) {
  backSides[i].addEventListener("click", flipCard.bind(this, i));

};

//  let start = new Date().getTime();
//  start.getMinutes();
//  start.getSeconds();
//  document.getElementById("timer").textContent = "timer = " + start.getMinutes();

  function flipCard(i) {
  backSides[i].style.transform = "rotateY(-180deg)";
  frontSides[i].style.transform = "rotateY(0deg)";
//  let seconds = 0;
//  setInterval(function () {
//    seconds++;
//  }, 1000);


/* Counting clicks*/
   clicks++;
   document.getElementById("moves").textContent = "moves = " + clicks;

 /*Star rating depending on clicks*/
     if (clicks ===15) {
     document.querySelector(".starOne").classList.remove("fa-star");
   }
     if (clicks === 25) {
     document.querySelector(".starTwo").classList.remove("fa-star");
   };

/* Comparing cards*/

  const halfMatch = i;
  cardMatch.push(halfMatch);

  if (cardMatch.length == 2) {

    if (frontSides[cardMatch[0]].getAttribute("class") !== frontSides[cardMatch[1]].getAttribute("class")) {

      setTimeout(function(){
          backSides[cardMatch[0]].style.transform = "rotateY(0deg)";
          frontSides[cardMatch[0]].style.transform = "rotateY(-180deg)";
          backSides[cardMatch[1]].style.transform = "rotateY(0deg)";
          frontSides[cardMatch[1]].style.transform = "rotateY(-180deg)";

          cardMatch = [];

      }, 250);

    } else if (frontSides[cardMatch[0]].getAttribute("class") === frontSides[cardMatch[1]].getAttribute("class")) {
      win.push(halfMatch);
      cardMatch = [];
      console.log(win);
    // frontsides[cardMatch[0]].setAttribute("class", "match");
    }

  }
/*When all matches are done Win message*/

  if (win.length == 8) {
    console.log("tralala");
//    const scoreCopy = scoreTable.cloneNode(true);
  document.getElementById("modal").innerHTML = "You Won! " + "moves:" + clicks + "time:" + document.getElementById("rating").outerHTML;
  //  document.getElementById("modal").appendChild(scoreCopy);
   modal.style.display = "block";

//  let finish = new Date().getTime();
//  finish.getMinutes();
  //finish.getSeconds();
//  console.log(finish - start);
  }
}
