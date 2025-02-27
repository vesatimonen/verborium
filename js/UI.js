
// Get these from CSS
const colorSolved     = "#67BFEC";
const colorBorder     = "#202020";
const colorBackground = "#B0DDFF";



/*****************************************************************************
 * Calculate board grid size
 *****************************************************************************/
function uiBoardCellSize() {
    return Math.floor((elements.screen.clientWidth) / globals.boardMaxSize);
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
 * Redraw cell
 *****************************************************************************/
function uiCellsRedraw(board) {
    /* Redraw cell content */
    for (y = 0; y < board.height; y++) {
        for (x = 0; x < board.width; x++) {
            /* Get DOM element for counter */
            let cell = document.getElementById("cell-" + x + "-" + y);

            /* Set value on board */
            cell.innerHTML = board.values[x][y];

            /* Set background */
            if (board.resolved(x, y)) {
                cell.style.background = colorSolved;
            } else {
                cell.style.background = "none";
            }
        }
    }
}


function uiBoardRedraw(board) {
    const boardCanvas   = document.getElementById('game-canvas');
    const boardContext = boardCanvas.getContext('2d');

    /* Set canvas size and clear it */
    const pixelRation = 2.0;
    boardCanvas.width  = elements.grid.clientWidth * pixelRation;
    boardCanvas.height = elements.grid.clientHeight * pixelRation;
    boardContext.scale(pixelRation, pixelRation);
    boardContext.clearRect(0, 0, boardCanvas.width, boardCanvas.height);

    /* Get board cell size */
    const cellSize = uiBoardCellSize();


boardContext.beginPath();
boardContext.arc(150, 150, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
boardContext.strokeStyle = colorBorder;
boardContext.lineWidth = 5; // Line thickness
boardContext.lineCap     = "round";
boardContext.fillStyle   = "green";
boardContext.fill();

    /* Draw dots */
    var dotRadius = 3;
    for (y = 0; y <= board.height; y++) {
        for (x = 0; x <= board.width; x++) {
            boardContext.beginPath();
            boardContext.arc(cellSize * x, cellSize * y, dotRadius, 0, 2 * Math.PI, false);
            boardContext.fillStyle = colorBorder;
            boardContext.fill();
        }
    }

    /* Draw walls */
    var lineWidth = 3;
    boardContext.beginPath();
    boardContext.lineWidth = lineWidth;
    boardContext.strokeStyle = colorBorder;

    /* Draw vertical walls */
    for (let x = 0; x < board.width + 1; x++) {
        for (let y = 0; y < board.height; y++) {
            if (board.getVerticalWall(x, y) > 0) {
                boardContext.moveTo(cellSize * x, cellSize * y);
                boardContext.lineTo(cellSize * x, cellSize * (y + 1));
            }
        }
    }

    /* Draw horizontal walls */
    for (let y = 0; y < board.height + 1; y++) {
        for (let x = 0; x < board.width; x++) {
            if (board.getHorizontalWall(x, y) > 0) {
                boardContext.moveTo(cellSize * x, cellSize * y);
                boardContext.lineTo(cellSize * (x + 1), cellSize * y);
            }
        }
    }

    boardContext.stroke();
}

/*****************************************************************************
 * Setup board elements
 *****************************************************************************/
function uiBoardSetup(board) {

    /* Calculate board grid size */
    const cellSize = uiBoardCellSize();

    /* Clear elements in board */
    while (elements.grid.firstChild) {
        elements.grid.removeChild(elements.grid.firstChild);
    }

    /* Center the board */
    elements.board.style.width = cellSize * board.width + "px";
    elements.board.style.left  = Math.floor((cellSize * (9 - board.width)) / 2) + "px";

    /* Create grid and add cells */
    for (y = 0; y < board.height; y++) {
        /* Create row */
        let newRow = document.createElement("div");
        newRow.className = "grid-row";
        elements.grid.appendChild(newRow);

        for (x = 0; x < board.width; x++) {
            /* Create cell */
            let newCell = document.createElement("div");
            newCell.className    = "grid-cell";
            newCell.id           = "cell-" + x + "-" + y;

            newCell.style.width      = cellSize + "px";
            newCell.style.height     = cellSize + "px";
            newCell.style.lineHeight = cellSize + "px"; /* Center text vertically */
            newCell.style.textAlign  = "center";

            newRow.appendChild(newCell);
        }
    }
}


function uiRedraw() {
    /* Setup board elements */
    uiBoardSetup(globals.game.board);

    /* Redraw cells */
    uiCellsRedraw(globals.game.board);

    /* Redraw board */
    uiBoardRedraw(globals.game.board);

    /* Redraw info */
    uiInfoRedraw(globals.game);

    /* Redraw buttons */
    uiButtonsRedraw(globals.game);

    /* Check if end of level */
    if (globals.game.board.solved()) {
        /* Start animation */
        elements.board.addEventListener("animationend", uiGridAnimationEnd);
        elements.board.style.animation = "none";
        elements.board.offsetHeight; /* trigger reflow */
        elements.board.style.animation = "image-appear 0.5s ease-in 0.2s 1 reverse";
    }
}



/*****************************************************************************
 * Refresh board elements and check if game over
 *****************************************************************************/
function uiGridAnimationEnd(event) {
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

