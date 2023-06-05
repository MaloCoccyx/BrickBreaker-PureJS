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
    randomColorPaddleBall();
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
    randomColorPaddleBall();

    const colorsBrick = ["#008dff", "#3bce13", "#7849cc", "#ff6600",
        "#fff219", "#ff0400", "#008dff", "#3bce13"];
    for (let c = 0; c < numberColumn; c++)
    {
        // Set rows
        for (let r = 0; r < numberRow; r++)
        {
            let newBrick = divBricks();

            // Set the position of the brick
            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.display = "block";
            newBrick.style.background = colorsBrick[r];

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
    randomColorPaddleBall();
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.display = "block";

            if (c === 0 ||c === 9){
                newBrick.style.background = colorsBricks[0];
                bricks.push(newBrick);
            }else if( c === 1 || c === 8){

                newBrick.style.background = colorsBricks[5];
                bricks.push(newBrick);
            }else if(r === 0 && (c === 2 ||c === 7)){

                newBrick.style.background = colorsBricks[2];
                bricks.push(newBrick);
            }else if(r === 1 && (c === 2 || c === 3 || c === 6 || c === 7)){

                newBrick.style.background = colorsBricks[2];
                bricks.push(newBrick);
            }else if(r === 2 && (c === 3 || c === 4 || c === 5 || c === 6)){

                newBrick.style.background = colorsBricks[3];
                bricks.push(newBrick);
            }else if((r === 3 || r === 4) && (c === 4 || c === 5)) {

                newBrick.style.background = colorsBricks[6];
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
function letter_t()
{
    randomColorPaddleBall();
    const midColumn = Math.floor(numberColumn / 2);
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            newBrick.style.display = "block";

            if (r === 0){
                newBrick.style.background = colors[r];
                bricks.push(newBrick);
            }else if(r === 1) {
                newBrick.style.background = colors[r];
                bricks.push(newBrick);
            }else if( r === 2){
                newBrick.style.background = colors[r];
                bricks.push(newBrick);

            }else if(c === midColumn){
                newBrick.style.background = colors[r];
                bricks.push(newBrick);
            }else if(c === (midColumn - 1)){
                newBrick.style.background = colors[r];
                bricks.push(newBrick);
            }else if(c === (midColumn - 2)){
                newBrick.style.background = colors[r];
                bricks.push(newBrick);
            }else if(c === (midColumn + 1)){
                newBrick.style.background = colors[r];
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
    randomColorPaddleBall();
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
    randomColorPaddleBall();
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
 * Generate a Space Invader schema
 */
function space_invader()
{
    randomColorPaddleBall();
    gameContainer.style.backgroundImage = "url('img/space/terre.png')";
    numberRow = 7;
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';

            if ((r === 1 && (c === 3 || c === 4 || c === 5 || c === 6)) ||
                (r === 2 && (c === 1 || c === 4 || c === 5 || c === 8)) ||
                (r === 3 && (c === 0 || c === 1 || c === 3 || c === 4 || c === 5 || c === 6 || c === 8 || c === 9)) ||
                (r === 4 && (c === 0 || c === 3 || c === 4 || c === 5 || c === 6 || c === 9)) ||
                (r === 5 && (c === 0 || c === 9))) {
                newBrick.style.display = "block";
                newBrick.style.backgroundImage = "url('img/space/space_invader_white.svg')";
                newBrick.style.backgroundSize = "25px";
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

/**
 * Generate an Square-schema
 */
function square()
{
    randomColorPaddleBall();
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';

            if (r === 0 || c === 0 ||c === 9 || r === 7){
                newBrick.style.display = "block";
                newBrick.style.background = colors[0];
                bricks.push(newBrick);
            }else if(((r === 1 || r === 6) && (c !== 0 || c !== 9)) ||
                (c === 1 || c === 8)){
                newBrick.style.display = "block";
                newBrick.style.background = colors[5];
                bricks.push(newBrick);
            }
            else if((r === 3 || r === 4) && (c === 4 || c === 5)) {
                newBrick.style.display = "block";
                newBrick.style.background = colors[3];
                bricks.push(newBrick);
            }
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}

/**
 * Generate an Square_2-schema
 */
function square_2()
{
    randomColorPaddleBall();
    for (let c = 0; c < numberColumn; c++) {
        for (let r = 0; r < numberRow; r++) {
            let newBrick = divBricks();

            newBrick.style.left = (c * (brickWidth + 10) + 5) + 'px';
            newBrick.style.top = (r * (brickHeight + 10) + 5) + 'px';
            if (r === 0 || c === 0 || c === 9 || r === 7){
                newBrick.style.display = "block";
                newBrick.style.background = colors[0];
                bricks.push(newBrick);
            }else if ((r === 2 || r === 5) && (c === 2 || c === 3 || c === 4 || c === 5 || c === 6 || c === 7) ||
                (r === 3 || r === 4) && (c === 2 || c === 7)) {
                newBrick.style.display = "block";
                newBrick.style.background = colors[3];
                bricks.push(newBrick);
            }else if ((r === 3 || r === 4) && (c === 3 || c === 4 || c === 5 || c === 6)) {
                newBrick.style.display = "block";
                newBrick.style.background = colors[5];
                bricks.push(newBrick);
            }
            gameContainer.appendChild(newBrick);
        }
    }

    countBricks(bricks.length);
}