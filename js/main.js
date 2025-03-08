const strorageName = "verborium/game-level";

/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const challengeSetFIN = [
    {info: "INFO: F02.1 W05(06.6) R00000-01000 P03.2 L0-2-1-1-1-0-0-0 T000078 >4x4-FIN-lu-pa-a-tu-a-lu-e-lis-pak-te-lu-sal-ko-kus-kes-o"},
    {info: "INFO: F02.2 W05(07.2) R00000-02000 P03.2 L0-2-1-1-1-0-0-0 T000753 >4x4-FIN-ja-tus-hoi-ra-li-ke-pis-o-ra-ri-te-at-her-to-tai-te"},
    {info: "INFO: F02.5 W06(10.5) R00000-02000 P04.2 L0-1-0-2-3-0-0-0 T000581 >5x5-FIN-ja-ta-men-val-nen-nen-vi-tii-ra-toi-kar-po-si-vin-kiin-hu-aa-li-to-len-so-si-nen-la-mie"},
    {info: "INFO: F02.1 W06(08.7) R02000-04000 P04.2 L0-0-2-2-1-1-0-0 T000740 >5x5-FIN-di-vi-nen-ki-ar-rek-tii-si-a-a-ri-o-al-si-to-to-la-li-mi-tui-ra-bo-nen-o-nen"},

    {info: "INFO: F01.1 W04(07.0) R01000-04000 P06.2 L0-0-0-0-1-2-0-1 T000986 >5x5-FIN-i-t-i-aal-f-p-u-u-n-i-s-a-s-a-t-t-rr-a-a-k-u-s-h-a-k"},
    {info: "INFO: F01.3 W05(06.6) R01000-04000 P05.0 L0-0-0-2-1-2-0-0 T001453 >5x5-FIN-ttaa-aa-st-udi-u-i-s-ra-ä-y-i-a-ä-ä-t-l-l-p-a-t-s-a-e-r-o"},
    {info: "INFO: F01.6 W05(07.8) R01000-02000 P05.0 L0-0-2-0-0-2-1-0 T002642 >5x5-FIN-ta-is-o-l-k-v-u-l-u-u-a-i-te-n-na-ätty-sa-r-e-in-är-mä-ve-ol-en"},
    {info: "INFO: F01.2 W04(07.5) R01000-04000 P06.2 L0-0-0-0-1-2-0-1 T004937 >5x5-FIN-a-n-tai-a-l-u-ta-t-u-a-a-a-t-ta-p-l-ol-e-a-y-s-y-e-p-l"},


    {info: "INFO: W10 R00000-01000 S0-2-3-3-1-1 T000198 >6x6-FIN-nen-li-e-del-li-no-vä-del-lou-ta-nen-huo-sel-pa-ke-a-kit-mer-pi-rem-oi-vä-tä-nen-me-rik-nen-nen-to-köi-a-ka-lai-li-del-nä"},
    {info: "INFO: F02.0 W15(08.7) R09000-32000 P04.3 L0-2-4-3-3-1-1-1 T040752 >8x8-FIN-yä-vöit-e-äär-u-li-ru-tt-nt-ev-ahou-tua-u-a-t-aa-ä-ö-l-ua-p-a-s-skar-j-i-dä-t-hä-im-i-pata-ttaa-naru-hdy-kä-l-a-a-erat-rku-a-ttää-a-at-hd-a-kave-ki-nuo-l-mpp-e-t-l-real-ta-s-ai-u-i-lla-itua-iso"},
    {info: "INFO: F02.3 W17(08.7) R10000-32000 P03.8 L0-3-6-4-1-2-1-0 T297425 >8x8-FIN-ti-he-syys-äi-i-s-ee-ihi-dais-r-ä-nn-konk-elo-k-ri-da-p-alo-ssi-li-ku-o-r-nen-r-ka-ette-ais-u-de-i-kiai-syys-i-ring-rank-ho-i-ti-lais-k-äne-am-s-ot-sik-oin-a-ast-jä-e-u-s-h-irv-nja-jäl-keen-rkki-astu-lamm-tys-es"},
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



