//function getComputerChoice will randomly return rock, paper, or scissors.
function getComputerChoice()    {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    return(computerChoice);
}

//prompt player to enter choice of rock, paper, or scissors and save result to a variable
function getPlayerChoice()  {
    let PlayerChoice = prompt("Rock, Paper, or Scissors?");
    PlayerChoice = PlayerChoice[0].toUpperCase() + PlayerChoice.slice(1).toLowerCase();
    if (PlayerChoice === "Rock") {
        return "Rock";
    } else if (PlayerChoice === "Paper") {
        return "Paper";
    } else if (PlayerChoice === "Scissors") {
        return "Scissors";
    } else {
        alert("invalid choice: choose Rock, Paper, or Scissors");
        return getPlayerChoice();
    }
}

//create function that collects computer's choice and player's choice, compares the two, and declares the winner.
function playRound(playerSelection, computerSelection)  {
    if (computerSelection === "Rock") {
        if (playerSelection === "Rock") {
            return "It's a tie!";
        } else if (playerSelection === "Paper") {
            return "You win!"
        } else if (playerSelection === "Scissors") {
            return "You lose!"
        }
    } else if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            return "You lose!";
        } else if (playerSelection === "Paper") {
            return "It's a tie"
        } else if (playerSelection === "Scissors") {
            return "You win!"
        }
    } else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
            return "You win!";
        } else if (playerSelection === "Paper") {
            return "You lose"
        } else if (playerSelection === "Scissors") {
            return "It's a tie!"
        }       
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//function game will play 5 round game and declare winner and loser at the end.