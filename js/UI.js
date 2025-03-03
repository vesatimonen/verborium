
// Get these from CSS
const colorSolved     = "#67BFEC";
const colorBorder     = "#202020";
const colorBackground = "#B0DDFF";
const colorPath       = "#20202060";



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
 * Redraw cursor path
 *****************************************************************************/
function lineAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

function uiPathRedraw(path) {
    const boardContext = elements.canvas.getContext('2d');

    if (path.length == 0) {
        return;
    }

    const cellSize = uiBoardCellSize();

    /* Draw circle */
    let X = cellSize * path[0].X + cellSize / 2;
    let Y = cellSize * path[0].Y + cellSize / 2;
    boardContext.beginPath();
    boardContext.arc(X, Y, 5, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    boardContext.strokeStyle = colorPath
    boardContext.lineWidth   = cellSize / 4;
    boardContext.lineCap     = "round";
    boardContext.stroke();

    if (path.length <= 1) {
        return;
    }

    /* Draw path */
    boardContext.beginPath();
    for (let i = 0; i < path.length; i++) {
        let X = cellSize * path[i].X + cellSize / 2;
        let Y = cellSize * path[i].Y + cellSize / 2;

        if (i == 0) {
            /* Start polyline */
            boardContext.moveTo(X, Y);
        } else {
            const Xmiddle = cellSize * path[i - 1].X + cellSize / 2;
            const Ymiddle = cellSize * path[i - 1].Y + cellSize / 2;

            if (i >= 2) {
                const Xlast = cellSize * path[i - 2].X + cellSize / 2;
                const Ylast = cellSize * path[i - 2].Y + cellSize / 2;

                /* Calculate the angle of the line segment */
                const angle1 = lineAngle(Xlast, Ylast, Xmiddle, Ymiddle);
                const angle2 = lineAngle(Xmiddle, Ymiddle, X, Y);

                /* Check if we need a rounded corner */
                if (angle1 != angle2) {
                    // Calculate the position for the arc (corner of the polyline)
                    const radius = cellSize / 2;
                    const cornerX = (Xlast + X) / 2;
                    const cornerY = (Ylast + Y) / 2;

                    /* Circle center point distance from prev */
                    let angle_beta = Math.abs(angle2 - angle1);
                    while (angle_beta < 0) {
                        angle_beta += Math.PI;
                    }
                    while (angle_beta > Math.PI) {
                        angle_beta -= Math.PI;
                    }
                    angle_beta /= 2;

                    const distance = Math.abs(radius / Math.cos(angle_beta));
                    const angle_gamma = Math.PI / 2 + (angle1 + angle2) / 2;

    console.log("cellSize: " + cellSize);
    console.log("angle1: " + angle1 * 360 / (Math.PI * 2));
    console.log("angle2: " + angle2 * 360 / (Math.PI * 2));
    console.log("beta: " + angle_beta * 360 / (Math.PI * 2));
    console.log("gamma: " + angle_gamma * 360 / (Math.PI * 2));
    console.log("distance: " + distance);

    console.log("corner: ", cornerX, cornerY);

                    // Draw the arc (rounded corner) at the corner
//                    boardContext.arc(cornerX, cornerY, radius, angle1, angle2, false);
                    boardContext.arc(cornerX, cornerY, radius, Math.PI, 3 * Math.PI / 2, false);
                }
            }
        }
    }

    /* Close path with last */
    X = cellSize * path[path.length - 1].X + cellSize / 2;
    Y = cellSize * path[path.length - 1].Y + cellSize / 2;
    boardContext.lineTo(X, Y);

    boardContext.strokeStyle = colorPath
    boardContext.lineWidth   = cellSize / 8;
    boardContext.lineCap     = "round";
    boardContext.stroke();
}


/*****************************************************************************
 * Redraw UI
 *****************************************************************************/
function uiRedraw() {
    /* Redraw board */
    uiBoardRedraw(globals.game.board);

    /* Redraw path */
    uiPathRedraw(globals.cursorPath);

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

