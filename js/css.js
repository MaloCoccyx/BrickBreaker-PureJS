/*
######################################
##                                  ##
## Author: Guillaume Lequart        ##
## GitHub: @MaloCoccyx              ##
## Project: BrickBreaker-PureJS     ##
## Used to: Generate and Select DOM ##
## Created: 02/06/2023              ##
##                                  ##
######################################
*/

/**
 * @type {HTMLHeadingElement} divTitle - The Title
 */
const divTitle = document.createElement('h1');

divTitle.style.height = 40 + "px";
divTitle.style.left = 5 + "px";
divTitle.style.marginBottom = 5 + "px";
divTitle.innerText = "Brick Breaker in Pure JavaScript";

document.body.appendChild(divTitle);

/**
 * @type {HTMLHeadingElement} divSubTitle - The SubTitle
 */
const divSubTitle = document.createElement('h2');

divSubTitle.style.height = 40 + "px";
divSubTitle.style.left = 5 + "px";
divSubTitle.style.marginBottom = 5 + "px";
divSubTitle.innerHTML = "Author : <strong>Lequart Guillaume</strong> | <a href=\"https://github.com/MaloCoccyx/\">@MaloCoccyx</a> |";

document.body.appendChild(divSubTitle);

/**
 * @type {HTMLDivElement} divHowToPlay - How to play?
 */
const divHowToPlay = document.createElement('div');

divHowToPlay.id = "howToPlay";
divHowToPlay.style.width = 600 + "px";
divHowToPlay.style.height = 250 + "px";
divHowToPlay.style.color = "white";
divHowToPlay.style.textAlign = "center";
divHowToPlay.style.paddingTop = "10px";
divHowToPlay.style.paddingBottom = "10px";
divHowToPlay.style.border = "1px solid white";
divHowToPlay.style.display = "inline-block";
divHowToPlay.style.background = "#76a69e";
divHowToPlay.style.position = "absolute";
divHowToPlay.style.left = 40 + "%";
divHowToPlay.style.top = 40 + "%";
divHowToPlay.innerHTML = "<h1>How to play?</h1>" +
    "<h2>You have to move the paddle, to bounce the ball on it and break all the bricks.</h2>" +
    "<h3>Move the paddle left or right with ← & → .</h3>" +
    "<h4>You have three tries.</h4>";

document.body.appendChild(divHowToPlay);

/**
 * @type {HTMLDivElement} divScore - The score
 */
const divScore = document.createElement('h3');

divScore.id = "score";
divScore.style.height = 40 + "px";
divScore.style.left = 5 + "px";
divScore.style.marginBottom = 5 + "px";

document.body.appendChild(divScore);

/**
 * @type {HTMLDivElement} divTries - Number of tries
 */
const divTries = document.createElement('h4');

divTries.id = "tries";
divTries.style.height = 40 + "px";
divTries.style.left = 5 + "px";
divTries.style.marginBottom = 5 + "px";
divTries.innerHTML = "Essaies : <strong>1 / 3</strong>";

document.body.appendChild(divTries);

/**
 * @type {HTMLDivElement} gameContainer - The game container
 */
const gameContainer = document.createElement('div');
// Create gameContainer Element
gameContainer.id = 'game-container';
gameContainer.style.width = '600px';
gameContainer.style.height = '500px';
gameContainer.style.border = "1px solid black";
gameContainer.style.overflow = "hidden";
gameContainer.style.position = "relative";

document.body.appendChild(gameContainer);

/**
 * @type {HTMLDivElement} divBall - The ball
 */
const divBall = document.createElement('div');

divBall.className = "ball";
divBall.style.width = 20 + "px";
divBall.style.height = 20 + "px";
divBall.style.background = "red";
divBall.style.left = "45%";
divBall.style.top = "50%";
divBall.style.position = "absolute";
divBall.style.borderRadius = 50 + "%";

gameContainer.appendChild(divBall);

/**
 * @type {HTMLDivElement} divPaddle - The paddle
 */
const divPaddle = document.createElement('div');

divPaddle.className = "paddle";
divPaddle.style.width = "100px";
divPaddle.style.height = "20px";
divPaddle.style.background = "blue";
divPaddle.style.left = "40%";
divPaddle.style.top = 475 + "px";
divPaddle.style.position = "absolute";

gameContainer.appendChild(divPaddle);

/**
 * @type {HTMLDivElement} divStart - Div created when user winning the game
 */
const divStart = document.createElement('div');

divStart.id = "start";
divStart.style.width = 1000 + "px";
divStart.style.height = 250 + "px";
divStart.style.background = "#76a69e";
divStart.style.color = "white";
divStart.style.textAlign = "center";
divStart.style.paddingTop = "20px";
divStart.style.zIndex = "9999";
divStart.style.border = "1px solid white";
divStart.innerHTML = "<h1>What scheme do you want to play?</h1>" +
    "<h2>Choose it by clicking on the corresponding scheme</h2>";

/**
 * @type {HTMLAnchorElement} classicButton - Choose classic scheme
 */
let classicButton = document.createElement('a');

classicButton.id = "classic";
classicButton.href = "?start=1&type=classic";
classicButton.innerHTML = "<img src=\"img/classic-schema.png\" alt=\"Classic Schema\" width='200px' height='100px'/>";
classicButton.style.marginRight = "10px";

divStart.appendChild(classicButton);

/**
 * @type {HTMLAnchorElement} letterTButton - Choose T-schema
 */
let letterTButton = document.createElement('a');

letterTButton.id = "t-schema";
letterTButton.href = "?start=1&type=letter_t";
letterTButton.innerHTML = "<img src=\"img/t-schema.png\" alt=\"T-schema\"  width='200px' height='100px' />";
letterTButton.style.marginRight = "10px";

divStart.appendChild(letterTButton);

/**
 * @type {HTMLAnchorElement} randomButton - Choose T-schema
 */
let randomButton = document.createElement('a');

randomButton.id = "random";
randomButton.href = "?start=1&type=random";
randomButton.innerHTML = "<img src=\"img/random.png\" alt=\"random\"  width='200px' height='100px' />";
randomButton.style.marginRight = "10px";

divStart.appendChild(randomButton);

