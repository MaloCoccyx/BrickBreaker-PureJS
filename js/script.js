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
 * @type {number} gameInterval - Launch game and actualize it every n ms
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
divBall.style.left = "50%";
divBall.style.top = "50%";
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
divPaddle.style.left = "50%";
divPaddle.style.top = 475 + "px";
divPaddle.style.position = "absolute";

gameContainer.appendChild(divPaddle);

/**
 * @type {number} tries - Number of tries
 */
let tries = 1;

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
 * @type {number} scoreMax - Maximum score
 */
const scoreMax = (bricks.length * 100);
// Show maximum score
divScore.innerHTML = "Score : <strong>0 / " + scoreMax + "</strong>";

/**
 * @type {number} scoreCurrent - Current Score, updated when ball collide with a brick
 */
let scoreCurrent = 0;

/**
 * Function to move the paddle with left & right arrow (keyboard)
 *
 * @param event movePaddle
 */
function movePaddle(event)
{
    let containerLeft = gameContainer.offsetLeft;
    let containerRight = containerLeft + containerWidth;
    let paddleLeft = divPaddle.offsetLeft;
    let paddleRight = paddleLeft + paddleWidth;

    if(event.key === "ArrowLeft" && paddleLeft > containerLeft)
        divPaddle.style.left = (paddleLeft - paddleSpeed) + 'px';
    else if(event.key === "ArrowRight" && paddleRight < (containerRight - 18))
        divPaddle.style.left = (paddleLeft + paddleSpeed + 'px');
}
// Add event on keydown (keyboard key)
document.addEventListener('keydown', movePaddle);

/**
 * Checks if the ball collides with the bricks/paddle.
 * Remove a brick if the ball hits it.
 */
function detectCollision()
{
    for (let i = 0; i < bricks.length; i++) {
        let currentBrick = bricks[i];

        // Checks if the boundaries of the ball and the brick overlap
        if (divBall.offsetTop <= currentBrick.offsetTop + brickHeight &&
            divBall.offsetTop + ballDiameter >= currentBrick.offsetTop &&
            divBall.offsetLeft + ballDiameter >= currentBrick.offsetLeft &&
            divBall.offsetLeft <= currentBrick.offsetLeft + brickWidth) {

            gameContainer.removeChild(currentBrick);
            bricks.splice(i, 1);
            scoreCurrent = scoreCurrent + 100;
            divScore.innerHTML = "Score : <strong>" + scoreCurrent + " / " + scoreMax + "</strong>";
            // Reverse the direction of the ball when it hits a brick
            ballSpeedY = -ballSpeedY;

            break;
        }

        // Checks if the boundaries of the ball and the paddle overlap
        if (divBall.offsetTop <= divPaddle.offsetTop + paddleHeight &&
            divBall.offsetTop + ballDiameter >= divPaddle.offsetTop &&
            divBall.offsetLeft + ballDiameter >= divPaddle.offsetLeft &&
            divBall.offsetLeft <= divPaddle.offsetLeft + paddleWidth) {

            // Reverse the vertical direction of the ball when it hits the top
            ballSpeedY = -ballSpeedY;

            break;
        }
    }
}

/**
 * Called at regular intervals, allowing continuous ball movement and collision detection.
 */
function gameLoop()
{
    // Ball movement
    let ballLeft = divBall.offsetLeft;
    let ballTop = divBall.offsetTop;

    if (ballLeft <= 0 || ballLeft >= containerWidth - ballDiameter) {
        // Reverse the horizontal direction of the ball when it hits the edges
        ballSpeedX = -ballSpeedX;
    }

    if (ballTop >= containerHeight - ballDiameter && tries < 3)
    {
        return retries();
    }
    else if (ballTop >= containerHeight - ballDiameter && tries >= 3)
    {
        // The ball has touched down, game over
        return gameOver();
    }
    else if (ballTop <= 0)
    {
        ballSpeedY = -ballSpeedY;
    }
    else if(bricks.length <= 0)
    {
        return winning();
    }

    divBall.style.left = (ballLeft + ballSpeedX) + 'px';
    divBall.style.top = (ballTop + ballSpeedY) + 'px';

    detectCollision();

}

/**
 * Show winning screen
 */
function winning()
{
    clearInterval(gameInterval);

    /**
     * @type {HTMLDivElement} divWinning - Div created when user winning the game
     */
    const divWinning = document.createElement('div');

    divWinning.id = "winning";
    divWinning.style.width = 400 + "px";
    divWinning.style.height = 150 + "px";
    divWinning.style.background = "#08CC0A";
    divWinning.style.color = "white";
    divWinning.style.textAlign = "center";
    divWinning.style.paddingTop = "20px";
    divWinning.style.zIndex = "9999";
    divWinning.style.border = "1px solid white";
    divWinning.innerHTML = "<h1>Congratulations you won!</h1>";

    /**
     * @type {HTMLAnchorElement} winningButton - Reload game when clicked
     */
    let winningButton = document.createElement('a');

    winningButton.id = "restart";
    winningButton.href = "#restart";
    winningButton.textContent = "Restart";
    winningButton.style.border = "1px solid green";
    winningButton.style.color = "#08CC0A";
    winningButton.style.background = "white";
    winningButton.style.padding = "5px";

    divWinning.appendChild(winningButton);

    // Hover
    winningButton.onmouseover = function ()
    {
        winningButton.style.border = "1px solid white";
        winningButton.style.color = "white";
        winningButton.style.background = "#08CC0A";
        winningButton.style.padding = "5px";
    };

    winningButton.onmouseout = function ()
    {
        winningButton.style.border = "1px solid green";
        winningButton.style.color = "#08CC0A";
        winningButton.style.background = "white";
        winningButton.style.padding = "5px";
    };
    // Reload page
    winningButton.onclick = function () { location.reload();};

    showBackground().appendChild(divWinning);
}

/**
 * Show game over screen
 */
function gameOver()
{
    clearInterval(gameInterval);

    /**
     * @type {HTMLDivElement} divGameOver - Div created when user loose the game
     */
    const divGameOver = document.createElement('div');

    divGameOver.id = "winning";
    divGameOver.style.width = 400 + "px";
    divGameOver.style.height = 150 + "px";
    divGameOver.style.background = "#cc0808";
    divGameOver.style.color = "white";
    divGameOver.style.textAlign = "center";
    divGameOver.style.paddingTop = "20px";
    divGameOver.style.zIndex = "9999";
    divGameOver.style.border = "1px solid white";
    divGameOver.innerHTML = "<h1>Game over!</h1>";

    /**
     * @type {HTMLAnchorElement} loosingButton - Reload game when clicked
     */
    let loosingButton = document.createElement('a');

    loosingButton.id = "restart";
    loosingButton.href = "#restart";
    loosingButton.textContent = "Restart";
    loosingButton.style.border = "1px solid green";
    loosingButton.style.color = "#cc0808";
    loosingButton.style.background = "white";
    loosingButton.style.padding = "5px";

    divGameOver.appendChild(loosingButton);

    // Hover
    loosingButton.onmouseover = function ()
    {
        loosingButton.style.border = "1px solid white";
        loosingButton.style.color = "white";
        loosingButton.style.background = "#cc0808";
        loosingButton.style.padding = "5px";
    };

    loosingButton.onmouseout = function ()
    {
        loosingButton.style.border = "1px solid green";
        loosingButton.style.color = "#cc0808";
        loosingButton.style.background = "white";
        loosingButton.style.padding = "5px";
    };
    // Reload page
    loosingButton.onclick = function () { location.reload();};

    showBackground().appendChild(divGameOver);
}

/**
 * Show background for winning or game over screen
 * @returns {HTMLDivElement}
 */
function showBackground()
{
    /**
     * @type {HTMLDivElement} divBackground - Background when winning or loose game
     */
    const divBackground = document.createElement('div');

    divBackground.id = "background";
    divBackground.style.minWidth = "100%";
    divBackground.style.height = "100%";
    divBackground.style.background = "rgba(0,0,0,0.6)";
    divBackground.style.display = "flex";
    divBackground.style.justifyContent = "center";
    divBackground.style.position = "absolute";
    divBackground.style.zIndex = "9998";
    divBackground.style.top = 0 + "px";
    divBackground.style.left = 0 + "px";
    divBackground.style.paddingTop = "20%";

    document.body.appendChild(divBackground);
    return divBackground;
}

/**
 * Replace the ball while tries < 3
 */
function retries()
{
    console.log(tries);
    tries++;
    console.log(tries);
    divBall.style.left = "50%";
    divBall.style.top = "50%";
    ballSpeedX = 3;
    ballSpeedY = 3;
    divTries.innerHTML = "Essaies : <strong>" + tries + " / 3</strong>";
    gameLoop();
}