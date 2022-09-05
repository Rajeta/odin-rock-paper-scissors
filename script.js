//function getComputerChoice will randomly return rock, paper, or scissors and save result to a variable.
function getComputerChoice()    {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;
    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Paper";
    } else if (randomNumber === 3) {
        computerSelection = "Scissors";
    }
    return(computerSelection);
}

//prompt player to enter choice of rock, paper, or scissors and save result to a variable

//create function that collects computer's choice and player's choice, compares the two, and declares the winner.

//function game will play 5 round game and declare winner and loser at the end.