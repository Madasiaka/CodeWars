/* Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red" */

var Ghost = function() {
    let number = Math.random() * 4
    number < 1 ? this.color = "white" 
      : number < 2 ? this.color = "yellow" 
      : number < 3 ? this.color = "purple" 
      : this.color = "red"
  };