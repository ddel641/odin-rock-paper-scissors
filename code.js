// Computer chooses R,P,S
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random()*100)%3;
    return options[choice];
}

function playRPS(player, computer) {
    player = player.charAt(0).toUpperCase() + player.slice(1);
    if (player == "Rock" && computer == "Paper" ||
        player == "Scissors" && computer == "Rock" ||
        player == "Paper" && computer == "Scissors") {
            return `You lose! ${computer} beats ${player}`;
        } else if (player == computer) {
            return `It's a tie, both players chose ${player}`;
        } else {
            return `You win! ${player} beats ${computer}`;
        };
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    
    while (playerWins < 3 && computerWins < 3) {
        let outcome = playRPS(getPlay(), computerPlay());
        if (outcome.startsWith("You win")) {
            playerWins += 1;
        } else if (outcome.startsWith("You lose")) {
            computerWins += 1;
        }
        console.log(`${outcome}
        
The score is now computer: ${computerWins} to player: ${playerWins}`)
    }
    
    if (playerWins == 3) {
        return "You won the game";
    } else {
        return "The computer won the game";
    }
}

function getPlay() {
    let choice;
    let options = ["rock", "paper", "scissors"]
    while (!options.includes(choice)) {
        choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    }
    return choice;
}

console.log(game())