
/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const challengeSetFIN = [
    {info: "INFO: W05 R00000-01000 S0-1-2-2-0-0 T000039 >4x4-FIN-tus-koi-tar-oi-suus-li-dol-ke-ko-pak-mah-a-nen-lai-ma-suo"},
    {info: "INFO: W10 R00000-01000 S0-2-3-3-1-1 T000198 >6x6-FIN-nen-li-e-del-li-no-vä-del-lou-ta-nen-huo-sel-pa-ke-a-kit-mer-pi-rem-oi-vä-tä-nen-me-rik-nen-nen-to-köi-a-ka-lai-li-del-nä"},
    {info: "INFO: W26 R01000-04000 S0-18-5-2-1-0 T000294 >8x8-FIN-taa-da-oi-kart-taa-lä-nel-ken-lait-soi-keut-taa-kai-taa-haas-työs-na-ly-tää-kat-vaa-koo-teet-tää-a-työl-lis-taa-tää-ta-taa-polt-liit-tää-peit-syö-syyt-la-puol-juos-tää-ke-hu-dä-ha-tel-taa-ta-da-hy-a-ta-lu-mis-laa-lau-soi-mäh-tää-tää-kier-val-da-juo"},
];

const challengeSetSWE = [
    {info: "INFO: W05(7.4) R00000-03000 P3.2 L0-2-1-1-1-0 T000070 >4x4-SWE-fr-ämst-ap-k-kong-ress-nt-tens-akt-u-a-e-ll-e-eleg-v"},
];

const challengeSetDefault = challengeSetFIN;

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

    /* Challenge set option */
    var setOption = url.searchParams.get("set");
    switch (setOption) {
        case "FIN":
            options.challenges = challengeSetFIN;
            break;
        case "SWE":
            options.challenges = challengeSetSWE;
            break;
        default:
            options.challenges = challengeSetDefault;
            break;
    }

    /* Challenge option */
    var challengeOption = url.searchParams.getAll("challenge");
    if (challengeOption.length == 0) {
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



