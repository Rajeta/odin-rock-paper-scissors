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

//function getPlayerChoice prompts player to enter choice of rock, paper, or scissors.
function getPlayerChoice()  {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = String(playerChoice);
    playerChoice = playerChoice.trim();

    if ((playerChoice !== "")) {    //added if statement because toUpperCase caused error when prompt left blank
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
    }

    if (playerChoice === "Rock") {
        return "Rock";
    } else if (playerChoice === "Paper") {
        return "Paper";
    } else if (playerChoice === "Scissors") {
        return "Scissors";
    } else {
        alert("invalid choice: choose Rock, Paper, or Scissors");
        return getPlayerChoice();
    }
}

//function playRound collects computer's choice and player's choice, compares the two, and returns win, loss, or draw.
function playRound(playerSelection, computerSelection)  {
    if (computerSelection === "Rock") {
        if (playerSelection === "Rock") {
            console.log("You selected Rock.  Computer selected Rock.");
            alert("You selected Rock.  Computer selected Rock.");
            return "It's a tie!";
        } else if (playerSelection === "Paper") {
            console.log("You selected Paper.  Computer selected Rock.");
            alert("You selected Paper.  Computer selected Rock.");
            
            return "You win!";
        } else if (playerSelection === "Scissors") {
            console.log("You selected Scissors.  Computer selected Rock.");
            alert("You selected Scissors.  Computer selected Rock.");
            return "You lose!";
        }
    } else if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            console.log("You selected Rock.  Computer selected Paper.");
            alert("You selected Rock.  Computer selected Paper.");
            return "You lose!";
        } else if (playerSelection === "Paper") {
            console.log("You selected Paper.  Computer selected Paper.");
            alert("You selected Paper.  Computer selected Paper.");
            return "It's a tie!";
        } else if (playerSelection === "Scissors") {
            console.log("You selected Scissors.  Computer selected Paper.");
            alert("You selected Scissors.  Computer selected Paper.");
            return "You win!";
        }
    } else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock") {
            console.log("You selected Rock.  Computer selected Scissors.");
            alert("You selected Rock.  Computer selected Scissors.");
            return "You win!";
        } else if (playerSelection === "Paper") {
            console.log("You selected Paper.  Computer selected Scissors.");
            alert("You selected Paper.  Computer selected Scissors.");
            return "You lose!";
        } else if (playerSelection === "Scissors") {
            console.log("You selected Scissors.  Computer selected Scissors.");
            alert("You selected Scissors.  Computer selected Scissors.");
            return "It's a tie!";
        }       
    }
}

//function game will play 5 round game and declare winner at the end. Tie games don't count towards the 5 rounds.
function game() {
    let playerWins = 0;
    let compWins = 0;
    let i = 0;
    let finalResult;

    while (i < 5)   {
        let x = playRound(getPlayerChoice(), getComputerChoice());
        if (x === "You win!") {
            playerWins++;
            i++;
            console.log("Your score: " + playerWins + " Computer score: " + compWins);
            alert("Your score: " + playerWins + " Computer score: " + compWins);
        } else if (x === "You lose!") {
            compWins++;
            i++;
            console.log("Your score: " + playerWins + " Computer score: " + compWins);
            alert("Your score: " + playerWins + " Computer score: " + compWins);
        } else {
            console.log("Your score: " + playerWins + " Computer score: " + compWins);
            alert("Your score: " + playerWins + " Computer score: " + compWins);
        }
    }
    if (playerWins > compWins) {
        finalResult = ("Congratulations! You won " + playerWins + " to " + compWins);
    } else {
        finalResult = ("You lost " + compWins + " to " + playerWins);
    }
    console.log(finalResult);
    alert(finalResult);
    return finalResult;
}