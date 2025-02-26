var gameOverModal = document.getElementById("game-over-modal");


/*****************************************************************************
 * Game levels
 *****************************************************************************/
var defaultChallengeSet = [
    {info: "INFO: V04-02-00-02-01 C00-00-06 D0000 T000001 E010 S00.000 >3x3=4-103130400"},
    {info: "INFO: V02-03-03-01-00 C00-00-06 D0000 T000001 E006 S00.026 >3x3=4-013012221"},
    {info: "INFO: V03-02-03-00-01 C00-00-06 D0000 T000001 E009 S00.000 >3x3=4-210210204"},

    {info: "INFO: V10-13-06-05-02 C00-00-36 D0000000000000 T000001 E043 S00.146 >6x6=4-122014211130001320232111011030103140"},
    {info: "INFO: V13-11-01-09-02 C00-22-36 D0100000000000 T000001 E079 S00.135 >6x6=4-301300101031303103210431113000104013"},
    {info: "INFO: V15-08-02-08-03 C02-13-34 D0012020001000 T000003 E062 S00.109 >6x6=4-113040300402033302110100400310003131"},
];


/*****************************************************************************
 * Parse URL options
 *****************************************************************************/
var storageName  = "verborium/game-level";
var gameChallenges   = defaultChallengeSet;
var gameLevel = 0;
const level = 7;
function parseOptions() {
    /* Get URL */
    const url = new URL(window.location.href);

    /* Level option */
    const levelOption = url.searchParams.get("level");
    if (levelOption == null) {
        /* Read from storage */
        gameLevel = JSON.parse(localStorage.getItem(storageName));
    } else {
        gameLevel = Number(levelOption - 1);
    }

    /* Challenge option */
    var challengeOption = url.searchParams.getAll("challenge");
    if (challengeOption == null) {
    } else {
        if (challengeOption.length > 0) {
            gameChallenges = [];
            for (let index = 0; index < challengeOption.length; index++) {
                /* Convert URL special characters */
                challengeOption[index] = challengeOption[index].replace("%3E",'>');

                /* Insert it to manual challenges table */
                gameChallenges.push({info: challengeOption[index]});
            }

            /* Set manual challenges to be played */
            storageName = storageName + "-manual";
            gameLevel   = 0;
        }
    }
}


/*****************************************************************************
 * Modal window handling (Game over)
 *****************************************************************************/
function modalClick(event) {
    event.preventDefault();

    gameOverModal.style.visibility = "hidden";
    gameBoard.style.visibility     = "visible";

    gameStart(game.level);
}

gameOverModal.addEventListener("click",      modalClick);
gameOverModal.addEventListener("touchend",   modalClick, {passive: true});


/*****************************************************************************
 * Game initialization
 *****************************************************************************/
function gameStart(level) {
    /* Check level value */
    if (level == undefined || level < 0) {
        level = 0;
    }

    if (level >= gameChallenges.length) {
        level = gameChallenges.length - 1;
    }

    /* Use predefined challenges */
    game.init(level, gameChallenges[level].info);

/* Debug text */
document.getElementById("debug-text").innerHTML = gameChallenges[level].info.split("#")[0];

    /* Save game point */
    localStorage.setItem(storageName, JSON.stringify(game.level));

    /* Setup board */
    uiBoardSetup(game.board);
}


var game = undefined;
window.onload = function () {
    /* Parse options */
    parseOptions();

    /* Start game */
    game = new Game();
    gameStart(gameLevel);

    /* Show window */
    document.getElementById("game-screen").style.visibility = "visible";
}



