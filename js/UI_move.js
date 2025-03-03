
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
    X = move.X;
    Y = move.Y;

    /* Closest wall */
    Xwall = Math.round(X);
    Ywall = Math.round(Y);

    /* Current cell */
    Xcell = Math.floor(X);
    Ycell = Math.floor(Y);

    /* Check limits */
    if (Ycell < 0 || Ycell >= globals.game.board.height ||
        Xcell < 0 || Xcell >= globals.game.board.width) {
        return false;
    }

    /* Direction from wall */
    Xdelta = Math.abs(X - Xwall);
    Ydelta = Math.abs(Y - Ywall);
    if (Xdelta < Ydelta) {
        if (Ydelta - Xdelta > 0.0) {
            /* Vertical wall */
            if (Xwall > 0 && Xwall < globals.game.board.width) {
//                globals.game.makeMove("vertical", Xwall, Ycell);
                uiRedraw();
            }
        }
    } else {
        if (Xdelta - Ydelta > 0.0) {
            /* Horizontal wall */
            if (Ywall > 0 && Ywall < globals.game.board.height) {
//                globals.game.makeMove("horizontal", Xcell, Ywall);
                uiRedraw();
            }
        }
    }
}

elements.board.addEventListener("click", uiClick, {passive: true});

if (false) {
elements.board.addEventListener("mouseup",    uiMouseUp);
elements.board.addEventListener("mouseleave", uiMouseUp);
elements.board.addEventListener("mousedown",  uiMouseDown);
elements.board.addEventListener("touchend",   uiMouseUp);
elements.board.addEventListener("touchstart", uiMouseDown, {passive: true});
}


