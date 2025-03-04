
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X = event.clientX;
    let Y = event.clientY;

    const rect = elements.canvas.getBoundingClientRect();
    X -= rect.left;
    Y -= rect.top;

    const cellSize = uiBoardCellSize();
    X = Math.floor(X / cellSize);
    Y = Math.floor(Y / cellSize);

    return {X, Y};
}


/*****************************************************************************
 * Event handlers
 *****************************************************************************/
let mouseIsDown  = false;
let mouseIsMoved = false;

let cursorGridX = -1;
let cursorGridY = -1;


function cursorClickHandler(event)
{
    /* Get cursor grid position */
    move = uiMovePosition(event);
    X = move.X;
    Y = move.Y;

    /* Check legality */
    if (X < 0 || Y < 0 || X >= globals.game.board.width || Y >= globals.game.board.height) {
        return;
    }

    /* Check if used */
    if (globals.game.board.getCellStatus(X, Y)) {
        /* Remove */
        console.log("remove");
    } else {
        console.log("move");
        /* Make move here */
        globals.game.makeMove(globals.cursorPath);
    }
}


function cursorMoveHandler(event)
{
    /* Get cursor grid position */
    move = uiMovePosition(event);
    X = move.X;
    Y = move.Y;

    /* Check legality */
    if (X < 0 || Y < 0 || X >= globals.game.board.width || Y >= globals.game.board.height) {
        return;
    }

    /* Check if moved */
    if (X == cursorGridX && Y == cursorGridY) {
        /* Not moved */
        return;
    }

    /* Check if touches the previous one */
    if (globals.cursorPath.length > 0) {
        const prevPosition = globals.cursorPath[globals.cursorPath.length - 1];
        if (Math.abs(X - prevPosition.X) + Math.abs(Y - prevPosition.Y) != 1) {
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
    if (globals.game.board.getCellStatus(X, Y)) {
        return;
    }

    /* Add position to cursor path */
    globals.cursorPath.push({X, Y});

//    console.log(globals.cursorPath);

    /* Redraw UI */
    uiRedraw();

    /* Cursor moved in grid */
    cursorGridX = X;
    cursorGridY = Y;

    return;
}


function uiMouseDown(event) {
    mouseIsDown  = true;
    mouseIsMoved = false;

    cursorMoveHandler(event);
}

function uiMouseUp(event) {
    mouseIsDown = false;

    if (mouseIsMoved == false) {
        /* Click */
        cursorClickHandler(event);
    } else {
        /* Make move */
        globals.game.makeMove(globals.cursorPath);
    }

    mouseIsMoved = false;

    /* Remove cursor from board */
    cursorGridX = -1;
    cursorGridY = -1;

    /* Clear path */
    globals.cursorPath = [];

    /* Redraw UI */
    uiRedraw();
}

function uiMouseMove(event) {
    mouseIsMoved = true;

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
elements.board.addEventListener("mouseleave", uiMouseUp);

elements.board.addEventListener("touchstart", uiMouseDown, {passive: true});
elements.board.addEventListener("touchmove",  uiMouseMove, {passive: true});
elements.board.addEventListener("touchend",   uiMouseUp);
// touchcancel
// touchmove


