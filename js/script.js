/*
############################################################
##                                                        ##
## Author: Guillaume Lequart                              ##
## GitHub: @MaloCoccyx                                    ##
## Project: BrickBreaker-PureJS                           ##
## Used To: Main functions of the brick breaker           ##
## Created: 30/05/2023                                    ##
##                                                        ##
############################################################
*/

/**
 * Generates the game, according to the type of schema (defined in parameter)
 *
 * @param type
 * @type {string}
 */
function generateGame(type)
{
    if(type === "letter_m")
        letter_m();
    else if (type === "letter_t")
        letter_t();
    else if (type === "random")
        random();
    else
        classic();
}

if(start === "1")
{

    const gameInterval = setInterval(gameLoop, 10);

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
            clearInterval(gameInterval);
            return gameOver();
        }
        else if (ballTop <= 0)
        {
            ballSpeedY = -ballSpeedY;
        }
        else if(bricks.length <= 0)
        {
            clearInterval(gameInterval);
            return winning();
        }

        divBall.style.left = (ballLeft + ballSpeedX) + 'px';
        divBall.style.top = (ballTop + ballSpeedY) + 'px';

        detectCollision();

    }

    /**
     * Replace the ball while tries < 3
     */
    function retries()
    {
        tries++;
        divBall.style.left = "50%";
        divBall.style.top = "50%";
        ballSpeedX = 3;
        ballSpeedY = 3;
        divTries.innerHTML = "Essaies : <strong>" + tries + " / 3</strong>";
        gameLoop();
    }
}