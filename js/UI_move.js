
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
    X = Math.floor(move.X);
    Y = Math.floor(move.Y);

    if (X == cursorGridX && Y == cursorGridY) {
        /* Not moved */
        return;
    }

    /* Cursor moved in grid */
    cursorGridX = X;
    cursorGridY = Y;
    console.log("Cursor moved: " + X + Y);

    /* Set path */

/* Next to previous one */
/* Free on board */
/* Not touch same */
/* Backtrack */

    /* Add position to cursor path */
    globals.cursorPath.push({X, Y});

    console.log(globals.cursorPath);

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

    /* Remove cursor */
    cursorGridX = -1;
    cursorGridY = -1;

    /* Make move */

    /* Clear path */
    globals.cursorPath = [];

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


