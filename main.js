var possibleResults = {"paper":1, "scissors":2, "rock":3};
var playerScore = 0;
var pcScore = 0;
var plays = 0;
var pcSelection = computerPlay();

function computerPlay (){
  switch(Math.floor(Math.random()*3)+1){
    case 1:
    return "paper";
    case 2:
    return "scissors";
    case 3:
    return "rock";
    }

}

var playerSelection = prompt("Choose between Rock, Paper and Scissors:").toLowerCase();

function playRound(pcSelection, playerSelection) {
  plays += 1;

  if (pcSelection === playerSelection){
  return console.log("player chose " + playerSelection + " and computer chose "+ pcSelection + ", it's a DRAW!");
}
  if (playerSelection === "paper" && pcSelection === "rock") {
    playerScore += 1;
     return console.log("player chose " + playerSelection + " and computer chose "+ pcSelection + ". Player WINS!");
        }

    if (possibleResults[playerSelection]>possibleResults[pcSelection]){
      playerScore += 1;
      return console.log("player chose " + playerSelection + " and computer chose "+ pcSelection + ". Player Wins!");
    }

 return console.log("player chose " + playerSelection + " and computer chose "+ pcSelection + ". Computer Wins!");
}

playRound(pcSelection, playerSelection);
