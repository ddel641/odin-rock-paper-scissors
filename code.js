function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random()*100)%3;
    return options[choice];
}

console.log(computerPlay());