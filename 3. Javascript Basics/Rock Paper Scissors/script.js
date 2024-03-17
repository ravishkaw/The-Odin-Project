let result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let rounds = 0;

const playRound = (playerSelection) => {
  const choices = ["Rock", "Paper", "Scissor"];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  if (playerSelection === computerSelection) return "Tie";
  if (
    (playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Scissor" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  )
    return "Player wins";
  return "Computer wins";
};

const playGame = (playerSelection) => {
  if (rounds < 5) {
    let roundResult = playRound(playerSelection);

    if (roundResult == "Player wins") {
      playerScore++;
    } else if (roundResult == "Computer wins") {
      computerScore++;
    } else {
      tieScore++;
    }
    result.innerHTML = `Player : ${playerScore} | Computer : ${computerScore} | Tie : ${tieScore}`;
    rounds++;

    if (rounds == 5) {
      endGame();
    }
  }
};

const endGame = () => {
  if (playerScore === computerScore) result.innerHTML = "It's a tie";
  else if (playerScore < computerScore)
    result.innerHTML = "Computer wins the game";
  else result.innerHTML = "Player wins the game";
};

const reset = () => {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  rounds = 0;
  result.innerHTML = "Player : 0 | Computer : 0 | Tie : 0";
};
