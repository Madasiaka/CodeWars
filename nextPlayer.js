/*Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

Input/Output
[input] string lastPlayer/$last_player

"black" or "white" - whose move it was during the previous round.

[input] boolean win/$win

true if the player who made a move during the previous round won, false otherwise.

[output] a string

Return "white" if white is to move on the next round, and "black" otherwise. */

//P: player as a string (white or black), win boolean true/false
//R: if win is true - given player is returned, else return the other player name
//E: game('white', true) => "white"
  // game('black', false) => "white"
  // game('black', true) => 'black'
  function whoseMove(lastPlayer, win) {
    //if statement on win - return same name; else return other (if/else on player name)
    if(win){
      return lastPlayer
    }
    else{
      if(lastPlayer == 'white'){
        return 'black'
      }return 'white'
    }
  }