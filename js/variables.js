/*
######################################
##                                  ##
## Author: Guillaume Lequart        ##
## GitHub: @MaloCoccyx              ##
## Project: BrickBreaker-PureJS     ##
## Used to: Contains variables      ##
## Created: 02/06/2023              ##
##                                  ##
######################################
*/

/**
 * @type {number} containerWidth - Returns the layout width of gameContainer as a number
 */
const containerWidth = gameContainer.offsetWidth;

/**
 * @type {number} containerHeight - Returns the layout height of gameContainer as a number
 */
const containerHeight = gameContainer.offsetHeight;

/**
 * @type {number} numberRow - Number of rows of bricks
 */
const numberRow = 1;

/**
 * @type {number} numberColumn - Number of brick columns
 */
const numberColumn = 1;

/**
 * @type {number} brickWidth - Width of bricks in pixels
 */
const brickWidth = 50; // in px

/**
 * @type {number} brickHeight - Height of bricks in pixels
 */
const brickHeight = 20; // in px

/**
 * @type {Element[]} bricks - Array containing the generated bricks
 */
const bricks = []; // array to store bricks

/**
 * @type {number} paddleSpeed - Speed of the paddle in px
 */
const paddleSpeed = 15;

/**
 * @type {number} ballRadius - Radius of the ball in px
 */
const ballRadius = 10;

/**
 * @type {number} ballDiameter - Diameter of the ball in px
 */
const ballDiameter = ballRadius * 2;

/**
 * @type {number} ballSpeedX - X-axis ball speed in px
 */
let ballSpeedX = 3;

/**
 * @type {number} ballSpeedY - Y-axis ball speed in px
 */
let ballSpeedY = 3;

/**
 * @type {number} tries - Number of tries
 */
let tries = 1;

/**
 * @type {Element} brick - The brick of the game
 */
const brick = document.querySelector('.brick');

/**
 * @type {number} scoreMax - Maximum score
 */
const scoreMax = (bricks.length * 100);
// Show maximum score
divScore.innerHTML = "Score : <strong>0 / " + scoreMax + "</strong>";

/**
 * @type {number} scoreCurrent - Current Score, updated when ball collide with a brick
 */
let scoreCurrent = 0;
