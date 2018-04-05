var possibleResults = {"paper":1, "scissors":2, "rock":3};
var playerScore = 0;
var pcScore = 0;
var plays = 0;
var pcSelection = computerPlay();
var playerSelection = "";

function computerPlay (){
  switch(Math.floor(Math.random()*3)+1){
    case 1:
    document.getElementById("pcWeaponImage").src = "./images/paper.png";
    return "paper";
    case 2:
    document.getElementById("pcWeaponImage").src = "./images/scissors.png";
    return "scissors";
    case 3:
    document.getElementById("pcWeaponImage").src = "./images/rock.png";
    return "rock";
    }

}

function playRound(pcSelection, playerSelection) {
  plays += 1;
  pcSelection = computerPlay();

  if (pcSelection === playerSelection){
  return resultPlaceholder.textContent = "DRAW!";
}
  if (playerSelection === "paper" && pcSelection === "rock") {
    playerScore += 1;

    document.getElementById("playerScorePlaceholder").innerHTML = playerScore;
    resultPlaceholder.textContent = "PLAYER WINS!";
    return ;
        }

  if (pcSelection === "paper" && playerSelection === "rock") {
      pcScore += 1;

      document.getElementById("computerScorePlaceholder").innerHTML = pcScore;
      resultPlaceholder.textContent = "COMPUTER WINS!";
      return ;
            }

    if (possibleResults[playerSelection]>possibleResults[pcSelection]){
      playerScore += 1;

      document.getElementById("playerScorePlaceholder").innerHTML = playerScore;
      resultPlaceholder.textContent = "PLAYER WINS!";
      return;
    }

    pcScore += 1;

    document.getElementById("computerScorePlaceholder").innerHTML = pcScore;
    resultPlaceholder.textContent = "COMPUTER WINS!";

 return;
}

function playerWeaponRock(){;
  document.getElementById("playerWeaponImage").src = "./images/rock.png";
  playerSelection = "rock";
  playRound(pcSelection, playerSelection);
};

function playerWeaponPaper(){
  document.getElementById("playerWeaponImage").src = "./images/paper.png";
  playerSelection = "paper";
  playRound(pcSelection, playerSelection);
};

function playerWeaponScissors(){
  document.getElementById("playerWeaponImage").src = "./images/scissors.png";
  playerSelection = "scissors";
  playRound(pcSelection, playerSelection);
};
