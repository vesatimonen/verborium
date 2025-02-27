/*****************************************************************************
 * UI elements
 *****************************************************************************/
const gameScreen    = document.getElementById("game-screen");
const gameBoard     = document.getElementById("game-board");
const gameGrid      = document.getElementById("game-grid");
const gameOverModal = document.getElementById("game-over-modal");

/*****************************************************************************
 * Board size variables
 *****************************************************************************/
var gameGridCellSize;

/*****************************************************************************
 * Redraw buttons
 *****************************************************************************/
function uiButtonsRedraw(game) {
    if (game.moveHistory.length == 0) {
        buttonUndo.disabled = true;
    } else {
        buttonUndo.disabled = false;
    }

    if (game.level == 0 && game.moveHistory.length == 0) {
        buttonRestart.disabled = true;
    } else {
        buttonRestart.disabled = false;
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
                cell.style.background = "#67BFEC";
            } else {
                cell.style.background = "none";
            }

        }
    }
}


function uiElementsRedraw(board) {
    var canvas = document.getElementById('game-canvas');
    var canvasContext = canvas.getContext('2d');

    /* Set canvas size and clear it */
    const pixelRation = 2.0;
    canvas.width = gameGrid.clientWidth * pixelRation;
    canvas.height = gameGrid.clientHeight * pixelRation;
    canvasContext.scale(pixelRation, pixelRation);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    /* Draw dots */
    var dotRadius = 3;
    for (y = 0; y <= board.height; y++) {
        for (x = 0; x <= board.width; x++) {
            canvasContext.beginPath();
            canvasContext.arc(gameGridCellSize * x, gameGridCellSize * y, dotRadius, 0, 2 * Math.PI, false);
            canvasContext.fillStyle = "#202020";
            canvasContext.fill();
        }
    }

    /* Draw walls */
    var lineWidth = 3;
    canvasContext.beginPath();
    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = "#202020";

    /* Draw vertical walls */
    for (let x = 0; x < board.width + 1; x++) {
        for (let y = 0; y < board.height; y++) {
            if (board.getVerticalWall(x, y) > 0) {
                canvasContext.moveTo(gameGridCellSize * x, gameGridCellSize * y);
                canvasContext.lineTo(gameGridCellSize * x, gameGridCellSize * (y + 1));
            }
        }
    }

    /* Draw horizontal walls */
    for (let y = 0; y < board.height + 1; y++) {
        for (let x = 0; x < board.width; x++) {
            if (board.getHorizontalWall(x, y) > 0) {
                canvasContext.moveTo(gameGridCellSize * x, gameGridCellSize * y);
                canvasContext.lineTo(gameGridCellSize * (x + 1), gameGridCellSize * y);
            }
        }
    }

    canvasContext.stroke();
}

/*****************************************************************************
 * Setup board elements
 *****************************************************************************/
function uiBoardSetup(board) {

    /* Calculate board grid size */
    gameGridCellSize = Math.floor((gameScreen.clientWidth) / 9); /* 9 = Maximum board X-size */

    /* Clear elements in board */
    while (gameGrid.firstChild) {
        gameGrid.removeChild(gameGrid.firstChild);
    }

    /* Center the board */
    gameBoard.style.width = gameGridCellSize * board.width + "px";
    gameBoard.style.left  = Math.floor((gameGridCellSize * (9 - board.width)) / 2) + "px";

    /* Create grid and add cells */
    for (y = 0; y < board.height; y++) {
        /* Create row */
        let newRow = document.createElement("div");
        newRow.className = "grid-row";
        gameGrid.appendChild(newRow);

        for (x = 0; x < board.width; x++) {
            /* Create cell */
            let newCell = document.createElement("div");
            newCell.className    = "grid-cell";
            newCell.id           = "cell-" + x + "-" + y;

            newCell.style.width      = gameGridCellSize + "px";
            newCell.style.height     = gameGridCellSize + "px";
            newCell.style.lineHeight = gameGridCellSize + "px"; /* Center text vertically */
            newCell.style.textAlign  = "center";

            newRow.appendChild(newCell);
        }
    }
}


function uiGameRedraw() {
    /* Setup board elements */
    uiBoardSetup(globals.game.board);

    /* Redraw cells */
    uiCellsRedraw(globals.game.board);

    /* Redraw dots and walls */
    uiElementsRedraw(globals.game.board);

    /* Redraw info */
    uiInfoRedraw(globals.game);

    /* Redraw buttons */
    uiButtonsRedraw(globals.game);

    /* Check if end of level */
    if (globals.game.board.solved()) {
        /* Start animation */
        gameBoard.addEventListener("animationend", uiGridAnimationEnd);
        gameBoard.style.animation = "none";
        gameBoard.offsetHeight; /* trigger reflow */
        gameBoard.style.animation = "image-appear 0.5s ease-in 0.2s 1 reverse";
    }
}



/*****************************************************************************
 * Refresh board elements and check if game over
 *****************************************************************************/
function uiGridAnimationEnd(event) {
    event.stopPropagation();

    if (globals.game.level + 1 >= options.challenges.length) {
        /* Show game over modal */
        gameOverModal.style.visibility = "visible";
        gameBoard.style.visibility = "hidden";
    }

    gameStart(globals.game.level + 1); /* Start new level */

    return false;
}





//document.getElementById("debug-text").innerHTML = window.innerWidth;

