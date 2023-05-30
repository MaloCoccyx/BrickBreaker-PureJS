// Game variables
var ball = document.querySelector('.ball');
var paddle = document.querySelector('.paddle');
var brick = document.querySelector('.brick');

// Game container and retrieving its size
var gameContainer = document.getElementById('game-container');
var containerWidth = gameContainer.offsetWidth;
var containerHeight = gameContainer.offsetHeight;

// Parameters used to generate bricks
var numberRow = 4;
var numberColumn = 8;
var brickWidth = 50;
var brickHeight = 20;
var bricks = [];

// Initialize bricks
// Set columns
for (let c = 0; c < numberColumn; c++)
{
    // Set rows
    for (let r = 0; r < numberRow; r++)
    {
        let newBrick = document.createElement('div');
        newBrick.className = 'brick';
        newBrick.style.left = (c * (brickWidth + 10)) + 'px';
        newBrick.style.top = (r * (brickHeight + 10)) + 'px';
        bricks.push(newBrick);
        gameContainer.appendChild(newBrick);
    }
}

function movePaddle(event)
{

}