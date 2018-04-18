
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
                   "far fa-life-ring"
  ];

    const divs = [  "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight",
                    "nine",
                    "ten",
                    "eleven",
                    "twelve",
                    "thirteen",
                    "fourteen",
                    "fifteen",
                    "sixteen"
  ];

  const divsList = divs.map((div, index) => ({
    class: cards[index],
    div: div,
    index: index
  }));
/*
  const cardsWithIndices = cards.map((card, index) => ({
    index: index,
    class: card
  }));

  const cardsMap = cardsWithIndices.reduce((acc, card) => {
    acc[card.class] = card;
    return acc;
  }, {});
*/

  /*Shuffle cards*/
  const button = document.getElementById("shuffle");

  button.addEventListener( "click", function() {

    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
console.log(cards);
  });

cards = shuffle(cards);

/*Select cards*/

/*
   const backSides = document.getElementsByClassName(".game div");
   console.log(backSides);
   */
   const frontSides = document.getElementsByClassName("front");

   for ( let i = 0; i < frontSides.length; i++) {
     frontSides[i].className += " " + cards[i];
   };


   divsList.forEach(div => {
     const el = document.getElementById(div.div);

    const front = Array.prototype.find.call(el.children, child => /front/.test(child.className))
    const back = Array.prototype.find.call(el.children, child => /back/.test(child.className))


     clickHandler(front);
     clickHandler(back);

     function clickHandler (child) {
       child.addEventListener("click", function(el) {
         back.style.transform = "perspective(500px) rotateY(-180deg)";
         front.style.transform = "perspective(500px) rotateY(0deg)";

      /*   const match = divsList.find(d => d.class === div.class && d.index !== div.index);
         console.log(match);*/

         let halfMatch = front.getAttribute("class");
         let cardMatch = [];
         cardMatch.push(halfMatch);
         console.log(cardMatch);

       });
     }
   });


    function makingMatch() {
    }
  /*if (cardMatch.length ===2) {
        let halfMatch = cardMatch[0];
        let anotherHalf = cardMatch[1];
      }

      if (halfMatch == anotherHalf) {
        console.log("yay");
      }
    else {
     console.log("nah");
   }*/








//cards.forEach( function(item, index, array) {
//halfMatch.match(frontSides[x].getAttribute("class"))
//  });

      //const clicks = 0;
      //    clicks++;
    //  if (clicks == 2) {
  //      halfMatch[2] = frontSides[2].getAttribute("class");
  //    }
  //  if (){
//
//    }



//const clicks = 0;

//function makingMatch() {
//  clicks++;
//  if(clicks == 2) {
  //  if
//  }
//};


/*Making a match*/



/*When all matches are done( all disabled ?) Win message*/
/*Counting clicks*/
/*Assigning stars depending on clicks*/
