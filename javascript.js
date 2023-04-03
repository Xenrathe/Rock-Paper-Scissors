let playerScore = 0;
let computerScore = 0;

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

let typeWriterIncr = 0;
let typeWriterText = "";
let typeWriterSpeed = 30;

function typeWriter(elementName, text, reset){
    let textElement = document.getElementById(elementName);

    if (reset){
        typeWriterIncr = 0;
        typeWriterText = text;
        console.log(text.length);
    }

    if (typeWriterIncr < typeWriterText.length) {
        textElement.textContent += text.charAt(typeWriterIncr);
        typeWriterIncr++;
        setTimeout(typeWriter, typeWriterSpeed, elementName, text, false);
    }
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
            //element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= 0.1;
    }, 50);
}

function unfade(element) {
    let op = 0;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
    }, 50);
}

function calculateTextDelay(text){
    return text.length * typeWriterSpeed + 500;
}

let timeStamp = 0;

let introOne = "Amongst all the chimeras created by the scientist von Neumon for his mad menagerie, " +
                "three beasts reigned supreme...";

let introTwo = "The three beasts countered one another. " +
                "The Raptor could not scratch the Golem, " +
                "but easily tore through the Spider-web, " +
                "whose sticky strands ensnared the Golem.";

let introThree = "Thus arose the game of...";
/*
typeWriter("intro", introOne, true);

setTimeout(unfade, calculateTextDelay(introOne) + 500, document.getElementsByClassName("beast-entry").item(0));
setTimeout(unfade, calculateTextDelay(introOne) + 1500, document.getElementsByClassName("beast-entry").item(1));
setTimeout(unfade, calculateTextDelay(introOne) + 2500, document.getElementsByClassName("beast-entry").item(2));
setTimeout(fade, calculateTextDelay(introOne) + 3500, document.getElementById("intro"));
setTimeout(() => {  document.getElementById("intro").textContent = "";}, calculateTextDelay(introOne) + 5000);
setTimeout(() => {  document.getElementById("intro").style = 'alpha(opacity=100)';}, calculateTextDelay(introOne) + 5000);

timeStamp = calculateTextDelay(introOne) + 5000;

setTimeout(typeWriter, timeStamp, "intro",
        introTwo,
        true);

setTimeout(fade, timeStamp + calculateTextDelay(introTwo) + 1500, document.getElementById("intro"));
setTimeout(() => {  document.getElementById("intro").textContent = "" }, timeStamp + 3500 + calculateTextDelay(introTwo));
setTimeout(() => {  document.getElementById("intro").style = "alpha(opacity=100)"}, timeStamp + 3500 + calculateTextDelay(introTwo));

timeStamp = timeStamp + calculateTextDelay(introTwo) + 3500;

setTimeout(typeWriter, timeStamp, "intro",
        introThree,
        true);

setTimeout(fade, timeStamp + calculateTextDelay(introThree) + 1500, document.getElementById("intro"));
setTimeout(() => {  document.getElementById("intro").textContent = "" }, timeStamp + 3500 + calculateTextDelay(introThree));
setTimeout(unfade, timeStamp + calculateTextDelay(introThree) + 3500, document.getElementById("perm-title"));*/

document.getElementById("perm-title").style = 'alpha(opacity=100)';
document.getElementsByClassName("beast-entry").item(0).style = 'alpha(opacity=100)';
document.getElementsByClassName("beast-entry").item(1).style = 'alpha(opacity=100)';
document.getElementsByClassName("beast-entry").item(2).style = 'alpha(opacity=100)';

//game();