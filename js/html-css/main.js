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

document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.background = "black";
document.body.style.fontFamily = "Oswald";

/**
 * @type {HTMLHeadingElement} divTitle - The Title
 */
const divTitle = document.createElement('h1');

divTitle.style.height = 40 + "px";
divTitle.style.marginBottom = 5 + "px";
divTitle.innerText = "Brick Breaker in Pure JavaScript";
divTitle.style.background = "white";
divTitle.style.color = "black";
divTitle.style.padding = "10px";
divTitle.style.margin = "0px";
divTitle.style.textAlign = "center";
divTitle.style.position = "relative";
divTitle.style.lineHeight = "33px";

document.body.appendChild(divTitle);

/**
 * @type {HTMLHeadingElement} divSubTitle - The SubTitle
 */
const divSubTitle = document.createElement('h2');

divSubTitle.style.height = 60 + "px";
divSubTitle.style.margin = "0px";
divSubTitle.style.lineHeight = "55px";
divSubTitle.style.color = "white";
divSubTitle.style.textAlign = "center";
divSubTitle.innerHTML = "Author : <strong>Lequart Guillaume</strong> | <a href=\"https://github.com/MaloCoccyx/\">@MaloCoccyx</a> |";

document.body.appendChild(divSubTitle);

/**
 * @type {HTMLParagraphElement} divScore - The score
 */
const divScore = document.createElement('p');

divScore.id = "score";
divScore.style.height = 40 + "px";
divScore.style.margin = 0 + "px";
divScore.style.lineHeight = 40 + "px";
divScore.style.boxShadow = "1px 0px 5px white";
divScore.style.textAlign = "center";
divScore.style.color = "black";
divScore.style.background = "white";
divScore.style.width = "50%";
divScore.style.display = "inline-block";

document.body.appendChild(divScore);

/**
 * @type {HTMLParagraphElement} divTries - Number of tries
 */
const divTries = document.createElement('p');

divTries.id = "tries";
divTries.style.height = 40 + "px";
divTries.style.position = "relative";
divTries.style.top = "-40px";
divTries.style.margin = "0px";
divTries.style.left = "49.9%";
divTries.style.borderLeft = "1px solid black";
divTries.style.boxShadow = "1px 0px 5px white";
divTries.style.lineHeight = 40 + "px";
divTries.style.textAlign = "center";
divTries.style.width = "50%";
divTries.style.display = "inline-block";
divTries.style.background = "white";
divTries.innerHTML = "Try : <strong>0 /0</strong>";

document.body.appendChild(divTries);

/**
 * @type {HTMLDivElement} ainer - The game container
 */
const gameContainer = document.createElement('div');
// Create gameContainer Element
gameContainer.id = 'game-container';
gameContainer.style.width = '600px';
gameContainer.style.height = '500px';
gameContainer.style.border = "1px solid black";
gameContainer.style.overflow = "hidden";
gameContainer.style.position = "relative";
gameContainer.style.marginRight = "auto";
gameContainer.style.marginLeft = "auto";
gameContainer.style.marginBottom = "20px";
gameContainer.style.background = "white";
gameContainer.style.boxShadow = "0px 0px 5px white";

document.body.appendChild(gameContainer);

/**
 * @type {HTMLDivElement} divBall - The ball
 */
const divBall = document.createElement('div');

divBall.className = "ball";
divBall.style.width = 20 + "px";
divBall.style.height = 20 + "px";
divBall.style.background = "black";
divBall.style.left = "35%";
divBall.style.top = "50%";
divBall.style.position = "absolute";
divBall.style.borderRadius = "50%";
divBall.style.border = "1px solid white";
divBall.style.boxShadow = "0px 0px 10px black, 0px 0px 3px white, 0px 0px 10px black";

gameContainer.appendChild(divBall);

/**
 * @type {HTMLDivElement} divPaddle - The paddle
 */
const divPaddle = document.createElement('div');

divPaddle.className = "paddle";
divPaddle.style.width = "100px";
divPaddle.style.height = "20px";
divPaddle.style.background = "black";
divPaddle.style.border = "1px solid white";
divPaddle.style.boxShadow = " 0px 3px 3px black, 0px 3px 10px white, 0px 3px 10px black";
divPaddle.style.left = "40%";
divPaddle.style.top = "475px";
divPaddle.style.borderRadius = "10px 10px 0px 0px";
divPaddle.style.position = "absolute";

gameContainer.appendChild(divPaddle);
/**
 * @type {HTMLDivElement} divHowToPlay - How to play?
 */
const divHowToPlay = document.createElement('div');

divHowToPlay.id = "howToPlay";
divHowToPlay.style.width = "100%";
divHowToPlay.style.textAlign = "center";
divHowToPlay.style.padding = "10px 0px";
divHowToPlay.style.color = "black";
divHowToPlay.style.background = "white";
divHowToPlay.innerHTML = "<h1>How to play?</h1>" +
    "<h2>You have to move the paddle, to bounce the ball on it and break all the bricks.</h2>" +
    "<p style='font-size: large;'>Move the paddle left or right with \u2190 & \u2192 OR letter Q / A & D.</p>" +
    "<p style='font-size: large;'>\u26a0 The ball increases its speed by 10% up to 80% with each bounce on the paddle.</p>" +
    "<p style='font-size: large;'>Look above the game window for the number of tries.</p>";

document.body.appendChild(divHowToPlay);