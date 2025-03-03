
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X, Y;

    switch (event.type) {
        case "click":
            X = event.clientX;
            Y = event.clientY;
            break;
        default:
            return undefined;
    }

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
function uiClick(event) {
    /* Get clock position */
    move = uiMovePosition(event);
    X = Math.floor(move.X);
    Y = Math.floor(move.Y);

    /* Check limits */
    if (Y < 0 || Y >= globals.game.board.height ||
        X < 0 || X >= globals.game.board.width) {

        return false;
    }

console.log(X, Y);

    /* Make move */
//    globals.game.makeMove("vertical", Xwall, Ycell);

    /* Redraw UI */
//    uiRedraw();
}




/*****************************************************************************
 * Register game board event handlers
 *****************************************************************************/
elements.board.addEventListener("click", uiClick, {passive: true});

if (false) {
elements.board.addEventListener("mouseup",    uiMouseUp);
elements.board.addEventListener("mouseleave", uiMouseUp);
elements.board.addEventListener("mousedown",  uiMouseDown);
elements.board.addEventListener("touchend",   uiMouseUp);
elements.board.addEventListener("touchstart", uiMouseDown, {passive: true});
}


