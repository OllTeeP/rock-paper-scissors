console.log("Welcome to Rock, Paper, Scissors")


function getComputerChoice() {
    let random = Math.random()
    let random_two = Math.random()
    let choice
    if (random > 0.5 && random_two < 0.5) {
        choice = "Rock";
    }
    if (random < 0.5 && random_two > 0.5) {
        choice = "Scissors";
    }
    if (random > 0.5 && random_two > 0.5 || random < 0.5 && random_two < 0.5) {
        choice = "Paper";
    }
    return choice;
}

function getHumanChoice() {
    let answer = prompt("Rock, Paper or Scissors")
    return answer
}

function playGame() {

let humanScore = 0
let computerScore = 0

// Source - https://stackoverflow.com/a/17624356
// Posted by OrangeDog, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-17, License - CC BY-SA 4.0

for (var i = 1; i < 6; i++) playRound(i);

function playRound(humanChoice ,computerChoice) {
    humanChoice = getHumanChoice().toLowerCase()
    computerChoice = getComputerChoice()
    if (humanChoice == "rock" && computerChoice == "Scissors") {
        alert("You won Rock beat Scissors")
        humanScore++
    }
    if (humanChoice == "scissors" && computerChoice == "Paper") {
        alert("You won Scissors beat Paper")
        humanScore++
    }
    if (humanChoice == "paper" && computerChoice == "Rock") {
        alert("You won Paper beat Rock")
        humanScore++
    }
    


    if (computerChoice == "Rock" && humanChoice == "scissors") {
        alert("You lost Rock beat Scissors")
        computerScore++
    }
    if (computerChoice == "Scissors" && humanChoice == "paper") {
        alert("You lost Scissors beat Paper")
        computerScore++
    }
    if (computerChoice == "Paper" && humanChoice == "rock") {
        alert("You lost Paper beat Rock")
        computerScore++
    }
}

if (humanScore > computerScore) {
    alert("You Won")
}
if (computerScore > humanScore) {
    alert("You lost")
}

}

playGame()