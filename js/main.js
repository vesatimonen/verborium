const strorageName = "verborium/game-level";

/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const challengeSetFIN = [
    {info: "INFO: F02.1 W05(06.6) R00000-01000 P03.2 L0-2-1-1-1-0-0-0 T000078 >4x4-FIN-lu-pa-a-tu-a-lu-e-lis-pak-te-lu-sal-ko-kus-kes-o"},
    {info: "INFO: F02.2 W05(07.2) R00000-02000 P03.2 L0-2-1-1-1-0-0-0 T000753 >4x4-FIN-ja-tus-hoi-ra-li-ke-pis-o-ra-ri-te-at-her-to-tai-te"},
    {info: "INFO: F02.5 W06(10.5) R00000-02000 P04.2 L0-1-0-2-3-0-0-0 T000581 >5x5-FIN-ja-ta-men-val-nen-nen-vi-tii-ra-toi-kar-po-si-vin-kiin-hu-aa-li-to-len-so-si-nen-la-mie"},
    {info: "INFO: F02.1 W06(08.7) R02000-04000 P04.2 L0-0-2-2-1-1-0-0 T000740 >5x5-FIN-di-vi-nen-ki-ar-rek-tii-si-a-a-ri-o-al-si-to-to-la-li-mi-tui-ra-bo-nen-o-nen"},

    {info: "INFO: F01.7 W05(08.6) R02000-04000 P05.0 L0-1-1-0-0-1-2-0 T002833 >5x5-FIN-aaja-al-r-ok-i-seur-a-in-vu-n-a-il-en-o-n-s-t-tu-s-k-s-o-s-nta-arsi"},
    {info: "INFO: F01.8 W06(07.3) R01000-04000 P04.2 L0-1-1-2-1-0-1-0 T004452 >5x5-FIN-staa-s-ä-k-ä-o-ei-st-ntyä-ä-kunn-i-t-u-a-a-s-o-ut-llä-t-ala-a-m-kyse"},
    {info: "INFO: F01.9 W06(08.0) R01000-04000 P04.2 L0-1-1-1-2-1-0-0 T001031 >5x5-FIN-t-mie-le-t-uhk-yhjä-s-käsi-ön-a-k-a-ttä-mä-ava-ai-n-i-tö-n-r-en-a-rov-va"},
    {info: "INFO: F01.2 W04(07.5) R01000-04000 P06.2 L0-0-0-0-1-2-0-1 T004937 >5x5-FIN-a-n-tai-a-l-u-ta-t-u-a-a-a-t-ta-p-l-ol-e-a-y-s-y-e-p-l"},

    {info: "INFO: F01.8 W09(07.2) R02000-04000 P04.0 L0-1-3-3-0-1-1-0 T086565 >6x6-FIN-s-akti-o-keri-so-n-ma-re-j-nila-in-e-r-a-a-pa-ikko-k-t-a-s-poli-it-ah-to-k-iv-i-ys-vi-a-n-vii-s-t-la"},
    {info: "INFO: F01.8 W09(07.2) R01000-03000 P04.0 L0-0-5-2-0-1-1-0 T067327 >6x6-FIN-llä-e-l-e-h-alu-tää-kys-la-st-ai-t-is-e-l-lä-t-a-i-n-n-ske-työ-hi-k-ede-t-ä-v-da-l-yöd-ä-rata-a-staa"},
    {info: "INFO: F02.1 W09(08.4) R01000-04000 P04.0 L0-1-2-3-2-1-0-0 T008346 >6x6-FIN-a-ut-tt-ava-hu-i-o-i-a-ii-l-kea-kin-lain-nn-alli-m-ä-jon-en-ka-nen-k-r-nen-py-h-ä-ä-edus-elli-s-k-kkeu-poi-tava"},
    {info: "INFO: F01.6 W08(07.4) R01000-04000 P04.5 L0-0-2-3-2-0-0-1 T023185 >6x6-FIN-a-n-y-hiih-tä-ä-ta-sai-l-is-oton-hd-uu-n-tau-tä-ä-a-s-so-s-a-k-m-pu-k-aa-s-s-u-ke-utua-l-v-a-t"},

    {info: "INFO: F01.7 W08(07.8) R02000-08000 P04.5 L0-0-3-1-2-1-1-0 T025543 >6x6-FIN-e-t-in-v-aa-i-nsi-tö-p-lam-kuna-k-t-ään-i-u-us-k-ee-s-s-k-v-lei-tti-ais-uu-mak-oi-s-o-m-l-ä-h-ety"},
    {info: "INFO: F01.8 W08(07.9) R02000-07000 P04.5 L0-0-2-3-2-0-0-1 T017494 >6x6-FIN-l-ihde-va-su-ä-t-l-mat-k-o-s-e-a-a-i-taa-i-ky-h-e-hku-t-t-taa-heu-t-a-maht-el-nis-ai-ua-a-a-l-suun"},
    {info: "INFO: F01.8 W08(08.1) R03000-08000 P04.5 L0-0-4-1-1-0-1-1 T007302 >6x6-FIN-va-t-a-va-tön-tämä-ll-t-h-ka-ava-väis-o-i-u-väli-ll-inen-l-ai-o-ve-l-a-k-s-ä-la-l-aj-a-ri-pe-nen-i-r"},
    {info: "INFO: F01.6 W07(08.3) R02000-08000 P05.1 L0-0-2-1-0-2-2-0 T044654 >6x6-FIN-a-i-d-o-n-ine-usk-ar-m-l-e-na-o-k-kina-n-m-a-l-l-in-e-ha-j-oi-t-on-m-re-unu-da-ää-tt-väsy-v-a"},

    {info: "INFO: F01.9 W11(08.3) R02000-08000 P04.5 L0-1-4-1-2-1-1-1 T010731 >7x7-FIN-e-ttu-u-ä-ij-s-k-a-a-l-i-a-fra-e-s-s-keu-p-p-asi-k-v-a-l-am-k-ärs-imys-us-tust-vas-k-mys-sy-vä-aili-virk-t-es-v-itte-lij-ja-ti-oin-i-n-vä-ä"},
    {info: "INFO: F01.8 W12(07.5) R02000-08000 P04.1 L0-1-2-4-5-0-0-0 T137679 >7x7-FIN-tä-i-va-p-ri-aa-tt-l-l-llo-us-t-aa-ostu-hi-tta-i-i-tk-eä-erm-e-a-ih-a-i-lla-h-d-taa-sata-ltää-i-ki-v-e-is-ta-is-ta-a-ä-tä-al-v-tu-t-tää-is"},
    {info: "INFO: F01.9 W12(07.8) R02000-08000 P04.1 L0-2-3-3-1-2-1-0 T170892 >7x7-FIN-evä-en-a-s-arvo-a-e-vas-m-vo-i-ton-kan-k-kii-ra-i-ton-a-a-l-t-ä-väl-s-uunn-h-l-ys-vi-l-inen-tu-t-i-jä-ä-ro-i-s-k-kuin-n-ne-eräi-en-kesk-pi-en"},
    {info: "INFO: F01.9 W11(08.4) R03000-07000 P04.5 L0-2-2-3-1-1-0-2 T010318 >7x7-FIN-a-vo-it-a-a-alt-oiv-sti-ra-t-vi-r-t-t-aton-m-a-ruko-taus-i-a-et-y-s-illa-i-t-a-jais-y-j-taks-s-aa-t-a-haut-ä-i-kyy-s-ruut-y-ri-tt-it-sek-p-e"},

    {info: "INFO: F01.8 W11(08.2) R04000-16000 P04.5 L0-0-5-2-0-2-2-0 T003309 >7x7-FIN-eikk-l-t-s-s-i-ol-uri-s-u-ra-fy-yys-og-a-v-u-u-a-nikk-ia-kuus-s-ha-pyj-am-sin-s-intä-u-hmot-t-mä-ti-i-st-ani-a-urb-y-t-t-vie-es-i-in-t-a-a"},
    {info: "INFO: F02.0 W12(08.2) R06000-16000 P04.1 L0-1-4-4-1-1-0-1 T041547 >7x7-FIN-iil-k-r-u-h-lla-aste-lo-ttaa-ist-a-ku-s-heij-tua-n-a-vilk-par-y-y-vaki-i-a-as-tut-e-t-a-ta-m-uo-taa-l-tä-m-is-a-vat-ä-l-s-so-su-o-da-käte-llä-täri"},
    {info: "INFO: F02.3 W12(09.3) R04000-15000 P04.1 L0-2-0-7-2-0-1-0 T002093 >7x7-FIN-s-t-oiv-ott-u-at-j-pon-inen-ima-oott-idi-on-poh-t-a-lias-arme-h-ede-as-n-a-ti-lis-popu-l-ik-i-n-ne-met-tine-mäll-lm-o-dott-amat-sa-n-inen-ku-roos-a-on-a-mer-o-t"},
    {info: "INFO: F01.9 W11(08.5) R04000-15000 P04.5 L0-0-3-4-1-2-1-0 T009873 >7x7-FIN-p-k-e-skik-o-h-ta-a-astr-ö-ö-i-ur-kirj-ne-o-nau-j-l-a-j-e-li-tti-m-i-a-aj-ta-ntti-i-n-a-a-s-adju-oks-idi-imu-r-oi-a-hiil-idi-saka-rist-o-nti-f"},

    {info: "INFO: F02.1 W17(07.8) R04000-15000 P03.8 L0-2-8-3-1-2-1-0 T022691 >8x8-FIN-r-os-tti-v-suus-oogi-h-ire-hö-vo-e-älit-ys-l-töö-t-y-r-etik-t-ömy-o-r-i-h-iisi-ora-p-sa-nk-lii-t-en-s-n-ar-ve-l-u-u-l-u-i-pi-i-ts-etti-läs-i-j-e-ep-ja-oloi-läh-yys-ini-alu-miin-i-rav-int-rii-ttäv"},
    {info: "INFO: F01.9 W14(08.6) R05000-16000 P04.6 L0-2-2-3-1-5-1-0 T157447 >8x8-FIN-i-h-s-ta-p-yör-lkoi-l-n-eur-a-a-ä-istä-u-ut-k-t-i-k-ä-ä-l-taa-u-a-tä-ö-y-s-ellä-st-kado-ttaa-ku-k-a-a-ltyä-ieli-ua-ott-r-s-y-t-sisä-m-taa-inn-a-t-ä-vah-a-k-t-u-hu-vite-lla-itua-mio-naa"},
    {info: "INFO: F02.0 W15(08.5) R04000-16000 P04.3 L0-2-4-2-4-2-0-1 T252235 >8x8-FIN-ll-ha-s-y-k-inen-eell-aatt-in-ma-inei-kas-l-a-v-e-noll-inen-iili-stab-i-s-r-t-u-p-n-e-n-tas-i-n-t-l-a-l-l-ä-ä-po-siv-ull-inen-peto-i-nen-n-il-v-e-il-aton-pohj-n-etö-oto-a-t-unke-a-tav-s-haa-n"},
    {info: "INFO: F02.0 W16(08.2) R05000-16000 P04.0 L0-2-5-4-2-2-1-0 T019296 >8x8-FIN-vene-i-llä-igm-d-a-r-pa-tää-dyt-h-a-lo-kk-htua-ila-t-y-re-ä-ä-i-a-p-ö-k-öt-t-p-yssy-pp-i-j-ton-tty-e-k-psyy-ttaa-la-mili-ee-ä-jähm-e-ulko-ilu-pä-i-katt-tava-stet-s-äy-v-i-s-i-r-aka-hor-juma-to-n"},
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



