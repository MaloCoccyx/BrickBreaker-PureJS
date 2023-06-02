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
divBall.style.left = "50%";
divBall.style.top = "50%";
divBall.style.position = "absolute";
divBall.style.borderRadius = 50 + "%";

gameContainer.appendChild(divBall);

/**
 * @type {number} paddleWidth - Width of the paddle in px
 */
const paddleWidth = 100;

/**
 * @type {number} paddleHeight - Height of the paddle in px
 */
const paddleHeight = 20;

/**
 * @type {HTMLDivElement} divPaddle - The paddle
 */
const divPaddle = document.createElement('div');

divPaddle.className = "paddle";
divPaddle.style.width = paddleWidth + "px";
divPaddle.style.height = paddleHeight + "px";
divPaddle.style.background = "blue";
divPaddle.style.left = "50%";
divPaddle.style.top = 475 + "px";
divPaddle.style.position = "absolute";

gameContainer.appendChild(divPaddle);
