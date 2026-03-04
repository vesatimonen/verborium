const strorageName = "verborium/game-level";

/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const challengeSetFIN = [
    {info: "INFO: F01.0 W03(05.3) R00000-01000 P05.3 L0-0-0-0-2-1-0-0-0-0-0-0-0-0-0-0 S01 T0007 W018 >4x4-FIN-p-i-t-ä-i-n-m-ä-o-e-u-s-t-n-a-t=3-00rrrd-03uurdd-21drdl"},
    {info: "INFO: F01.0 W05(05.0) R00000-01000 P05.0 L0-0-0-1-3-1-0-0-0-0-0-0-0-0-0-0 S01 T0001 W026 >5x5-FIN-t-k-a-t-a-a-m-v-o-p-y-a-m-i-a-h-t-e-y-s-a-d-o-u-l=5-02drrrr-44llll-21rdll-30rdd-11lurr"},
    {info: "INFO: F01.0 W07(05.1) R00000-01000 P05.1 L0-0-0-2-3-1-1-0-0-0-0-0-0-0-0-0 S01 T0020 W069 >6x6-FIN-o-p-u-ä-o-n-s-r-u-m-h-e-t-e-v-t-y-m-a-l-a-t-a-a-i-a-i-t-l-y-m-e-k-t-y-h=7-01urr-11rdlld-25llur-13rdrurr-44rdll-32rulu-52uul"},
    {info: "INFO: F01.0 W06(08.2) R01000-04000 P08.2 L0-0-0-1-0-0-1-1-0-3-0-0-0-0-0-0 S01 T0019 W095 >7x7-FIN-n-ä-e-t-ä-t-i-y-ä-n-h-y-s-v-k-i-n-e-n-e-l-i-i-a-r-t-a-l-t-l-h-m-t-a-h-o-i-k-o-u-k-i-k-o-r-n-i-k-k=6-51druull-02uur-41luldldrrr-25dlluuurdd-24urdddrruu-66uuulldd"},
];

const challengeSetENG = [
    {info: "INFO: F01.0 W03(05.3) R00000-01000 P05.3 L0-0-0-0-2-1-0-0-0-0-0-0-0-0-0-0 S01 T0004 W020 >4x4-ENG-p-e-o-e-h-i-p-l-t-n-k-a-t-u-o-b=3-00rrdru-32dlll-02urdr"},
    {info: "INFO: F01.0 W05(05.0) R00000-01000 P05.0 L0-0-0-1-3-1-0-0-0-0-0-0-0-0-0-0 S01 T0016 W056 >5x5-ENG-b-p-e-r-c-r-o-w-t-a-i-n-g-n-l-e-c-c-e-l-p-t-a-v-e=5-00ddrr-24ulldr-10drur-44luuu-40ddd"},
    {info: "INFO: F01.0 W06(06.0) R00000-01000 P06.0 L0-0-0-2-0-1-2-1-0-0-0-0-0-0-0-0 S01 T0015 W055 >6x6-ENG-f-i-s-h-r-y-d-u-i-d-a-r-i-m-e-e-i-b-v-i-v-m-l-t-n-s-a-u-g-h-o-i-s-o-h-t=6-43urulur-00rrr-01ddrddlu-33uulld-25uuu-55llurru"},
    {info: "INFO: F01.0 W07(07.0) R00000-04000 P07.0 L0-0-0-1-0-1-2-2-1-0-0-0-0-0-0-0 S01 T0031 W135 >7x7-ENG-p-r-e-c-n-a-n-g-i-v-e-g-e-i-a-l-i-l-d-i-f-r-f-g-e-c-s-t-a-l-u-r-o-u-n-n-c-h-a-r-m-a-e-r-f-i-l-i-f=7-00rdrdrurr-62uullll-13ulu-34uldllu-26llurr-66uldllur-42rdldrru"},
];

const challengeSetITA = [
    {info: "INFO: F01.0 W03(05.3) R00000-01000 P05.3 L0-0-0-0-2-1-0-0-0-0-0-0-0-0-0-0 S01 T0003 W021 >4x4-ITA-A-T-M-O-I-T-I-E-C-P-R-R-S-E-M-P=3-03rrruu-12ruur-02urul"},
    {info: "INFO: F01.0 W05(05.0) R00000-01000 P05.0 L0-0-0-1-3-1-0-0-0-0-0-0-0-0-0-0 S01 T0003 W030 >5x5-ITA-T-R-A-T-T-C-A-S-N-A-Q-A-O-E-S-U-M-F-U-E-A-R-O-Q-I=5-00rrrrd-11lddd-23dluu-34urd-42luld"},
    {info: "INFO: F01.0 W06(06.0) R00000-01000 P06.0 L0-0-0-0-2-2-2-0-0-0-0-0-0-0-0-0 S01 T0015 W058 >6x6-ITA-S-N-A-D-G-A-T-D-M-O-O-M-A-A-E-V-N-B-N-Z-A-A-R-E-D-E-N-R-O-T-O-R-T-G-R-I=6-35uuul-00dddrr-04rrdll-30dluldd-40rddd-45ruluuu"},
    {info: "INFO: F01.0 W08(06.1) R01000-03000 P06.1 L0-0-0-3-1-0-1-2-1-0-0-0-0-0-0-0 S01 T0021 W111 >7x7-ITA-I-R-O-A-R-T-T-C-S-T-M-B-N-I-O-I-T-S-I-E-R-E-R-R-E-V-L-A-I-N-A-Z-C-A-S-M-U-A-Z-R-E-A-O-R-V-E-T-R-O=8-11rulldd-32lddlluru-05rdl-64lullddl-52uulldrd-44drr-26rrrr-60ddd"},
];

const challengeSetSWE = [
    {info: "INFO: F01.0 W03(05.3) R00000-01000 P05.3 L0-0-0-0-2-1-0-0-0-0-0-0-0-0-0-0 S01 T0009 W029 >4x4-SWE-e-v-s-k-n-s-k-u-b-j-a-n-ö-r-a-n=3-20lldrr-30dddl-02drur"},
    {info: "INFO: F01.0 W05(05.0) R00000-01000 P05.0 L0-0-0-1-3-1-0-0-0-0-0-0-0-0-0-0 S01 T0029 W061 >5x5-SWE-l-k-l-g-i-o-f-e-g-t-f-t-r-e-k-a-n-e-v-i-r-k-p-p-ö=5-44llul-11lur-14luur-22rulu-33ruuul"},
    {info: "INFO: F01.0 W06(06.0) R00000-01000 P06.0 L0-0-0-1-1-1-3-0-0-0-0-0-0-0-0-0 S01 T0005 W075 >6x6-SWE-s-k-t-e-o-r-l-v-s-r-d-p-e-ä-n-k-u-s-g-n-e-t-u-j-r-o-g-g-n-k-b-t-t-y-r-a=6-23lluuur-51ulddld-11druurd-05urdr-45lul-52dldrd"},
    {info: "INFO: F01.0 W07(07.0) R01000-04000 P07.0 L0-0-0-2-0-1-0-2-1-1-0-0-0-0-0-0 S01 T0069 W146 >7x7-SWE-e-n-t-a-d-n-d-r-r-u-m-l-a-n-t-k-k-m-b-r-i-n-o-n-d-n-i-n-e-u-r-e-u-m-g-m-s-g-r-l-l-i-u-k-o-d-i-g-g=7-40ldd-12druullurr-36llluuuu-25uld-44ulddrdr-42ururdddd-52dddrd"},
];

const challengeSetFRA = [
    {info: "INFO: F01.0 W03(05.3) R00000-01000 P05.3 L0-0-0-0-2-1-0-0-0-0-0-0-0-0-0-0 S01 T0001 W025 >4x4-FRA-E-S-C-G-P-O-H-R-A-E-R-A-S-S-D-N=3-30dddl-01ddrur-20dlul"},
    {info: "INFO: F01.0 W05(05.0) R00000-01000 P05.0 L0-0-0-1-3-1-0-0-0-0-0-0-0-0-0-0 S01 T0018 W069 >5x5-FRA-O-I-O-P-C-B-S-I-P-R-E-T-N-O-O-B-R-E-S-I-M-A-J-E-R=5-01urd-24lluu-30lddl-31ddll-40ddddl"},
    {info: "INFO: F01.0 W07(05.1) R00000-01000 P05.1 L0-0-0-3-1-2-1-0-0-0-0-0-0-0-0-0 S01 T0028 W060 >6x6-FRA-E-R-T-E-R-P-A-N-Ê-G-U-A-L-C-R-E-O-I-R-E-Î-N-B-X-U-F-A-E-M-L-E-N-R-T-R-A=7-21ull-50ddd-02urddl-15lur-35luurul-43uulur-54dlul"},
    {info: "INFO: F01.0 W08(06.1) R01000-04000 P06.1 L0-0-0-3-1-1-0-1-2-0-0-0-0-0-0-0 S01 T0028 W143 >7x7-FRA-H-S-P-É-E-X-R-A-E-R-R-R-U-O-I-N-E-A-T-C-H-E-G-I-N-I-P-A-S-I-P-C-E-A-R-E-K-É-U-N-C-R-L-U-C-S-I-M-É=8-11urrddddr-55urdd-00ddd-04ruuru-15ruu-56luldlllu-52rdlluuu-60dlu"},
];



const challengeSetDefault = challengeSetENG;


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
        case "ENG":
            options.challenges = challengeSetENG;
            globals.storage    = strorageName + "-ENG";
            break;
        case "ITA":
            options.challenges = challengeSetITA;
            globals.storage    = strorageName + "-ITA";
            break;
        case "SWE":
            options.challenges = challengeSetSWE;
            globals.storage    = strorageName + "-SWE";
            break;
        case "FRA":
            options.challenges = challengeSetFRA;
            globals.storage    = strorageName + "-FRA";
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



