var gameOverModal = document.getElementById("game-over-modal");


/*****************************************************************************
 * Game levels
 *****************************************************************************/
var defaultChallengeSet = [
    {info: "INFO: V04-02-00-02-01 C00-00-06 D0000 T000001 E010 S00.000 $3x3=4-103130400"},
    {info: "INFO: V02-03-03-01-00 C00-00-06 D0000 T000001 E006 S00.026 $3x3=4-013012221"},
    {info: "INFO: V03-02-03-00-01 C00-00-06 D0000 T000001 E009 S00.000 $3x3=4-210210204"},

    {info: "INFO: V10-13-06-05-02 C00-00-36 D0000000000000 T000001 E043 S00.146 $6x6=4-122014211130001320232111011030103140"},
    {info: "INFO: V13-11-01-09-02 C00-22-36 D0100000000000 T000001 E079 S00.135 $6x6=4-301300101031303103210431113000104013"},
    {info: "INFO: V15-08-02-08-03 C02-13-34 D0012020001000 T000003 E062 S00.109 $6x6=4-113040300402033302110100400310003131"},
];

var gameChallenges = defaultChallengeSet;

var manualChallenges = [];

/*****************************************************************************
 * Parse URL options
 *****************************************************************************/
var level_option = undefined;
var set_option   = undefined;
var storageName  = "verborium/game-level";
var level = 0;
function parseOptions() {
    let URL_option_string = window.location.href.split("?")[1];
    if (URL_option_string != undefined) {
        /* Convert URL special characters */
        URL_option_string = URL_option_string.replace("%24",'$').replace("%23",'#');

        var URL_options = URL_option_string.split("&");

        /* Go through options */
        for (let i = 0; i < URL_options.length; i++) {
            /* Level option */
            if (URL_options[i].match(/L[0-9]*$/) != null) {
                level_option = URL_options[i].split("L")[1];
            }

            /* Challenge set option */
            if (URL_options[i].match(/S[0-9]*$/) != null) {
                set_option = URL_options[i].split("S")[1];
            }

            if (URL_options[i].match(/#.*$/) != null) {
                level_option = 1;
                set_option   = "#";
                manualChallenges.push({info: URL_options[i]});

                /* Remove hash sign from URL */
                window.history.pushState({}, null, window.location.href.replace('#', '$'));
            }

            if (URL_options[i].match(/\$.*$/) != null) {
                level_option = 1;
                set_option   = "#";

                manualChallenges.push({info: URL_options[i].replace('$', '#')});
            }
        }
    }

    /* Option fallbacks */
    if (set_option == undefined || set_option == 0) {
        gameChallenges = defaultChallengeSet;
    } else {
        gameChallenges = manualChallenges;
        storageName    = storageName + "-#";
    }

    if (level_option == undefined) {
        /* Read from storage */
        level = JSON.parse(localStorage.getItem(storageName));
    } else {
        level = Number(level_option) - 1;
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
    gameStart(level);

    /* Show window */
    document.getElementById("game-screen").style.visibility = "visible";
}



