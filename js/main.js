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

/*
    {info: "INFO: F01.7 W08(07.8) R02000-08000 P04.5 L0-0-3-1-2-1-1-0 T025543 >6x6-FIN-e-t-in-v-aa-i-nsi-tö-p-lam-kuna-k-t-ään-i-u-us-k-ee-s-s-k-v-lei-tti-ais-uu-mak-oi-s-o-m-l-ä-h-ety"},
    {info: "INFO: F01.8 W08(07.9) R02000-07000 P04.5 L0-0-2-3-2-0-0-1 T017494 >6x6-FIN-l-ihde-va-su-ä-t-l-mat-k-o-s-e-a-a-i-taa-i-ky-h-e-hku-t-t-taa-heu-t-a-maht-el-nis-ai-ua-a-a-l-suun"},
    {info: "INFO: F01.8 W08(08.1) R03000-08000 P04.5 L0-0-4-1-1-0-1-1 T007302 >6x6-FIN-va-t-a-va-tön-tämä-ll-t-h-ka-ava-väis-o-i-u-väli-ll-inen-l-ai-o-ve-l-a-k-s-ä-la-l-aj-a-ri-pe-nen-i-r"},
    {info: "INFO: F01.6 W07(08.3) R02000-08000 P05.1 L0-0-2-1-0-2-2-0 T044654 >6x6-FIN-a-i-d-o-n-ine-usk-ar-m-l-e-na-o-k-kina-n-m-a-l-l-in-e-ha-j-oi-t-on-m-re-unu-da-ää-tt-väsy-v-a"},
*/

    {info: "INFO: F01.9 W11(08.3) R02000-08000 P04.5 L0-1-4-1-2-1-1-1 T010731 >7x7-FIN-e-ttu-u-ä-ij-s-k-a-a-l-i-a-fra-e-s-s-keu-p-p-asi-k-v-a-l-am-k-ärs-imys-us-tust-vas-k-mys-sy-vä-aili-virk-t-es-v-itte-lij-ja-ti-oin-i-n-vä-ä"},
    {info: "INFO: F01.8 W12(07.5) R02000-08000 P04.1 L0-1-2-4-5-0-0-0 T137679 >7x7-FIN-tä-i-va-p-ri-aa-tt-l-l-llo-us-t-aa-ostu-hi-tta-i-i-tk-eä-erm-e-a-ih-a-i-lla-h-d-taa-sata-ltää-i-ki-v-e-is-ta-is-ta-a-ä-tä-al-v-tu-t-tää-is"},
    {info: "INFO: F01.9 W12(07.8) R02000-08000 P04.1 L0-2-3-3-1-2-1-0 T170892 >7x7-FIN-evä-en-a-s-arvo-a-e-vas-m-vo-i-ton-kan-k-kii-ra-i-ton-a-a-l-t-ä-väl-s-uunn-h-l-ys-vi-l-inen-tu-t-i-jä-ä-ro-i-s-k-kuin-n-ne-eräi-en-kesk-pi-en"},
    {info: "INFO: F01.9 W11(08.4) R03000-07000 P04.5 L0-2-2-3-1-1-0-2 T010318 >7x7-FIN-a-vo-it-a-a-alt-oiv-sti-ra-t-vi-r-t-t-aton-m-a-ruko-taus-i-a-et-y-s-illa-i-t-a-jais-y-j-taks-s-aa-t-a-haut-ä-i-kyy-s-ruut-y-ri-tt-it-sek-p-e"},

/*
    {info: "INFO: F01.8 W11(08.2) R04000-16000 P04.5 L0-0-5-2-0-2-2-0 T003309 >7x7-FIN-eikk-l-t-s-s-i-ol-uri-s-u-ra-fy-yys-og-a-v-u-u-a-nikk-ia-kuus-s-ha-pyj-am-sin-s-intä-u-hmot-t-mä-ti-i-st-ani-a-urb-y-t-t-vie-es-i-in-t-a-a"},
    {info: "INFO: F02.0 W12(08.2) R06000-16000 P04.1 L0-1-4-4-1-1-0-1 T041547 >7x7-FIN-iil-k-r-u-h-lla-aste-lo-ttaa-ist-a-ku-s-heij-tua-n-a-vilk-par-y-y-vaki-i-a-as-tut-e-t-a-ta-m-uo-taa-l-tä-m-is-a-vat-ä-l-s-so-su-o-da-käte-llä-täri"},
    {info: "INFO: F02.3 W12(09.3) R04000-15000 P04.1 L0-2-0-7-2-0-1-0 T002093 >7x7-FIN-s-t-oiv-ott-u-at-j-pon-inen-ima-oott-idi-on-poh-t-a-lias-arme-h-ede-as-n-a-ti-lis-popu-l-ik-i-n-ne-met-tine-mäll-lm-o-dott-amat-sa-n-inen-ku-roos-a-on-a-mer-o-t"},
    {info: "INFO: F01.9 W11(08.5) R04000-15000 P04.5 L0-0-3-4-1-2-1-0 T009873 >7x7-FIN-p-k-e-skik-o-h-ta-a-astr-ö-ö-i-ur-kirj-ne-o-nau-j-l-a-j-e-li-tti-m-i-a-aj-ta-ntti-i-n-a-a-s-adju-oks-idi-imu-r-oi-a-hiil-idi-saka-rist-o-nti-f"},
*/

    {info: "INFO: F02.1 W17(07.8) R04000-15000 P03.8 L0-2-8-3-1-2-1-0 T022691 >8x8-FIN-r-os-tti-v-suus-oogi-h-ire-hö-vo-e-älit-ys-l-töö-t-y-r-etik-t-ömy-o-r-i-h-iisi-ora-p-sa-nk-lii-t-en-s-n-ar-ve-l-u-u-l-u-i-pi-i-ts-etti-läs-i-j-e-ep-ja-oloi-läh-yys-ini-alu-miin-i-rav-int-rii-ttäv"},
    {info: "INFO: F01.9 W14(08.6) R05000-16000 P04.6 L0-2-2-3-1-5-1-0 T157447 >8x8-FIN-i-h-s-ta-p-yör-lkoi-l-n-eur-a-a-ä-istä-u-ut-k-t-i-k-ä-ä-l-taa-u-a-tä-ö-y-s-ellä-st-kado-ttaa-ku-k-a-a-ltyä-ieli-ua-ott-r-s-y-t-sisä-m-taa-inn-a-t-ä-vah-a-k-t-u-hu-vite-lla-itua-mio-naa"},
    {info: "INFO: F02.0 W15(08.5) R04000-16000 P04.3 L0-2-4-2-4-2-0-1 T252235 >8x8-FIN-ll-ha-s-y-k-inen-eell-aatt-in-ma-inei-kas-l-a-v-e-noll-inen-iili-stab-i-s-r-t-u-p-n-e-n-tas-i-n-t-l-a-l-l-ä-ä-po-siv-ull-inen-peto-i-nen-n-il-v-e-il-aton-pohj-n-etö-oto-a-t-unke-a-tav-s-haa-n"},
    {info: "INFO: F02.0 W16(08.2) R05000-16000 P04.0 L0-2-5-4-2-2-1-0 T019296 >8x8-FIN-vene-i-llä-igm-d-a-r-pa-tää-dyt-h-a-lo-kk-htua-ila-t-y-re-ä-ä-i-a-p-ö-k-öt-t-p-yssy-pp-i-j-ton-tty-e-k-psyy-ttaa-la-mili-ee-ä-jähm-e-ulko-ilu-pä-i-katt-tava-stet-s-äy-v-i-s-i-r-aka-hor-juma-to-n"},
];

const challengeSetSWE = [
    {info: "INFO: F02.4 W04(09.5) R00000-02000 P04.0 L0-0-1-2-1-0-0-0 T000069 >4x4-SWE-mar-be-mok-ra-sa-te-de-ti-la-re-kom-mu-pe-des-skå-nal"},
    {info: "INFO: F02.4 W04(09.5) R01000-02000 P04.0 L0-0-1-2-1-0-0-0 T000476 >4x4-SWE-kon-kur-re-fö-ra-re-ta-re-fö-jäm-ga-ga-rel-se-re-åkla"},
    {info: "INFO: F02.5 W06(10.3) R00000-02000 P04.2 L0-0-1-3-2-0-0-0 T001034 >5x5-SWE-de-mok-ra-tisk-fäng-ga-re-rep-re-el-ta-re-te-sen-se-nell-fö-ra-ri-tet-tio-di-tra-jo-ma"},
    {info: "INFO: F02.8 W07(09.9) R01000-04000 P03.6 L0-0-4-2-1-0-0-0 T000985 >5x5-SWE-rium-na-fint-lig-för-se-mi-be-ning-läng-ning-re-tag-re-nent-mord-ga-fö-fö-ti-sa-ta-re-små-kon"},

    {info: "INFO: F02.0 W05(09.8) R01000-04000 P05.0 L0-0-2-0-1-1-0-1 T003567 >5x5-SWE-s-n-e-t-s-el-t-e-x-i-d-a-gare-k-bor-ghet-ändi-omst-o-gmäs-ent-m-u-ns-tare"},
    {info: "INFO: F02.0 W06(08.2) R01000-04000 P04.2 L0-0-3-1-1-0-1-0 T000992 >5x5-SWE-k-i-ne-mna-ra-om-b-r-ko-e-ga-g-a-väl-mul-fö-reli-a-yg-or-ra-lice-pub-sm-f"},
    {info: "INFO: F01.6 W05(07.8) R01000-04000 P05.0 L0-0-1-1-2-0-0-1 T008783 >5x5-SWE-uk-en-tl-k-om-j-eg-i-g-p-m-u-kal-i-e-n-ppe-isk-mus-t-b-ar-t-n-e"},
    {info: "INFO: F01.7 W05(08.4) R01000-03000 P05.0 L0-0-1-1-2-0-0-1 T080638 >5x5-SWE-else-nd-bi-or-o-ng-f-ör-k-a-ni-nd-bla-op-p-o-i-ut-l-lin-n-r-ev-o-g"},

    {info: "INFO: F01.9 W07(09.6) R01000-04000 P05.1 L0-0-1-2-2-0-1-1 T015296 >6x6-SWE-ll-nin-s-t-a-t-hy-g-d-å-r-s-nt-me-u-kla-ter-is-n-inst-r-rt-ecke-rmin-uti-ratm-d-kva-n-u-r-et-er-k-ul-t"},
    {info: "INFO: F01.6 W07(08.1) R01000-04000 P05.1 L0-1-0-2-1-1-1-1 T134802 >6x6-SWE-s-a-r-de-o-l-t-r-a-f-a-p-t-in-a-f-hys-x-r-a-t-ruk-ö-e-od-rep-res-f-ve-rle-uce-ra-ent-era-a-v"},
    {info: "INFO: F01.3 W07(06.7) R01000-04000 P05.1 L0-0-0-3-1-2-1-0 T653540 >6x6-SWE-v-k-a-t-d-j-i-k-ls-o-v-är-ns-ig-l-g-l-y-e-t-tag-li-k-c-i-n-å-p-g-tra-r-te-s-dy-i-s"},
    {info: "INFO: F01.8 W09(07.0) R01000-04000 P04.0 L0-1-4-2-0-0-2-0 T023934 >6x6-SWE-ö-n-t-sva-up-pr-våa-s-o-ri-r-o-t-k-m-g-het-sv-ang-em-å-o-visi-älj-rep-a-l-n-ma-a-p-er-t-exis-ts-al"},

    {info: "INFO: F02.0 W11(09.0) R02000-08000 P04.5 L0-2-2-1-3-1-2-0 T123531 >7x7-SWE-kv-it-t-eri-ro-m-r-amn-ent-pres-ng-idst-t-o-mekn-h-ist-ram-t-cep-f-s-r-o-f-ko-n-i-k-i-sk-t-n-la-un-er-rå-yltf-ö-nst-u-s-nyhe-tsby-orke-ster-er-k-pe"},
    {info: "INFO: F01.8 W11(07.9) R02000-08000 P04.5 L0-3-1-2-1-2-1-1 T544361 >7x7-SWE-ra-se-reci-nda-anlä-p-la-a-r-p-a-r-e-nt-rera-e-s-on-mas-s-s-gene-u-tr-k-m-u-a-ö-utf-i-l-ry-l-s-r-sl-t-lä-m-p-utbr-a-a-äg-ts-föru-a-ista"},
    {info: "INFO: F02.1 W11(09.5) R02000-08000 P04.5 L0-1-3-1-4-1-0-1 T009702 >7x7-SWE-po-s-k-sä-kon-ion-ell-lit-t-erhe-dig-ven-t-ig-isk-i-ikt-i-gend-om-l-ig-v-f-tstr-e-ändl-ös-r-nioå-m-o-för-t-r-en-gtgå-am-s-l-solk-äff-de-ån-l-triv-ar-ig-l"},
    {info: "INFO: F01.9 W11(08.3) R02000-08000 P04.5 L0-2-2-3-1-0-2-1 T106660 >7x7-SWE-sk-e-t-i-md-ga-ffel-u-t-t-or-tä-s-mar-f-a-uk-e-rd-obe-kn-e-re-sk-ori-ä-sv-ad-and-s-sydö-st-t-f-sa-oly-m-stra-i-rh-u-kult-sk-pi-g-nli-e-r-fö"},

    {info: "INFO: F02.0 W16(08.1) R04000-16000 P04.0 L0-3-4-5-1-1-1-1 T156390 >8x8-SWE-e-r-ng-e-nd-va-reha-ö-k-hall-änni-t-ing-rmer-kuls-f-ti-p-el-rivs-ref-o-pr-uta-k-e-k-j-u-ts-ad-n-c-k-s-s-r-i-s-ak-ni-s-gud-n-mell-p-g-eolo-ent-t-inna-ä-anöl-a-tånd-k-mom-ids-g-r-häl-sot-ills-ar"},
    {info: "INFO: F02.0 W15(08.7) R04000-16000 P04.3 L0-1-4-3-5-1-1-0 T238945 >8x8-SWE-t-mpak-o-k-e-xem-pe-llö-dlös-ös-tst-ar-k-s-sen-s-än-r-isk-lit-soci-uel-s-iv-e-nv-ä-o-alp-l-s-r-ink-ompe-l-g-p-ro-gre-o-l-tent-d-i-g-lti-kgi-bust-al-k-fund-a-m-l-i-rlig-b-nis-meka-tal-en-k-e-jse"},
    {info: "INFO: F01.8 W15(07.7) R04000-16000 P04.3 L0-2-4-2-3-3-1-0 T184590 >8x8-SWE-mr-ä-t-t-a-f-lja-i-sa-r-as-f-ger-n-a-l-n-d-s-örk-ock-fl-indi-p-e-a-kape-uns-yrs-m-allv-r-femt-m-r-ac-t-m-arsa-o-ep-n-a-k-ra-e-a-s-la-ik-mek-d-e-stru-on-ek-ts-ka-n-di-ra-syri-sk-r"},
    {info: "INFO: F01.8 W16(07.0) R04000-15000 P04.0 L0-3-3-4-4-1-1-0 T596051 >8x8-SWE-m-uni-cera-grån-a-ö-str-rat-kom-are-r-d-l-a-gk-am-nam-t-bä-ka-oc-l-p-a-es-e-i-od-ig-b-ho-ing-a-s-v-ug-l-l-in-astn-m-f-tip-sa-v-äx-g-bel-n-u-u-p-d-eläg-a-re-d-s-l-im-tra-t-i-fn"},
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



