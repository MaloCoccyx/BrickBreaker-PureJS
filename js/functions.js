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
 * Create a div overlay for winning or loose game
 * @returns {HTMLDivElement}
 */
function createOverlayDiv()
{
    const divOverlay = document.createElement('div');

    divOverlay.style.width = 400 + "px";
    divOverlay.style.height = 150 + "px";
    divOverlay.style.color = "white";
    divOverlay.style.textAlign = "center";
    divOverlay.style.paddingTop = "20px";
    divOverlay.style.zIndex = "9999";
    divOverlay.style.position = "absolute";
    divOverlay.style.position = "absolute";
    divOverlay.style.border = "1px solid white";
    return divOverlay;
}

/**
 * Create restart link
 * @returns {HTMLAnchorElement}
 */
function createOverlayButton()
{
    let overlayButton = document.createElement('a');

    overlayButton.style.border = "1px solid white";
    overlayButton.style.background = "white";
    overlayButton.style.padding = "5px";
    overlayButton.href = "#restart";
    overlayButton.textContent = "Restart";

    return overlayButton;
}

/**
 * Create home link
 * @returns {HTMLAnchorElement}
 */
function createOverlayHome()
{
    // Button
    const overlayHome = createOverlayButton();
    overlayHome.style.color = "#004aff";
    overlayHome.href = "index.html";
    overlayHome.textContent = "Back to home";
    overlayHome.style.marginLeft = "10px";

    // Hover
    overlayHome.onmouseover = function ()
    {
        overlayHome.style.border = "1px solid white";
        overlayHome.style.color = "white";
        overlayHome.style.padding = "5px";
        overlayHome.style.background = "#004aff";
    };

    overlayHome.onmouseout = function ()
    {
        overlayHome.style.border = "1px solid #004aff";
        overlayHome.style.color = "#004aff";
        overlayHome.style.padding = "5px";
        overlayHome.style.background = "white";
    };

    return overlayHome;
}

/**
 * Show winning screen
 */
function winning()
{

    const divWinning = createOverlayDiv();
    divWinning.style.background = "#08CC0A";
    divWinning.innerHTML = "<h1>Congratulations you won!</h1>";

    // Button
    const aWinning = createOverlayButton();
    aWinning.style.color = "#08CC0A";

    divWinning.appendChild(aWinning);

    // Hover
    aWinning.onmouseover = function ()
    {
        aWinning.style.border = "1px solid white";
        aWinning.style.color = "white";
        aWinning.style.padding = "5px";
        aWinning.style.background = "#08CC0A";
    };

    aWinning.onmouseout = function ()
    {
        aWinning.style.border = "1px solid green";
        aWinning.style.background = "white";
        aWinning.style.padding = "5px";
        aWinning.style.color = "#08CC0A";
    };

    // Reload page
    aWinning.onclick = function () { location.reload();};

    const home = createOverlayHome();

    divWinning.appendChild(home);

    showOverlay().appendChild(divWinning);
}

/**
 * Show game over screen
 */
function gameOver()
{
    const divGameOver = createOverlayDiv();
    divGameOver.style.background = "#cc0808";
    divGameOver.innerHTML = "<h1>Game over!</h1>";

    // Button
    const aGameOver = createOverlayButton();
    aGameOver.style.color = "#cc0808";

    divGameOver.appendChild(aGameOver);

    // Hover
    aGameOver.onmouseover = function ()
    {
        aGameOver.style.border = "1px solid white";
        aGameOver.style.color = "white";
        aGameOver.style.padding = "5px";
        aGameOver.style.background = "#cc0808";
    };

    aGameOver.onmouseout = function ()
    {
        aGameOver.style.border = "1px solid red";
        aGameOver.style.color = "#cc0808";
        aGameOver.style.padding = "5px";
        aGameOver.style.background = "white";
    };
    // Reload page
    aGameOver.onclick = function () { location.reload();};

    // Button
    const home = createOverlayHome();

    divGameOver.appendChild(home);

    showOverlay().appendChild(divGameOver);
}

/**
 * Show background for winning or game over screen
 * @returns {HTMLDivElement}
 */
function showOverlay()
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
 * Delete the overlay
 */
function deleteOverlay()
{
    const divBackground = document.querySelector('#background');
    document.body.removeChild(divBackground);
}

/**
 * Choose scheme
 */
function chooseScheme()
{
    showOverlay().appendChild(divStart);

    // Choose classic scheme
    classicButton.onclick = function () {
        generateGame("classic");
        deleteOverlay();
    };
}

/**
 * Checks if the parameters are already passed
 */
function checkStart()
{
    if(start === "1" && (type !== "" || type !== null))
    {
        generateGame(type);
    }
    else
        chooseScheme();
}

/**
 * Count bricks and multiply by 100 to get max score
 * @param numbers
 */
function countBricks(numbers)
{
    scoreMax = (numbers * 100);
    // Show maximum score
    divScore.innerHTML = "Score : <strong>0 / " + scoreMax + "</strong>";
}

/**
 * Generate random color for bricks
 * @returns {string}
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}