
// Get these from CSS
const colorSolved     = "#67BFEC";
const colorBorder     = "#202020";
const colorBackground = "#B0DDFF";



/*****************************************************************************
 * Calculate board cell size
 *****************************************************************************/
function uiBoardCellSize() {
    return Math.floor(elements.screen.clientWidth / globals.boardMaxSize);
}


/*****************************************************************************
 * Redraw buttons
 *****************************************************************************/
function uiButtonsRedraw(game) {
    if (game.moveHistory.length == 0) {
        elements.buttonUndo.disabled = true;
    } else {
        elements.buttonUndo.disabled = false;
    }

    if (game.level == 0 && game.moveHistory.length == 0) {
        elements.buttonRestart.disabled = true;
    } else {
        elements.buttonRestart.disabled = false;
    }
}

/*****************************************************************************
 * Redraw level elements
 *****************************************************************************/
function uiInfoRedraw(game) {
    let gameInfo = document.getElementById("game-info");
    gameInfo.innerHTML = "L" + (game.level + 1) + "/" + options.challenges.length;
}

/*****************************************************************************
 * Redraw board
 *****************************************************************************/
function uiBoardRedraw(board) {
    const boardContext = elements.canvas.getContext('2d');

    /* Get board cell size */
    const cellSize = uiBoardCellSize();

    /* Center the board */
    elements.board.style.width  = cellSize * board.width + "px";
    elements.board.style.height = cellSize * board.height + "px";
    elements.board.style.left   = elements.screen.clientWidth / 2
                                - cellSize * (board.width / 2)
                                + "px";

    /* Set canvas size and clear it */
    const pixelRatio = 2.0;
    elements.canvas.width  = cellSize * board.width * pixelRatio;
    elements.canvas.height = cellSize * board.height * pixelRatio;
    boardContext.scale(pixelRatio, pixelRatio);
    boardContext.clearRect(0, 0, elements.canvas.width, elements.canvas.height);

    /* Define board elements sizes */
    const textRatio   = 0.35;
    const circleRatio = 0.90;
    const borderWidth = 1.0;

    /* Redraw cell content */
    for (y = 0; y < board.height; y++) {
        for (x = 0; x < board.width; x++) {
            const middleX = cellSize * x + cellSize / 2;
            const middleY = cellSize * y + cellSize / 2;
            const startX = cellSize * x;
            const startY = cellSize * y;

            /* Draw value circles */
            boardContext.beginPath();
            boardContext.arc(middleX, middleY, circleRatio * cellSize / 2, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
            if (board.resolved(x, y)) {
                boardContext.fillStyle   = colorSolved;
                boardContext.fill();
            }
            boardContext.strokeStyle = colorBorder;
            boardContext.lineWidth   = borderWidth;
            boardContext.lineCap     = "round";
            boardContext.stroke();

            /* Draw value inside a cell */
            const fontWeight = "normal";
            const fontStyle  = "normal";
            const fontSize   = (cellSize * textRatio) + "px";
            const fontFamily = "Courier New";

            boardContext.font         = `${fontWeight} ${fontStyle} ${fontSize} ${fontFamily}`;
            boardContext.textBaseline = "middle";
            boardContext.textAlign    = "center";
            boardContext.fillStyle    = colorBorder;
            boardContext.fillText(board.fragments[x][y], middleX, middleY);
        }
    }
}

/*****************************************************************************
 * Redraw UI
 *****************************************************************************/
function uiRedraw() {
    /* Redraw board */
    uiBoardRedraw(globals.game.board);

    /* Redraw info */
    uiInfoRedraw(globals.game);

    /* Redraw buttons */
    uiButtonsRedraw(globals.game);

    /* Check if end of level */
    if (globals.game.board.solved()) {
        /* Start animation */
        elements.board.addEventListener("animationend", uiAnimationEnd);
        elements.board.style.animation = "none";
        elements.board.offsetHeight; /* trigger reflow */
        elements.board.style.animation = "image-appear 0.5s ease-in 0.2s 1 reverse";
    }
}



/*****************************************************************************
 * Refresh board elements and check if game over
 *****************************************************************************/
function uiAnimationEnd(event) {
    event.stopPropagation();

    if (globals.game.level + 1 >= options.challenges.length) {
        /* Show game over modal */
        elements.gameOver.style.visibility = "visible";
        elements.board.style.visibility = "hidden";
    }

    gameStart(globals.game.level + 1); /* Start new level */

    return false;
}





//document.getElementById("debug-text").innerHTML = window.innerWidth;

