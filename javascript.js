let score = 0;

function getComputerChoice() {
    let randomSelector = Math.floor(Math.random()*3);
    if (randomSelector == 0)
        return "Rock"
    else if (randomSelector == 1)
        return "Paper"
    else
        return "Scissors"
}

function singleRoundPlay(playerSelection, computerSelection) {
    //Rock beats paper, paper beats rock, scissors beats paper

    outcomeResult = "lose";
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase())
        outcomeResult = "tie";
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors")
        outcomeResult = "win";
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock")
        outcomeResult = "win";
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper")
        outcomeResult = "win";

    if (outcomeResult == "tie")
        return "You Tie! " + playerSelection + " against " + computerSelection + "."
    else if (outcomeResult == "lose")
    {
        score--;
        return "You Lose! " + playerSelection + " is beat by " + computerSelection + "!"
    }
    else
    {
        score++;
        return "You Win! " + playerSelection + " beats " + computerSelection + "!"
    }
}

function game(){
    let numGames = parseInt(prompt("Choose total number of games:"));
    for (let i = 0; i < numGames; i++){
        let playerChoice = prompt("Game#" + (i+1) + " - Choose Rock, Paper, or Scissors:");
        console.log(singleRoundPlay(playerChoice, getComputerChoice()));
    }

    if (score == 0 )
        console.log("You tied the computer overall!");
    else if (score > 0 )
        console.log("Congratulations, you beat the AI, by winning " + score + " more times!");
    else
        console.log("Uh oh, you lost to the AI, which won " + -score + " more times.");
}

game();