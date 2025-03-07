const strorageName = "verborium/game-level";

/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const challengeSetFIN = [
    {info: "INFO: W05 R00000-01000 S0-1-2-2-0-0 T000039 >4x4-FIN-tus-koi-tar-oi-suus-li-dol-ke-ko-pak-mah-a-nen-lai-ma-suo"},
    {info: "INFO: W10 R00000-01000 S0-2-3-3-1-1 T000198 >6x6-FIN-nen-li-e-del-li-no-vä-del-lou-ta-nen-huo-sel-pa-ke-a-kit-mer-pi-rem-oi-vä-tä-nen-me-rik-nen-nen-to-köi-a-ka-lai-li-del-nä"},
    {info: "INFO: F02.0 W15(08.7) R09000-32000 P04.3 L0-2-4-3-3-1-1-1 T040752 >8x8-FIN-yä-vöit-e-äär-u-li-ru-tt-nt-ev-ahou-tua-u-a-t-aa-ä-ö-l-ua-p-a-s-skar-j-i-dä-t-hä-im-i-pata-ttaa-naru-hdy-kä-l-a-a-erat-rku-a-ttää-a-at-hd-a-kave-ki-nuo-l-mpp-e-t-l-real-ta-s-ai-u-i-lla-itua-iso"},
];

const challengeSetSWE = [
    {info: "INFO: W05(7.4) R00000-03000 P3.2 L0-2-1-1-1-0 T000070 >4x4-SWE-fr-ämst-ap-k-kong-ress-nt-tens-akt-u-a-e-ll-e-eleg-v"},
    {info: "INFO: W12(8.1) R00000-08000 P3.0 L0-5-3-3-1-0 T000148 >6x6-SWE-si-rt-ko-st-orh-et-kt-ig-on-ti-råd-jur-egud-herr-kons-truk-am-ma-br-edv-id-ing-aln-bet-ömt-kilt-rs-ka-isni-ng-ålig-särs-st-ac-dov-re"},
    {info: "INFO: W00(nan) R1000000-00000 Pnan L0-0-0-0-0-0 T000000 >8x8-SWE-st-at-er-re-rka-ve-lugn-kake-ad-ste-to-når-ti-ll-dl-em-ga-rå-terf-ef-nt-my-me-rekr-själ-äs-mat-re-nsli-ska-ing-yter-vkl-gr-ta-ge-ri-ng-sk-vä-ar-för-rän-tvil-en-sd-ag-ll-jör-gen-in-ling-ds-on-st-re-blek-na-il-civ-le-förd-riva-jk"},
];

const challengeSetDefault = challengeSetFIN;


/*****************************************************************************
 * Parse URL options
 *****************************************************************************/
function parseOptions() {
    /* Get URL */
    const url = new URL(window.location.href);

    /* Challenge set option */
    var setOption = url.searchParams.get("set");
    switch (setOption) {
        case "FIN":
            options.challenges = challengeSetFIN;
            globals.storage    = strorageName + "-FIN";
            break;
        case "SWE":
            options.challenges = challengeSetSWE;
            globals.storage    = strorageName + "-SWE";
            break;
        default:
            options.challenges = challengeSetDefault;
            globals.storage    = strorageName;
            break;
    }

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
            globals.storage = strorageName + "-manual";
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



