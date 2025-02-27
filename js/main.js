
/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const defaultChallenges = [
    {info: "INFO: V10-13-06-05-02 C00-00-36 D0000000000000 T000001 E043 S00.146 >6x6=4-122014211130001320232111011030103140 >6x6-FIN-ti-sep-le-kuu-ma-lei-ar-re-mmik-ti-ta-huol-as-ti-ki-sen-att-im-iha-jou-ko-it-oma-sti-il-aan-ll-ta-lu-tte-la-re-mpa-in-ke-ino"},
    {info: "INFO: V13-11-01-09-02 C00-22-36 D0100000000000 T000001 E079 S00.135 >6x6=4-301300101031303103210431113000104013 >6x6-FIN-ti-sep-le-kuu-ma-lei-ar-re-mmik-ti-ta-huol-as-ti-ki-sen-att-im-iha-jou-ko-it-oma-sti-il-aan-ll-ta-lu-tte-la-re-mpa-in-ke-ino"},
    {info: "INFO: V15-08-02-08-03 C02-13-34 D0012020001000 T000003 E062 S00.109 >6x6=4-113040300402033302110100400310003131 >6x6-FIN-ti-sep-le-kuu-ma-lei-ar-re-mmik-ti-ta-huol-as-ti-ki-sen-att-im-iha-jou-ko-it-oma-sti-il-aan-ll-ta-lu-tte-la-re-mpa-in-ke-ino"},
];


/*****************************************************************************
 * Parse URL options
 *****************************************************************************/
function parseOptions() {
    /* Get URL */
    const url = new URL(window.location.href);

    /* Level option */
    const levelOption = url.searchParams.get("level");
    if (levelOption == null) {
        /* Read from storage */
        options.level = JSON.parse(localStorage.getItem(globals.storage));
    } else {
        options.level = Number(levelOption - 1);
    }

    /* Challenge option */
    var challengeOption = url.searchParams.getAll("challenge");
    if (challengeOption.length == 0) {
        options.challenges = defaultChallenges;
    } else {
        if (challengeOption.length > 0) {
            options.challenges = [];
            for (let index = 0; index < challengeOption.length; index++) {
                /* Convert URL special characters */
                challengeOption[index] = challengeOption[index].replace("%3E",'>');

                /* Insert it to manual challenges table */
                options.challenges.push({info: challengeOption[index]});
            }

            /* Set manual challenges to be played */
            globals.storage = globals.storage + "-manual";
            options.level   = 0;
        }
    }
}


/*****************************************************************************
 * Modal window handling (Game over)
 *****************************************************************************/
function modalClick(event) {
    event.preventDefault();

    elements.gameOver.style.visibility = "hidden";
    elements.board.style.visibility    = "visible";

    gameStart(globals.game.level);
}

elements.gameOver.addEventListener("click",      modalClick);
elements.gameOver.addEventListener("touchend",   modalClick, {passive: true});


/*****************************************************************************
 * Game initialization
 *****************************************************************************/
function gameStart(level) {
    /* Check level value */
    if (level == undefined || level < 0) {
        level = 0;
    }

    if (level >= options.challenges.length) {
        level = options.challenges.length - 1;
    }

    /* Use predefined challenges */
    globals.game.init(level, options.challenges[level].info);

/* Debug text */
//document.getElementById("debug-text").innerHTML = options.challenges[level].info.split("#")[0];

    /* Save game point */
    localStorage.setItem(globals.storage, JSON.stringify(globals.game.level));

    /* Redraw UI */
    uiRedraw();
}


window.onload = function () {
    /* Parse options */
    parseOptions();

    /* Start game */
    globals.game = new Game();
    gameStart(options.level);

    /* Show window */
    document.getElementById("game-screen").style.visibility = "visible";
}



