console.log("Up and running!");
var cardOne = "queen";
var cardTow = "King";
var cardThree = "joker";
var cardFour = "princess";

var cards = new Array( "queen" , "king" );
var cardsInPlay [];


var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);



  function flipCard (cardId) {
    
    console.log("User flipped" + cards[cardId] );
  }

 flipCard (0);
 flipCard (2);

  function checkForMatch() {

  	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

  }

  



