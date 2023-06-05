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
 * Used to create bricks
 * @returns {HTMLDivElement}
 */
function divBricks()
{
    const divBrick = document.createElement('div');

    divBrick.className = 'brick';
    divBrick.style.display = "none";
    divBrick.style.width = brickWidth + "px";
    divBrick.style.height = brickHeight + "px";
    divBrick.style.position = "absolute";

    return divBrick;
}

/**
 * Generate a classic schema
 */
function classic()
{
    for (let c = 0; c < numberColumn; c++)
    {
        // Set rows
        for (let r = 0; r < numberRow; r++)
        {
            let newBrick = divBricks();

            // Set the position of the brick
            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.background = getRandomColor();
            newBrick.style.display = "block";


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
    for (let c = 0; c < numberColumn; c++) {
        // Set rows
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();
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
            newBrick.style.background = getRandomColor();

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
    const midColumn = Math.floor(numberColumn / 2);
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.display = "block";

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
    const brickSpacing = 10;

    const gridWidth = numberColumn * (brickWidth + brickSpacing);
    const gridHeight = numberRow * (brickHeight + brickSpacing);

    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            const offsetX = Math.floor(Math.random() * brickSpacing);
            const offsetY = Math.floor(Math.random() * brickSpacing);

            const left = c * (brickWidth + brickSpacing) + offsetX;
            const top = r * (brickHeight + brickSpacing) + offsetY;

            // Set the position of the brick
            newBrick.style.left = left + "px";
            newBrick.style.top = top + "px";
            newBrick.style.display = "block";
            newBrick.style.background = getRandomColor();

            bricks.push(newBrick);
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}

/**
 * Random generation
 */
function random_2() {
    const midColumn = Math.floor(numberColumn / 2);

    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.display = "block";

            if (r === Math.floor(Math.random() * 10) + 1 ||
                r === Math.floor(Math.random() * 10) + 1 ||
                r === Math.floor(Math.random() * 10) + 1 ||
                r === Math.floor(Math.random() * 10) + 1 ||
                r === Math.floor(Math.random() * 10) + 1 ||
                r === Math.floor(Math.random() * 10) + 1 ||
                c === (midColumn - (Math.floor(Math.random() * 10) + 1)) ||
                c === (midColumn - Math.floor(Math.random() * 10) + 1) ||
                c === (midColumn - Math.floor(Math.random() * 10) + 1) ||
                c === (midColumn + Math.floor(Math.random() * 10) + 1)) {

                newBrick.style.background = getRandomColor();
                bricks.push(newBrick);
            }
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}

/**
 * Generate an T-schema
 */
function space_invader()
{
    numberRow = 7;
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();
            let randomImage = Math.floor(Math.random() * 2);

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';

            if ((r === 1 && (c === 3 || c === 4 || c === 5 || c === 6)) ||
                (r === 2 && (c === 1 || c === 4 || c === 5 || c === 8)) ||
                (r === 3 && (c === 0 || c === 1 || c === 3 || c === 4 || c === 5 || c === 6 || c === 8 || c === 9)) ||
                (r === 4 && (c === 0 || c === 3 || c === 4 || c === 5 || c === 6 || c === 9)) ||
                (r === 5 && (c === 0 || c === 9))) {
                newBrick.style.display = "block";
                newBrick.style.backgroundImage = "url('img/space/space_invader.svg')";
                bricks.push(newBrick);
            }else if((r === 0 && (c === 2 || c === 7)) ||
                (r === 1 && (c === 2 || c === 7)) ||
                (r === 2 && (c === 2 || c === 7)) ||
                (r === 3 && (c === 2 || c === 7)) ||
                (r === 4 && (c === 2 || c === 7)) ||
                (r === 5 && (c === 2 || c === 7)) ||
                (r === 6 && (c === 3 || c === 6))
            ){
                newBrick.style.display = "block";
                newBrick.style.backgroundImage = "url('img/space/space_invader_red.svg')";
                newBrick.style.backgroundSize = "25px";
                bricks.push(newBrick);
            }
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}