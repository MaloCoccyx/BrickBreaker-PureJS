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
let numberRow = 8;

/**
 * @type {number} numberColumn - Number of brick columns
 */
let numberColumn = 10;

/**
 * @type {number} brickWidth - Width of bricks in pixels
 */
let brickWidth = 50; // in px

/**
 * @type {number} brickHeight - Height of bricks in pixels
 */
let brickHeight = 20; // in px

/**
 * @type {Element[]} bricks - Array containing the generated bricks
 */
const bricks = []; // array to store bricks

/**
 * @type {number} paddleSpeed - Speed of the paddle in px
 */
const paddleSpeed = 20;

/**
 * @type {number} ballDiameter - Diameter of the ball in px
 */
const ballDiameter = 20;

/**
 * @type {number} ballSpeedXRef - Initial Y-axis ball speed in px
 */
const ballSpeedXRef = 3;

/**
 * @type {number} ballSpeedX - Initial X-axis ball speed in px
 */
let ballSpeedX = ballSpeedXRef;

/**
 * @type {number} ballSpeedYRef - Y-axis ball at start
 */
const ballSpeedYRef = 3;

/**
 * @type {number} ballSpeedY - Y-axis ball speed in px
 */
let ballSpeedY = ballSpeedYRef;

/**
 * @type {number} maxRetries - Number of max retries
 */
const maxRetries = 5;

/**
 * @type {number} tries - Number of tries
 */
let tries = 1;

/**
 * @type {number} scoreMax - Score max
 */
let scoreMax = 0;

/**
 * @type {Element} brick - The brick of the game
 */
const brick = document.querySelector('.brick');

/**
 * @type {number} scoreCurrent - Current Score, updated when ball collide with a brick
 */
let scoreCurrent = 0;

const  urlParams = new URLSearchParams(window.location.search);

/**
 * @type {string} start - Start game if === 1
 */
let start = urlParams.get('start');

/**
 * @type {string} scoreCurrent - Current Score, updated when ball collide with a brick
 */
let type = urlParams.get('type');

/**
 * @type {number} paddleWidth - Width of the paddle in px
 */
const paddleWidth = divPaddle.offsetWidth;

/**
 * @type {number} paddleHeight - Height of the paddle in px
 */
const paddleHeight = divPaddle.offsetHeight;