/*
######################################
##                                  ##
## Author: Guillaume Lequart        ##
## GitHub: @MaloCoccyx              ##
## Project: BrickBreaker-PureJS     ##
## Used to: Contains functions      ##
## Created: 02/06/2023              ##
##                                  ##
######################################
*/

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