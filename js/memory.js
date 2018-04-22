
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
let y = [];
let clicks = 0;
let startTime, currentTime, minutes, seconds, interval;
const starRating = document.getElementById("rating");
const newGame = document.getElementsByClassName("newGame");
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
for (let i = 0; i < newGame.length; i++) {
  newGame[i].addEventListener("click", startNewGame);
};

function startNewGame() {
  for (let i = 0; i < frontSides.length; i++) {
    /*Removing fa class from the previous game*/
    frontSides[i].setAttribute("class", "front");
    /*Turn back cards*/
    backSides[i].style.transform = "rotateY(0deg)";
    frontSides[i].style.transform = "rotateY(-180deg)";
    /* Assign new  fa class*/
    frontSides[i].className += " " + cards[i];
  }
  /*Add back the star rating classes*/
  document.querySelector(".starThree").classList.add("fa-star");
  document.querySelector(".starTwo").classList.add("fa-star");
  /* Shuffle cards*/
  cards = shuffleArray(cards);
  /*Clear previous results*/
  clicks = 0;
  document.getElementById("moves").textContent = "moves " + clicks;
  modal.style.display = "none";
  document.getElementById("results").innerHTML = "";
  cardMatch = [];
  win = [];
  startCount();
};

/*Time Counter*/
document.getElementById("game").addEventListener("click", startCount);

function startCount() {
  //Removing the event listener so it won't start the count from 0 at every click
  document.getElementById("game").removeEventListener("click", startCount);

  startTime = new Date().getTime();
  interval = setInterval(function() {
    currentTime = new Date().getTime();
    const distance = currentTime - startTime;
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
  }, 1000); // The interval function updates the count every 1 second
}

/*Select a card*/
for (let i = 0; i < backSides.length; i++) {
  let x = this.flipCard.bind(this, i);
  y.push(x);
  backSides[i].addEventListener("click", x);
};

function flipCard(i) {
  backSides[i].style.transform = "rotateY(-180deg)";
  frontSides[i].style.transform = "rotateY(0deg)";

  /* Counting clicks*/
  clicks++;
  document.getElementById("moves").textContent = "moves = " + clicks;

  /*Star rating depending on clicks*/
  if (clicks === 15) {
    document.querySelector(".starThree").classList.remove("fa-star");
  }
  if (clicks === 25) {
    document.querySelector(".starTwo").classList.remove("fa-star");
  };

  /* Comparing cards*/
  const halfMatch = i;
  cardMatch.push(halfMatch);

  if (cardMatch.length === 2) {
   for (let i = 0; i < backSides.length; i++) {
      let x = y[i];
      backSides[i].removeEventListener("click", x);
    };
    y = [];

    if (frontSides[cardMatch[0]].getAttribute("class") !== frontSides[cardMatch[1]].getAttribute("class")) {

      setTimeout(function() {
        backSides[cardMatch[0]].style.transform = "rotateY(0deg)";
        frontSides[cardMatch[0]].style.transform = "rotateY(-180deg)";
        backSides[cardMatch[1]].style.transform = "rotateY(0deg)";
        frontSides[cardMatch[1]].style.transform = "rotateY(-180deg)";
        cardMatch = [];
        for (let i = 0; i < backSides.length; i++) {
          let x = this.flipCard.bind(this, i);
          y.push(x);
          backSides[i].addEventListener("click", x);
        };

      }, 550);

    } else if (frontSides[cardMatch[0]].getAttribute("class") === frontSides[cardMatch[1]].getAttribute("class")) {
      win.push(halfMatch);
      for (let i = 0; i < backSides.length; i++) {
        let x = this.flipCard.bind(this, i);
        y.push(x);
        backSides[i].addEventListener("click", x);
      };
      cardMatch = [];
      console.log(win);
    }
  }
  /*When all matches are done Win message*/
  if (win.length === 8) {
    document.getElementById("results").innerHTML =
      ` You did it!
   With ${clicks} moves.
   In ${minutes}min ${seconds}sec
   ${starRating.outerHTML}`;
    modal.style.display = "block";
    clearInterval(interval);

  }

}
