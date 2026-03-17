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
console.log(getComputerChoice())