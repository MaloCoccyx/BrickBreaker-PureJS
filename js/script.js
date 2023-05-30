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
 * @type {HTMLHeadingElement} divTitle - The score
 */
const divTitle = document.createElement('h1');

divTitle.style.height = 40 + "px";
divTitle.style.left = 5 + "px";
divTitle.style.marginBottom = 5 + "px";
divTitle.innerText = "Brick Breaker in Pure JavaScript";

document.body.appendChild(divTitle);

/**
 * @type {HTMLHeadingElement} divTitle - The score
 */
const divSubTitle = document.createElement('h2');

divSubTitle.style.height = 40 + "px";
divSubTitle.style.left = 5 + "px";
divSubTitle.style.marginBottom = 5 + "px";
divSubTitle.innerHTML = "Author - <strong>Lequart Guillaume</strong> | <a href=\"https://github.com/MaloCoccyx/\">@MaloCoccyx</a> |";

document.body.appendChild(divSubTitle);

/**
 * @type {HTMLDivElement} divTitle - The score
 */
const divScore = document.createElement('h2');

divScore.id = "score";
divScore.style.height = 40 + "px";
divScore.style.left = 5 + "px";
divScore.style.marginBottom = 5 + "px";
divScore.innerHTML = "Author - <strong>Lequart Guillaume</strong> | <a href=\"https://github.com/MaloCoccyx/\">@MaloCoccyx</a> |";

document.body.appendChild(divScore);


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
 * @type {offsetWidth} containerWidth - Returns the layout width of gameContainer as an integer
 */
const containerWidth = gameContainer.offsetWidth;

/**
 * @type {offsetHeight} containerHeight - Returns the layout height of gameContainer as an integer
 */
const containerHeight = gameContainer.offsetHeight;

/**
 * @type {number} numberRow - Number of rows of bricks
 */
const numberRow = 7;

/**
 * @type {number} numberColumn - Number of brick columns
 */
const numberColumn = 10;

/**
 *
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
 * @type {number} paddleWidth - Width of the paddle in px
 */
const paddleWidth = 100;

/**
 * @type {number} paddleHeight - Height of the paddle in px
 */
const paddleHeight = 20;

/**
 * @type {number} paddleSpeed - Speed of the paddle in px
 */
const paddleSpeed = 10;

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
 * @type {setInterval} gameInterval - Launch game
 */
const gameInterval = setInterval(gameLoop, 10);

/**
 * @type {HTMLDivElement} divBall - The ball
 */
const divBall = document.createElement('div');

divBall.className = "ball";
divBall.style.width = 20 + "px";
divBall.style.height = 20 + "px";
divBall.style.background = "red";
divBall.style.left = 5 + "px";
divBall.style.top = 400 + "px";
divBall.style.position = "absolute";
divBall.style.borderRadius = 50 + "%";

gameContainer.appendChild(divBall);

/**
 * @type {HTMLDivElement} divPaddle - The paddle
 */
const divPaddle = document.createElement('div');

divPaddle.className = "paddle";
divPaddle.style.width = paddleWidth + "px";
divPaddle.style.height = paddleHeight + "px";
divPaddle.style.background = "blue";
divPaddle.style.left = 5 + "px";
divPaddle.style.top = 475 + "px";
divPaddle.style.position = "absolute";

gameContainer.appendChild(divPaddle);

/**
 * @type {Element} ball - The Game ball
 */
const ball = document.querySelector('.ball');

/**
 * @type {Element} paddle - The Game paddle
 */
const paddle = document.querySelector('.paddle');

/**
 * @type {Element} brick - The brick of the game
 */
const brick = document.querySelector('.brick');

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
        newBrick.style.background = "green";
        newBrick.style.width = brickWidth + "px";
        newBrick.style.height = brickHeight + "px";
        newBrick.style.position = "absolute";

        // Push brick in array
        bricks.push(newBrick);
        gameContainer.appendChild(newBrick);
    }
}

/**
 * Function to move the paddle with left & right arrow (keyboard)
 *
 * @param event movePaddle
 */
function movePaddle(event)
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

/**
 * Checks if the ball collides with the bricks/paddle.
 * Remove a brick if the ball hits it.
 */
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

        // Checks if the boundaries of the ball and the paddle overlap
        if (ball.offsetTop <= paddle.offsetTop + paddleHeight &&
            ball.offsetTop + ballDiameter >= paddle.offsetTop &&
            ball.offsetLeft + ballDiameter >= paddle.offsetLeft &&
            ball.offsetLeft <= paddle.offsetLeft + paddleWidth) {

            // Reverse the vertical direction of the ball when it hits the top
            ballSpeedY = -ballSpeedY;

            break;
        }
    }
}

/**
 * Called at regular intervals, allowing continuous ball movement and collision detection.
 */
function gameLoop() {
    // Ball movement
    let ballLeft = ball.offsetLeft;
    let ballTop = ball.offsetTop;

    if (ballLeft <= 0 || ballLeft >= containerWidth - ballDiameter) {
        // Reverse the horizontal direction of the ball when it hits the edges
        ballSpeedX = -ballSpeedX;
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