/*****************************************************************************
 * Game globals
 *****************************************************************************/
var globals = {
    game:     undefined,
    storage:  "verborium/game-level"
};

/*****************************************************************************
 * URL options
 *****************************************************************************/
var options = {
    challenges: [],
    level:      0
};

/*****************************************************************************
 * UI elements
 *****************************************************************************/
const elements = {
    screen:    document.getElementById("game-screen"),
    board:     document.getElementById("game-board"),
    grid:      document.getElementById("game-grid"),
    gameOver:  document.getElementById("game-over-modal")
};

