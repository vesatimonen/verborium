/*****************************************************************************
 * Button handlers
 *****************************************************************************/
function uiUndo(event) {
    /* Make undo if possible */
    globals.game.undoMove();
}

function uiRestart(event) {
    /* Undo all moves back */
    while (true) {
        if (globals.game.undoMove() == false) {
            break;
        }
    }

    /* Redraw UI */
    uiRedraw();

    return false;
}

var restartTimer;
function uiRestartMouseUp(event) {
    clearInterval(restartTimer);
    return false;
}

function uiRestartMouseDown(event) {
    restartTimer = setInterval(
                        function() {
                            if (globals.game.level == 0) {
                                clearInterval(restartTimer);
                            } else {
                                gameStart(globals.game.level - 1);
                            }
                        },
                        500);
    return false;
}



/*****************************************************************************
 * Register button event handlers
 *****************************************************************************/
/* UNDO */
elements.buttonUndo.addEventListener("click", uiUndo);

/* RESTART */
elements.buttonRestart.addEventListener("click",      uiRestart);
elements.buttonRestart.addEventListener("mouseup",    uiRestartMouseUp);
elements.buttonRestart.addEventListener("mouseleave", uiRestartMouseUp);
elements.buttonRestart.addEventListener("mousedown",  uiRestartMouseDown);
elements.buttonRestart.addEventListener("touchend",   uiRestartMouseUp);
elements.buttonRestart.addEventListener("touchstart", uiRestartMouseDown, {passive: true});

function preventZoom(event) {
    /* Disable double click zoom */
    event.preventDefault();
}

elements.screen.addEventListener("click", preventZoom);

