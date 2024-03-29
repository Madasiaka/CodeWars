//The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

//Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

//Example:

//duck_duck_goose([a, b, c, d], 1) should return a.name
//duck_duck_goose([a, b, c, d], 5) should return a.name
//duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {
    let winNum = (goose - 1) % players.length
    return players[winNum].name
  }

  //an array of players and integer number of who is 'it'
//return the name of the 'it' player

function duckDuckGoose(players, goose) {
  // players.length % goose == 0
  return players[(goose - 1) % players.length].name
}

// console.log(duckDuckGoose([a, b, c, d], 2), b)
// console.log(duckDuckGoose([a, b, c, d], 1), a)
// console.log(duckDuckGoose([a, b, c, d], 5), a)