/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


  var cardHand = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var A = ["1", "11"];
  var K = ["10"];
  var Q = ["10"];
  var J = ["10"];

function handValue (hand) {
    for (let i = 0; i < hand.length; i++) {
    String.fromCharCode(hand[i]);
    let space = hand[i].split("");
    let Ace = space.indexOf("A");
    console.log(hand);

  return hand;
    }
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/