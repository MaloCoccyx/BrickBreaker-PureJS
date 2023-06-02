/*
######################################################
##                                                  ##
## Author: Guillaume Lequart                        ##
## GitHub: @MaloCoccyx                              ##
## Project: BrickBreaker-PureJS                     ##
## Used To: Generate type of brick breaker (schema) ##
## Created: 02/06/2023                              ##
##                                                  ##
######################################################
*/

/**
 * Generate a classic schema
 */
function classic()
{
    numberColumn = 10;
    numberRow = 7;
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

    countBricks(bricks.length);
}

/**
 * Generate an M-schema
 */
function letter_m()
{
    numberColumn = 10;
    numberRow = 10;

    for (let c = 0; c < numberColumn; c++) {
        // Set rows
        for (let r = 0; r < numberRow; r++) {
            let newBrick = document.createElement('div');
            newBrick.className = 'brick';

            // Set the position of the brick
            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';

            // Customize the brick's appearance
            if (c === r || c === numberColumn - 1 - r) {
                newBrick.style.background = 'green'; // Color for the letter "M"
            } else {
                newBrick.style.background = 'white'; // Color for the empty space
            }

            newBrick.style.width = brickWidth + 'px';
            newBrick.style.height = brickHeight + 'px';
            newBrick.style.position = 'absolute';

            // Push brick into the array
            bricks.push(newBrick);
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}

/**
 * Count bricks {numbers} and multiply by 100 to get max score
 * @param numbers
 */
function countBricks(numbers)
{
    const scoreMax = (numbers * 100);
    // Show maximum score
    divScore.innerHTML = "Score : <strong>0 / " + scoreMax + "</strong>";
}