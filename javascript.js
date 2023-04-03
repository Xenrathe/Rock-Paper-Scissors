//
// GAME-PLAYING LOGIC FUNCTIONS AND VARIABLES
//

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomSelector = Math.floor(Math.random()*3);
    if (randomSelector == 0)
        return "Golem"
    else if (randomSelector == 1)
        return "Raptor"
    else
        return "Spider"
}

function singleRoundPlay(playerSelection, computerSelection) {

    //GOLEM > RAPTOR > SPIDER > GOLEM
    outcomeResult = "lose";
    if (playerSelection == computerSelection)
        outcomeResult = "tie";
    else if (playerSelection == "Golem" && computerSelection == "Raptor")
        outcomeResult = "win";
    else if (playerSelection == "Raptor" && computerSelection == "Spider")
        outcomeResult = "win";
    else if (playerSelection == "Spider" && computerSelection == "Golem")
        outcomeResult = "win";

    if (outcomeResult == "lose")
        computerScore++;
    else if (outcomeResult == 'win')
        playerScore++;

    return outcomeResult
}

let typeWriterIncr = 0;
let typeWriterText = "";
let typeWriterSpeed = 30;

//
// DISPLAY/ANIMATION INTRO FUNCTIONS
//

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

//
// INTERACTIVITY/UI FUNCTIONS
//

function monsterButtonDown(monsterBtn){
    document.querySelector('#AIOverlay').classList.remove('halfOpacity');
    document.querySelector('#playerOverlay').classList.remove('halfOpacity');

    monsterBtn.classList.add('pressed');
    let computerChoice = getComputerChoice();
    let playerChoice = monsterBtn.getAttribute('id');
    let result = singleRoundPlay(playerChoice, computerChoice);

    if (result == 'win')
        document.querySelector('#AIOverlay').classList.add('halfOpacity');
    else if (result == 'lose')
        document.querySelector('#playerOverlay').classList.add('halfOpacity');

    document.querySelector('#playerMonster').src = 'images/' + playerChoice + '.PNG';
    document.querySelector('#AImonster').src = 'images/' + computerChoice + '.PNG';

    let matchText = '';
    if (result == 'win'){
        if (playerChoice == 'Golem')
            matchText = 'Golem crushes Raptor!';
        else if (playerChoice == 'Raptor')
            matchText = 'Raptor rends Spider!';
        else
            matchText = 'Spider traps Golem!';
    }
    else if (result == 'lose')
    {
        if (playerChoice == 'Golem')
            matchText = 'Golem is trapped by Spider!';
        else if (playerChoice == 'Raptor')
            matchText = 'Raptor is crushed by Golem!';
        else
            matchText = 'Spider is rended by Raptor!';
    }
    else
        matchText = 'Tie!'

    document.querySelector('#match-result').textContent = matchText;
    document.querySelector('#playerScore').textContent = 'Player: ' + playerScore;
    document.querySelector('#computerScore').textContent = 'Computer: ' + computerScore;
}

function monsterButtonUp(monsterBtn){
    monsterBtn.classList.remove('pressed');
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

document.getElementById('intro').style.height = 0;
document.getElementById("perm-title").style.opacity = 100;
const monsterBtns = document.getElementsByClassName("beast-entry");
for (let j = 0; j < monsterBtns.length; j++){
    monsterBtns.item(j).style.opacity = 100;
    let img = monsterBtns.item(j).getElementsByTagName('img')[0];
    img.onmousedown = () => monsterButtonDown(img);
    img.onmouseup = () => monsterButtonUp(img);
}