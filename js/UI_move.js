
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X = event.clientX;
    let Y = event.clientY;

    const rect     = elements.canvas.getBoundingClientRect();
    const cellSize = uiBoardCellSize();
    X -= rect.left;
    Y -= rect.top;
    X = X / cellSize;
    Y = Y / cellSize;

    return {X, Y};
}


/*****************************************************************************
 * Event handlers
 *****************************************************************************/
let cursorGridX = -1;
let cursorGridY = -1;
function cursorMoveHandler(event)
{
    /* Get cursor grid position */
    move = uiMovePosition(event);
    gridX = Math.floor(move.X);
    gridY = Math.floor(move.Y);

    if (gridX == cursorGridX && gridY == cursorGridY) {
        /* Not moved */
        return;
    }

    /* Cursor moved in grid */
    cursorGridX = gridX;
    cursorGridY = gridY;
    console.log("Cursor moved: " + gridX + gridY);

    /* Set path */
//    globals.game.makeMove("vertical", Xwall, Ycell);

    /* Redraw UI */
//    uiRedraw();

    return;
}


let mouseIsDown = false;
function uiMouseDown(event) {
    mouseIsDown = true;

    cursorMoveHandler(event);
}

function uiMouseUp(event) {
    mouseIsDown = false;

    cursorGridX = -1;
    cursorGridY = -1;

    /* Remove path */
//    globals.game.makeMove("vertical", Xwall, Ycell);

    /* Make move */

    /* Redraw UI */
//    uiRedraw();
}

function uiMouseMove(event) {
    if (mouseIsDown) {
        cursorMoveHandler(event);
    }
}


/*****************************************************************************
 * Register game board event handlers
 *****************************************************************************/
elements.board.addEventListener("mousedown",  uiMouseDown);
elements.board.addEventListener("mousemove",  uiMouseMove);
elements.board.addEventListener("mouseup",    uiMouseUp);

elements.board.addEventListener("touchstart", uiMouseDown, {passive: true});
elements.board.addEventListener("touchend",   uiMouseUp);


