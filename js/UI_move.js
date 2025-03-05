
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiEventPosition(event) {
    let X, Y;

    switch (event.type) {
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseleave":
            X = event.clientX;
            Y = event.clientY;
            break;
        case "touchstart":
        case "touchmove":
        case "touchend":
        case "touchcancel":
            /* Ignore if touched multiple fingers */
            if (event.targetTouches > 1) {
                return undefined;
            }

            X = event.touches[0].clientX;
            Y = event.touches[0].clientY;
            break;
        default:
            return undefined;
    }

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
let mouseDownStatus   = false;
let mouseDownPosition = undefined;

let cursorGridX = -1;
let cursorGridY = -1;

function cursorMoveHandler(event)
{
    /* Get cursor grid position */
    move = uiEventPosition(event);
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
    mouseDownStatus   = true;
    mouseDownPosition = uiEventPosition(event);

    cursorMoveHandler(event);

    return false;
}

function uiMouseUp(event) {
    mouseDownStatus = false;

    const position = uiEventPosition(event);
    if (mouseDownPosition != undefined
     && position != undefined
     && mouseDownPosition.X == position.X && mouseDownPosition.Y == position.Y) {
        /* Check if used */
        if (globals.game.board.getCellStatus(position.X, position.Y)) {
            /* Remove path */
            globals.game.removePath(position.X, position.Y, true);
        } else {
            /* Make move here */
            globals.game.addPath(globals.cursorPath, true);
        }

    } else {
        /* Make move */
        globals.game.addPath(globals.cursorPath, true);
    }

    mouseDownPosition = undefined;

    /* Remove cursor from board */
    cursorGridX = -1;
    cursorGridY = -1;

    /* Clear path */
    globals.cursorPath = [];

    /* Redraw UI */
    uiRedraw();

    return false;
}

function uiMouseMove(event) {
    if (mouseDownStatus) {
        cursorMoveHandler(event);
    }

    return false;
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


