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
    else if (type === "random_2")
        random_2();
    else
        classic();
}

if(start === "1")
{
    setTimeout(() => {
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

            if(event.key === "ArrowLeft" && paddleLeft > containerLeft || event.key === "q" && paddleLeft > containerLeft || event.key === "a" && paddleLeft > containerLeft)
                divPaddle.style.left = (paddleLeft - paddleSpeed) + 'px';
            else if(event.key === "ArrowRight" && paddleRight < (containerRight - 18) || event.key === "d" && paddleRight < (containerRight - 18))
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

                    audioHTMLBrick.play();

                    scoreCurrent = scoreCurrent + 100;
                    divScore.innerHTML = "Score : <strong>" + scoreCurrent + " / " + scoreMax + "</strong>";
                    // Reverse the direction of the ball when it hits a brick
                    ballSpeedY = -ballSpeedY;

                    break;
                }

                if (divBall.offsetTop <= divPaddle.offsetTop + paddleHeight &&
                    divBall.offsetTop + ballDiameter >= divPaddle.offsetTop &&
                    divBall.offsetLeft + ballDiameter >= divPaddle.offsetLeft &&
                    divBall.offsetLeft <= divPaddle.offsetLeft + paddleWidth) {

                    ballSpeedY = -ballSpeedY;

                    // increase the speed of the ball
                    if(!(Math.abs(ballSpeedX) > 1.8 * Math.abs(ballSpeedXRef)))
                        ballSpeedX = ballSpeedX *= 1.1;

                    if(!(Math.abs(ballSpeedY) > 1.8 * Math.abs(ballSpeedYRef)))
                        ballSpeedY = ballSpeedY *= 1.1;

                    audioHTMLBallPaddle.play();

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

            if (ballTop >= containerHeight - ballDiameter && tries < maxRetries)
            {
                return retries();
            }
            else if (ballTop >= containerHeight - ballDiameter && tries >= maxRetries)
            {
                clearInterval(gameInterval);
                audioHTMLLoose.play();
                return gameOver();
            }
            else if (ballTop <= 0)
            {
                ballSpeedY = -ballSpeedY;
            }
            else if(bricks.length <= 0)
            {
                clearInterval(gameInterval);
                audioHTMLWinning.play();
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
            audioHTMLRetry.play();
            tries++;
            divBall.style.left = divPaddle.offsetLeft.toString() + "px";
            divBall.style.top = "50%";
            ballSpeedX = ballSpeedXRef;
            ballSpeedY = ballSpeedYRef;
            divTries.innerHTML = "Try : <strong>" + tries + " / " + maxRetries + "</strong>";
            gameLoop();
        }
    }, 4500);
}