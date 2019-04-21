
var cardsInPlay=[];
var cards = [
{
rank: "queen" ,
suit: "heart" ,
cardImage: "images/queen-of-hearts.png"
}
,
{
rank: "queen" ,
suit: "diamonds" ,
cardImage: "images/queen-of-diamonds.png"
}
,
{
rank: "King" ,
suit: "hearts" ,
cardImage: "images/king-of-hearts.png"
}
,
{
rank: "King" ,
suit: "diamonds" ,
cardImage: "images/king-of-diamonds.png"
}





]


  var checkForMatch=function() {

    if (cardsInPlay.length===2){
  	if (cardsInPlay[0]===cardsInPlay[1]) 
  alert("You found a match!");
else 
  alert("Sorry, try again.");
}

  }

var flipcard = function(){ 


var cardId = this.getAttribute('data-id');
console.log("User flipped" + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage)
checkForMatch();
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}



var createBoard = function(){
 
for (var i = 0; i < cards.length; i++) {

    console.log(cardElement);
var cardElement = document.createElement('img');
cardElement.setAttribute('src','images/back.png' );
cardElement.setAttribute('data-id', i );
cardElement.addEventListener('click' , flipcard);
document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();

