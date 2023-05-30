/*
######################################
##                                  ##
## Author: Guillaume Lequart        ##
## GitHub: @MaloCoccyx              ##
## Project: BrickBreaker-PureJS     ##
## Created: 02/12/2022              ##
##                                  ##
######################################
*/

/**
 * @type {Element} ball - The Game ball
 * @type {Element} paddle - The Game paddle
 * @type {Element} brick - The brick of the game
 */
var ball = document.querySelector('.ball');
var paddle = document.querySelector('.paddle');
var brick = document.querySelector('.brick');

/**
 * @type {HTMLElement} gameContainer - The game container
 * @type {offsetWidth} containerWidth - Returns the layout width of gameContainer as an integer
 * @type {offsetHeight} containerHeight - Returns the layout height of gameContainer as an integer
 */
var gameContainer = document.getElementById('game-container');
var containerWidth = gameContainer.offsetWidth;
var containerHeight = gameContainer.offsetHeight;

/**
 * @type {number} numberRow - Number of rows of bricks
 * @type {number} numberColumn - Number of brick columns
 * @type {number} brickWidth - Width of bricks in pixels
 * @type {number} brickHeight - Height of bricks in pixels
 * @type {array} bricks - Array containing the generated bricks
 */
var numberRow = 7;
var numberColumn = 10;
var brickWidth = 50; // in px
var brickHeight = 20; // in px
var bricks = []; // array to store bricks

/**
 * @type {number} paddleWidth - Width of the paddle in px
 * @type {number} paddleHeight - Height of the paddle in px
 * @type {number} paddleSpeed - Speed of the paddle in px
 */
var paddleWidth = 100;
var paddleHeight = 20;
var paddleSpeed = 5;

/**
 * @type {number} ballRadius - Radius of the ball in px
 * @type {number} ballDiameter - Diameter of the ball in px
 * @type {number} ballSpeedX - X-axis ball speed in px
 * @type {number} ballSpeedY - Y-axis ball speed in px
 */
var ballRadius = 10;
var ballDiameter = ballRadius * 2;
var ballSpeedX = 2;
var ballSpeedY = 2;

// Initialize bricks
// Set columns
for (let c = 0; c < numberColumn; c++)
{
    // Set rows
    for (let r = 0; r < numberRow; r++)
    {
        let newBrick = document.createElement('div');
        newBrick.className = 'brick';

        // Set the position of the brick
        newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
        newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';

        // Push brick in array
        bricks.push(newBrick);
        gameContainer.appendChild(newBrick);
    }
}

/**
 *
 * @param envent
 */
function movePaddle(envent)
{
    let containerLeft = gameContainer.offsetLeft;
    let containerRight = containerLeft + containerWidth;
    let paddleLeft = paddle.offsetLeft;
    let paddleRight = paddleLeft + paddleWidth;

    if(event.key === "ArrowLeft" && paddleLeft > containerLeft)
        paddle.style.left = (paddleLeft - paddleSpeed) + 'px';
    else if(event.key === "ArrowRight" && paddleRight < (containerRight - 18))
        paddle.style.left = (paddleLeft + paddleSpeed + 'px');
}
// Add event on keydown (keyboard key)
document.addEventListener('keydown', movePaddle);

function detectCollision() {
    for (let i = 0; i < bricks.length; i++) {
        let currentBrick = bricks[i];

        // Checks if the boundaries of the ball and the brick overlap
        if (ball.offsetTop <= currentBrick.offsetTop + brickHeight &&
            ball.offsetTop + ballDiameter >= currentBrick.offsetTop &&
            ball.offsetLeft + ballDiameter >= currentBrick.offsetLeft &&
            ball.offsetLeft <= currentBrick.offsetLeft + brickWidth) {

            gameContainer.removeChild(currentBrick);
            bricks.splice(i, 1);

            // Reverse the direction of the ball when it hits a brick
            ballSpeedY = -ballSpeedY;

            break;
        }
    }
}

function gameLoop() {
    // Ball movement
    let ballLeft = ball.offsetLeft;
    let ballTop = ball.offsetTop;

    if (ballLeft <= 0 || ballLeft >= containerWidth - ballDiameter) {
        // Reverse the horizontal direction of the ball when it hits the edges
        ballSpeedX = -ballSpeedX;
    }

    if (ball.offsetTop <= paddle.offsetTop + paddleHeight &&
        ball.offsetTop + ballDiameter >= paddle.offsetTop &&
        ball.offsetLeft + ballDiameter >= paddle.offsetLeft &&
        ball.offsetLeft <= paddle.offsetLeft + paddleWidth){

        // Reverse the vertical direction of the ball when it hits the top
        ballSpeedY = -ballSpeedY;
    }

    if (ballTop <= 0) {
        ballSpeedY = -ballSpeedY;
    } else if (ballTop >= containerHeight - ballDiameter) {
        // The ball has touched down, game over
        alert('Game Over');
        clearInterval(gameInterval);
    }

    ball.style.left = (ballLeft + ballSpeedX) + 'px';
    ball.style.top = (ballTop + ballSpeedY) + 'px';

    detectCollision();
}

// Launch game
var gameInterval = setInterval(gameLoop, 10);