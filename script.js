function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    console.log(playerScore, computerScore)
  
    if (playerScore === 3){
        winnerMsgElement.innerText = "Player has won the game!"
        optionsContainer.style.display = "none"
        resetGameBtn.style.display = "block"
    }
    if (computerScore === 3){
      winnerMsgElement.innerText = "Computer has won the game!"
      optionsContainer.style.display = "none"
      resetGameBtn.style.display = "block"
    }
  };

  function resetGame() {
    playerScore = 0
    computerScore = 0
    playerScoreSpanElement.innerText = 0
    computerScoreSpanElement.innerText = 0
    resetGameBtn.style.display = "none"
    optionsContainer.style.display = "block"
    winnerMsgElement.innerText = ""
    roundResultsMsg.innerText = ""
  }
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
  resetGameBtn.addEventListener("click", resetGame)