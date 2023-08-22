function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
    return "It's a tie!";
    } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(roundResult);

    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        computerScore++;
    }
    }

    if (playerScore > computerScore) {
    console.log("You win the game!");
    } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
    } else {
    console.log("It's a tie game!");
    }
}

game();
