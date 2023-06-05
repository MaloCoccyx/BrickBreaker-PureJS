/*
######################################################
##                                                  ##
## Author: Guillaume Lequart                        ##
## GitHub: @MaloCoccyx                              ##
## Project: BrickBreaker-PureJS                     ##
## Used to: Generate and Select DOM (Select scheme) ##
## Created: 05/06/2023                              ##
##                                                  ##
######################################################
*/

/**
 * @type {HTMLDivElement} divStart - Div created when user winning the game
 */
const divStart = document.createElement('div');

divStart.id = "start";
divStart.style.width = 75 + "%";
divStart.style.background = "black";
divStart.style.color = "white";
divStart.style.textAlign = "center";
divStart.style.padding = "10px 0px";
divStart.style.marginRight = "auto";
divStart.style.marginLeft = "auto";
divStart.style.marginTop = "10%";
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
 * @type {HTMLAnchorElement} randomButton - Choose classic random schema
 */
let randomButton = document.createElement('a');

randomButton.id = "random";
randomButton.href = "?start=1&type=random";
randomButton.innerHTML = "<img src=\"img/random.png\" alt=\"random\"  width='200px' height='100px' />";
randomButton.style.marginRight = "10px";

divStart.appendChild(randomButton);

/**
 * @type {HTMLAnchorElement} random2Button - Choose Random_2-schema
 */
let random2Button = document.createElement('a');

random2Button.id = "random-2";
random2Button.href = "?start=1&type=random_2";
random2Button.innerHTML = "<img src=\"img/random_2.png\" alt=\"random\"  width='200px' height='100px' />";
random2Button.style.marginRight = "10px";

divStart.appendChild(random2Button);

/**
 * @type {HTMLAnchorElement} spaceInvaderButton - Choose Space_invader-schema
 */
let spaceInvaderButton = document.createElement('a');

spaceInvaderButton.id = "space-invader";
spaceInvaderButton.href = "?start=1&type=space_invader";
spaceInvaderButton.innerHTML = "<img src=\"img/space_invader.png\" alt=\"random\"  width='200px' height='100px' />";
spaceInvaderButton.style.marginRight = "10px";
spaceInvaderButton.style.marginTop = "10px";

divStart.appendChild(spaceInvaderButton);

/**
 * @type {HTMLParagraphElement} countDown - Displayed before game start
 */
let countDown = document.createElement('p');

countDown.style.position = "absolute";
countDown.style.color = "#ffa600";
countDown.style.fontSize = "150px";
countDown.id = "countDown";
countDown.style.display = "inline";
countDown.style.left = "42%";
countDown.style.top = "25%";
