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
    numberRow = 8;
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
 * Generate an T-schema
 */
function letter_t()
{
    numberColumn = 10;
    numberRow = 8;
    const midColumn = Math.floor(numberColumn / 2);
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = document.createElement('div');
            newBrick.className = 'brick';

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.width = brickWidth + 'px';
            newBrick.style.height = brickHeight + 'px';
            newBrick.style.position = 'absolute';

            if (r === 0 || r === 1 || r === 2 || c ===  midColumn || c === (midColumn - 1) || c === (midColumn - 2) || c === (midColumn + 1)) {
                newBrick.style.background = getRandomColor();
                bricks.push(newBrick);
            }
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}

/**
 * Simple and random generation
 */
function random() {
    numberColumn = 10;
    numberRow = 8;
    const brickSpacing = 10;

    const gridWidth = numberColumn * (brickWidth + brickSpacing);
    const gridHeight = numberRow * (brickHeight + brickSpacing);
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = document.createElement('div');
            newBrick.className = 'brick';

            // Generate random offset within the brick spacing range
            const offsetX = Math.floor(Math.random() * brickSpacing);
            const offsetY = Math.floor(Math.random() * brickSpacing);

            // Calculate the position based on the grid and brick dimensions
            const left = c * (brickWidth + brickSpacing) + offsetX;
            const top = r * (brickHeight + brickSpacing) + offsetY;

            newBrick.style.left = left + 'px';
            newBrick.style.top = top + 'px';
            newBrick.style.width = brickWidth + 'px';
            newBrick.style.height = brickHeight + 'px';
            newBrick.style.position = 'absolute';
            newBrick.style.background = getRandomColor();

            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}