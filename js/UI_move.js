
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

    /* Check if moved */
    if (X == cursorGridX && Y == cursorGridY) {
        /* Not moved */
        return;
    }

    /* Check if touches the previous one */
    if (globals.cursorPath.length > 0) {
        const prevPosition = globals.cursorPath[globals.cursorPath.length - 1];
        if (Math.abs(X - prevPosition.X) + Math.abs(Y - prevPosition.Y) != 2) {
            return;
        }
    }

    /* Check if backtrack */
    if (globals.cursorPath.length >= 2
     && globals.cursorPath[globals.cursorPath.length - 2].X == X
     && globals.cursorPath[globals.cursorPath.length - 2].Y == Y) {
        /* Remove two elements */
        globals.cursorPath.pop();
        globals.cursorPath.pop();
    }

    /* Check if collide with itself */
    for (let i = 0; i < globals.cursorPath.length; i++) {
        if (globals.cursorPath[i].X == X && globals.cursorPath[i].Y == Y) {
            return;
        }
    }

    /* Check if used */
    if (globals.game.board.isUsed(X, Y)) {
        return;
    }

    /* Add position to cursor path */
    globals.cursorPath.push({X, Y});

    console.log(globals.cursorPath);

    /* Redraw UI */
    uiRedraw();

    /* Cursor moved in grid */
    cursorGridX = X;
    cursorGridY = Y;

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


