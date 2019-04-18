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
    
    console.log("User flipped" + cards[cardId].rank );
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

  var cards = [
{
rank: 'queen',
suit: 'heart',
cardImage: "images/queen-of-hearts.png"
}

];

function createBoard(){
 
for (var i = 0; i < arrayName.length; i++) {

    
}
cardElement.setAttribute('data-id', i );
}

var cardElement = document.createElement('img');


