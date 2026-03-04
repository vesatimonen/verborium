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



const challengeSetFIN3 = [
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000013 W094 >8x8-FIN-n-s-u-b-j-e-k-t-o-t-a-r-ä-ö-y-i-i-ä-v-a-y-p-k-s-t-s-e-e-a-ä-u-i-n-v-i-k-u-e-t-u-e-n-i-k-a-k-s-ä-s-r-u-r-s-t-h-k-u-j-l-a-u-a-u-p"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000003 W099 >8x8-FIN-y-ö-o-p-e-i-i-u-s-k-l-p-u-p-t-k-i-p-o-u-m-p-a-a-p-y-ä-p-p-o-n-r-i-r-r-v-a-h-o-p-ä-u-o-s-r-a-u-o-h-t-e-v-i-ä-r-s-o-t-i-s-t-ä-a-s"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-1-5-3-1 S01 T0000024 W102 >8x8-FIN-r-u-k-o-u-a-u-n-h-k-e-a-s-s-ä-o-u-m-p-o-t-h-e-j-n-a-i-a-u-ä-k-a-e-i-t-k-s-y-r-a-y-s-s-k-i-t-r-t-ö-t-y-l-r-i-e-o-i-t-t-o-k-v-v-n"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-3-3-1-2 S01 T0000035 W105 >8x8-FIN-s-u-t-s-o-v-r-a-ä-v-e-m-k-ö-y-h-n-e-h-ä-t-s-y-y-a-p-s-ä-ö-l-a-k-ä-a-e-n-y-j-a-j-n-i-l-k-y-a-v-e-e-l-t-k-n-j-a-k-h-s-o-u-o-k-i-k"},
    {info: "INFO: F01.0 W10(06.4) R02000-07000 P06.4 L0-0-0-0-1-5-3-1 S01 T0000014 W107 >8x8-FIN-s-k-l-o-u-k-k-u-o-e-t-u-ä-y-t-a-k-t-a-p-p-ä-ä-l-s-u-a-a-k-i-a-h-ä-e-p-l-k-s-t-a-ä-y-n-i-a-p-s-a-k-i-t-h-j-u-ä-ä-o-g-n-a-t-ö-t-s"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000021 W109 >8x8-FIN-p-m-p-a-n-s-a-l-e-o-p-r-o-u-k-k-i-r-e-m-p-y-v-a-p-s-l-y-i-r-ä-a-p-i-r-ä-h-p-k-k-o-a-y-ä-t-u-p-a-n-n-j-ä-a-r-e-r-o-k-k-e-l-r-a-ä"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-3-2-3-1 S01 T0000033 W111 >8x8-FIN-i-e-k-a-o-l-u-e-s-n-o-o-i-u-v-s-t-p-a-t-r-o-p-j-o-l-a-p-s-s-y-a-r-u-s-s-y-n-a-u-i-t-u-u-e-n-k-h-i-s-o-ä-ä-t-s-a-n-i-p-u-r-y-ö-a"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-3-1-5-1 S01 T0000035 W112 >8x8-FIN-a-i-d-ä-v-y-l-i-i-a-e-k-k-k-e-ä-k-v-m-o-i-a-r-h-e-u-o-a-r-s-o-u-j-s-k-ä-y-v-s-n-u-k-k-u-n-e-y-t-h-i-o-a-e-t-e-y-l-a-r-p-i-s-l-v"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-5-0-3 S01 T0000027 W113 >8x8-FIN-ä-ä-p-v-p-u-j-ä-t-t-e-a-i-a-y-s-t-o-s-e-i-m-e-y-ä-l-ä-h-v-u-t-k-t-l-t-y-a-s-n-s-i-y-s-s-j-u-u-k-i-v-e-a-u-h-t-a-s-i-n-i-p-a-l-a"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000011 W114 >8x8-FIN-e-j-h-i-v-t-i-v-k-u-i-k-ä-t-h-y-y-r-ä-k-ä-ä-a-l-p-s-k-a-k-e-r-k-m-i-e-k-i-p-i-e-y-j-ä-p-e-t-ä-m-p-i-y-n-t-i-i-t-a-h-y-p-i-s-y-i"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-3-3-1-1-3 S01 T0000031 W114 >8x8-FIN-ä-m-ä-h-h-i-k-i-r-i-a-u-j-i-l-ä-t-d-n-l-t-t-e-m-ä-a-ä-k-a-a-a-i-ä-s-k-u-o-i-h-ä-d-o-i-r-k-k-n-v-i-t-i-l-m-ä-e-ä-s-u-s-u-t-ä-r-ä"},
    {info: "INFO: F01.0 W10(06.4) R02000-07000 P06.4 L0-0-0-0-4-0-4-2 S01 T0000025 W117 >8x8-FIN-s-i-d-h-p-s-u-o-ä-k-r-y-e-l-l-j-s-u-k-u-v-a-e-e-o-a-p-i-i-k-r-l-i-t-k-a-o-k-e-u-n-k-r-e-h-i-t-r-u-f-a-i-t-s-t-e-a-k-a-m-ö-a-u-h"},
    {info: "INFO: F01.0 W11(05.8) R03000-07000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000058 W121 >8x8-FIN-p-i-r-i-s-t-u-k-p-ä-e-ä-t-i-s-k-y-r-t-r-ä-n-o-u-k-ä-p-i-ä-k-o-t-p-n-s-y-e-o-l-t-o-e-n-l-p-r-y-o-l-l-o-y-k-ä-t-u-o-e-n-k-u-v-i-s"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000102 W124 >8x8-FIN-s-y-v-ä-i-u-i-m-e-t-y-k-m-h-y-y-l-i-n-ä-a-o-l-k-ä-l-l-i-v-v-o-u-t-n-o-t-a-v-l-u-t-s-f-o-i-s-i-t-ä-i-i-l-e-t-s-k-ä-l-i-e-p-a-y-e"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-3-3-1-3 S01 T0000011 W124 >8x8-FIN-t-o-t-e-u-t-u-s-h-a-k-a-ä-i-n-e-i-s-s-n-j-k-a-n-g-n-u-e-o-r-s-v-i-e-b-n-t-v-i-o-t-h-p-u-s-e-r-t-y-k-i-k-p-l-o-o-s-i-o-s-i-i-k-n"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-1-5-3-1 S01 T0000025 W129 >8x8-FIN-a-l-a-k-k-u-t-i-v-t-i-p-a-a-ä-n-r-e-a-a-k-n-i-t-k-s-s-p-y-ö-r-o-k-u-p-p-f-i-n-a-h-a-u-a-v-i-l-a-a-u-l-e-r-a-v-i-k-k-o-k-a-n-e-r"},
    {info: "INFO: F01.0 W10(06.4) R03000-08000 P06.4 L0-0-0-0-3-2-3-2 S01 T0000010 W131 >8x8-FIN-l-i-l-n-k-o-m-ä-j-a-a-i-r-m-a-t-a-s-j-l-a-f-r-t-k-r-a-t-s-e-i-ä-k-y-a-r-o-a-a-ä-y-m-u-t-r-m-a-t-e-n-a-j-e-k-a-t-n-k-i-r-t-a-l-i"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-3-2-3-1 S01 T0000033 W132 >8x8-FIN-u-s-i-s-a-s-k-o-o-t-t-a-n-l-y-ä-k-t-i-k-a-ä-o-v-s-b-e-k-a-k-i-h-i-i-t-l-v-l-a-ä-r-n-o-e-y-i-k-v-o-t-t-y-t-o-a-i-k-o-n-s-u-s-i-ö"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-3-2-3-1 S01 T0000095 W133 >8x8-FIN-v-u-k-a-n-n-p-m-a-h-u-u-t-e-a-a-t-y-p-s-o-s-u-k-ä-ä-p-o-d-o-a-a-i-a-k-j-o-n-l-a-p-a-u-a-a-a-l-v-p-e-s-n-p-h-j-a-i-t-i-r-u-s-a-k"},
    {info: "INFO: F01.0 W10(06.4) R03000-08000 P06.4 L0-0-0-0-3-2-3-2 S01 T0000025 W134 >8x8-FIN-t-ä-t-s-i-r-ä-t-u-r-h-s-u-t-a-l-e-v-e-l-p-o-v-j-a-v-a-p-e-a-t-e-i-l-a-k-l-l-e-l-e-m-u-h-u-m-i-o-s-ä-e-i-s-o-v-k-t-y-k-t-i-n-i-a"},
    {info: "INFO: F01.0 W11(05.8) R02000-07000 P05.8 L0-0-0-2-3-2-3-1 S01 T0000022 W140 >8x8-FIN-a-i-v-s-a-g-l-o-l-l-e-a-k-e-l-k-t-a-p-ä-ä-t-t-a-u-r-t-t-h-i-y-j-h-o-u-a-a-o-n-a-o-r-k-s-t-v-e-m-a-h-a-a-o-n-p-p-u-t-m-l-a-t-i-a"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-4-1-2-2 S01 T0000032 W141 >8x8-FIN-k-i-i-m-m-a-e-i-k-s-o-r-i-ä-r-k-i-n-i-k-i-n-ö-k-e-t-a-t-k-e-t-t-h-s-i-u-t-m-s-e-t-i-m-s-a-r-o-r-t-t-s-i-t-a-j-ä-n-o-a-t-i-k-u-s"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-4-2-2 S01 T0000031 W142 >8x8-FIN-t-ä-r-i-s-a-l-n-s-i-s-u-t-v-l-o-n-a-k-s-ä-a-a-s-o-u-p-t-a-n-r-i-r-s-p-u-o-n-k-o-s-u-a-s-d-y-n-a-i-a-l-s-o-i-p-m-u-n-a-u-t-a-u-o"},
    {info: "INFO: F01.0 W10(06.4) R03000-08000 P06.4 L0-0-0-0-1-5-3-1 S01 T0000102 W144 >8x8-FIN-o-m-a-i-r-e-t-a-s-a-t-t-r-f-o-s-i-l-i-p-i-r-o-f-r-e-l-p-y-i-s-u-k-v-y-k-l-v-ä-t-o-s-i-a-ä-e-k-u-s-s-r-a-m-j-y-s-t-o-a-j-r-u-k-a"},
    {info: "INFO: F01.0 W10(06.4) R03000-08000 P06.4 L0-0-0-0-3-3-1-3 S01 T0000153 W145 >8x8-FIN-s-a-u-t-u-a-a-n-e-n-t-k-i-p-d-p-u-p-t-t-k-a-e-u-s-i-i-e-o-v-s-h-e-l-a-r-n-s-t-t-r-o-a-e-t-s-i-i-i-t-u-u-s-o-k-k-r-a-l-l-e-t-e-o"},
    {info: "INFO: F01.0 W10(06.4) R02000-07000 P06.4 L0-0-0-0-3-1-5-1 S01 T0000143 W149 >8x8-FIN-e-ä-e-p-i-k-e-a-n-r-e-h-m-e-k-i-u-s-a-a-p-l-u-l-r-i-p-n-e-ä-a-e-m-r-u-r-o-t-k-n-a-ä-l-i-v-i-a-n-t-ä-l-i-r-s-r-u-a-p-y-s-a-k-t-t"},
    {info: "INFO: F01.0 W10(06.4) R03000-08000 P06.4 L0-0-0-0-2-4-2-2 S01 T0000016 W149 >8x8-FIN-o-i-v-a-t-e-n-t-e-t-l-l-t-t-k-t-n-t-u-s-i-l-u-i-i-i-r-a-i-t-i-p-s-a-j-i-l-u-s-u-a-h-ä-u-t-u-k-k-a-k-h-s-u-l-l-k-r-e-l-y-j-k-e-i"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-4-2-2 S01 T0000009 W150 >8x8-FIN-h-s-j-o-u-s-t-o-a-u-a-l-a-s-o-a-a-v-e-m-a-i-t-a-k-e-m-a-u-s-s-u-k-e-a-h-t-p-r-e-i-t-s-o-g-k-k-l-a-p-u-u-n-a-u-a-a-l-l-l-u-t-s-p"},
    {info: "INFO: F01.0 W10(06.4) R03000-07000 P06.4 L0-0-0-0-1-5-3-1 S01 T0000068 W153 >8x8-FIN-t-t-i-i-v-p-e-r-a-v-y-i-k-a-n-u-k-y-t-l-k-k-k-a-i-s-ö-k-a-i-u-k-o-a-n-o-i-e-k-k-h-u-t-i-v-s-e-r-r-o-k-k-t-t-k-e-a-t-t-a-a-i-k-ä"},
    {info: "INFO: F01.0 W10(06.4) R03000-07000 P06.4 L0-0-0-0-4-2-0-4 S01 T0000096 W155 >8x8-FIN-i-s-u-u-k-a-i-v-o-k-u-l-t-u-ä-ä-l-y-p-l-i-m-j-v-t-h-a-p-e-t-a-a-y-i-r-i-d-t-s-i-ä-ä-t-t-ä-a-a-l-t-r-a-m-u-o-p-a-a-a-k-u-j-o-p-v"},
    {info: "INFO: F01.0 W10(06.4) R03000-08000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000009 W155 >8x8-FIN-t-s-m-a-n-s-i-k-o-a-l-m-e-j-l-k-n-l-o-i-t-v-a-a-t-a-k-o-a-i-p-k-u-k-a-u-u-l-p-o-s-y-l-l-o-i-s-s-y-t-a-i-i-l-s-t-v-e-l-v-ä-e-e-r"},
    {info: "INFO: F01.0 W10(06.4) R02000-07000 P06.4 L0-0-0-0-1-5-3-1 S01 T0000141 W156 >8x8-FIN-r-a-t-u-s-i-a-k-i-a-t-v-ä-e-s-l-s-a-k-a-l-a-t-u-s-t-s-o-p-e-ö-j-n-o-a-a-a-k-s-i-p-r-a-t-t-r-f-l-i-t-t-l-o-a-i-i-v-a-r-a-m-p-p-u"},
    {info: "INFO: F01.0 W10(06.4) R02000-07000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000032 W159 >8x8-FIN-l-o-t-k-u-u-l-s-u-u-t-l-i-j-i-u-u-a-k-k-n-a-p-u-l-i-a-a-i-m-a-h-h-u-s-r-f-a-i-t-n-a-i-o-m-v-i-a-ä-n-i-i-u-t-t-t-i-k-t-s-t-a-a-a"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-4-1-2-3 S01 T0000014 W160 >8x8-FIN-e-l-i-o-n-a-l-a-ö-i-m-d-a-r-v-m-t-s-e-v-h-y-o-i-r-o-t-a-l-v-i-a-n-a-t-t-o-ä-t-h-e-n-i-a-r-ä-t-r-v-e-r-k-m-a-h-u-i-v-h-a-a-a-t-m"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-4-2-2 S01 T0000095 W161 >8x8-FIN-s-t-o-u-i-j-o-k-e-i-a-s-r-e-k-o-t-e-b-a-p-u-s-r-u-h-a-t-e-t-a-p-r-d-i-a-i-h-d-i-t-o-d-a-s-o-k-o-t-u-s-s-t-j-k-r-a-r-i-i-ä-ä-v-e"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000016 W165 >8x8-FIN-o-t-u-e-l-n-e-n-y-h-e-n-s-u-t-i-l-i-e-n-k-k-u-a-r-v-o-t-u-a-s-k-a-t-v-o-a-h-a-i-p-e-r-n-l-j-y-p-u-m-a-v-i-e-l-s-p-p-k-a-l-l-e-u"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-3-2-3-2 S01 T0000032 W166 >8x8-FIN-r-i-k-p-i-i-r-n-i-k-o-i-o-s-i-ä-ä-k-ö-t-v-e-l-k-h-k-i-t-s-a-i-i-o-o-r-a-t-i-r-j-e-r-t-a-o-u-u-ä-i-i-t-a-i-h-k-k-v-a-a-t-t-u-a-n"},
    {info: "INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000028 W170 >8x8-FIN-a-v-a-v-e-i-u-d-l-a-n-r-a-j-p-o-a-o-n-i-a-l-p-t-k-u-t-i-l-r-u-a-n-o-v-e-l-e-k-s-k-o-h-j-a-t-a-y-i-p-ö-t-i-o-m-ä-p-u-y-s-n-n-h-u"},
    {info: "INFO: F01.0 W11(05.8) R02000-06000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000067 W172 >8x8-FIN-y-y-ö-t-n-i-r-y-s-v-y-k-o-v-i-p-t-o-h-t-u-t-r-a-a-p-p-i-o-l-i-s-i-i-t-n-n-u-s-t-v-a-t-e-s-u-t-o-o-l-k-a-p-o-ä-e-k-a-k-s-v-i-i-l"},
    {info: "INFO: F01.0 W11(05.8) R03000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000056 W175 >8x8-FIN-o-s-i-k-k-n-e-p-v-n-u-v-o-s-r-u-u-e-l-i-t-e-u-e-a-s-i-a-a-v-k-l-u-i-v-h-i-m-e-a-l-i-p-t-r-i-p-r-e-n-n-o-i-i-r-i-i-m-a-s-a-t-o-k"},
    {info: "INFO: F01.0 W11(05.8) R03000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000105 W178 >8x8-FIN-s-i-a-r-e-r-e-t-i-t-a-s-i-r-i-n-a-t-u-s-u-j-i-a-s-t-i-i-s-u-j-m-e-u-r-a-u-r-y-s-v-a-a-j-a-m-m-i-y-a-k-e-t-o-r-s-h-j-t-i-e-d-ä-k"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-4-2-2 S01 T0000041 W181 >8x8-FIN-t-e-m-p-p-o-k-k-s-u-i-h-e-l-i-e-u-s-u-k-s-a-t-i-e-s-t-u-u-m-a-k-r-i-m-n-t-e-k-i-p-f-a-h-s-ä-r-e-u-u-i-t-p-a-k-v-s-i-o-i-v-r-e-ä"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-4-2-2 S01 T0000194 W205 >8x8-FIN-t-u-o-t-t-a-v-a-s-a-r-n-i-l-e-i-v-a-a-a-t-l-r-t-t-t-a-r-t-i-i-t-o-a-r-u-t-a-k-k-e-l-l-ä-a-i-l-a-t-n-s-t-i-u-o-j-y-ä-u-a-l-h-m-a"},
    {info: "INFO: F01.0 W10(06.4) R02000-08000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000067 W219 >8x8-FIN-k-u-k-r-a-a-s-t-o-p-i-a-j-n-a-a-i-s-s-t-t-r-a-m-u-t-t-o-u-s-t-m-a-a-a-n-r-i-i-a-u-s-l-k-t-u-k-r-o-s-i-a-t-a-s-a-a-i-p-k-a-t-o-f"},
];






const challengeSetITA2 = [
    {info: "F01.0 W094 T0000011 INFO: F01.0 W13(04.9) R00000-08000 P04.9 L0-0-0-6-2-5-0-0 S01 T0000011 W094 >8x8-ITA-V-O-R-R-E-I-R-P-A-I-T-P-T-M-L-G-T-A-A-N-I-O-E-N-A-T-L-C-A-J-S-I-P-E-O-E-Z-E-G-G-I-B-N-D-Z-M-O-U-A-B-A-S-D-O-O-F-D-I-C-A-E-C-B-S"},
    {info: "F01.0 W094 T0000013 INFO: F01.0 W13(04.9) R02000-08000 P04.9 L0-0-0-6-4-1-2-0 S01 T0000013 W094 >8x8-ITA-O-V-A-C-B-M-I-I-M-B-A-B-O-L-S-H-A-A-L-B-O-I-U-C-R-D-D-U-A-L-R-O-I-Y-A-N-I-P-S-U-D-A-O-L-I-O-C-F-R-R-U-A-S-E-R-C-A-T-O-R-I-T-D-E"},
    {info: "F01.0 W097 T0000015 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-4-4-2-0-2 S01 T0000015 W097 >8x8-ITA-U-D-I-G-A-P-I-E-N-B-E-E-N-O-C-N-L-O-D-L-S-E-G-I-E-A-L-F-T-C-N-A-H-S-R-M-A-H-G-A-A-M-I-B-A-B-E-N-S-T-S-I-L-Y-T-A-I-I-S-T-I-I-S-S"},
    {info: "F01.0 W112 T0000037 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-4-1-6-1-0 S01 T0000037 W112 >8x8-ITA-S-C-R-O-R-R-U-T-T-O-L-L-I-I-A-U-R-I-H-C-C-B-B-F-E-T-A-E-D-A-R-O-T-C-R-C-O-T-T-T-T-U-G-H-A-E-A-O-A-P-O-E-D-P-S-M-L-I-R-A-A-T-T-E"},
    {info: "F01.0 W114 T0000009 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-3-4-3-2-0 S01 T0000009 W114 >8x8-ITA-I-U-L-A-L-U-C-C-D-Q-I-D-A-X-F-I-O-C-I-R-M-I-A-S-R-A-A-A-L-S-N-O-R-I-L-D-C-E-G-E-F-M-U-Y-C-O-O-R-O-R-O-R-R-T-I-A-M-A-T-U-A-U-Q-R"},
    {info: "F01.0 W119 T0000039 INFO: F01.0 W12(05.3) R00000-08000 P05.3 L0-0-0-3-5-2-1-1 S01 T0000039 W119 >8x8-ITA-I-U-C-U-R-I-N-U-R-S-S-T-T-A-T-P-I-C-I-O-E-T-I-R-V-O-G-G-T-I-N-A-C-L-R-A-Q-U-T-O-I-A-C-I-Z-Z-O-S-U-R-P-M-U-A-R-S-C-A-R-O-F-J-G-I"},
    {info: "F01.0 W119 T0000122 INFO: F01.0 W13(04.9) R01000-08000 P04.9 L0-0-0-4-6-3-0-0 S01 T0000122 W119 >8x8-ITA-A-B-S-E-G-F-F-A-N-D-P-I-N-N-A-T-D-O-G-U-B-I-A-S-I-O-U-C-A-D-I-P-R-L-A-R-I-I-V-S-A-I-L-P-A-O-O-A-I-U-L-A-C-M-N-T-I-T-I-R-A-L-U-P"},
    {info: "F01.0 W120 T0000036 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-3-2-7-0-0 S01 T0000036 W120 >8x8-ITA-O-N-P-I-A-N-I-T-O-G-E-R-R-T-U-S-T-E-D-N-O-O-I-G-A-D-S-O-T-H-I-A-T-O-I-I-A-C-M-R-G-L-M-E-H-N-E-A-O-A-R-G-C-U-L-U-L-A-E-H-S-A-T-M"},
    {info: "F01.0 W123 T0000027 INFO: F01.0 W14(04.6) R02000-08000 P04.6 L0-0-0-7-6-1-0-0 S01 T0000027 W123 >8x8-ITA-E-S-O-I-U-B-C-A-S-A-G-E-E-R-U-G-U-I-G-D-A-M-N-E-C-G-A-M-B-A-E-B-S-O-T-R-A-P-I-B-D-E-S-B-I-P-R-G-I-P-A-U-D-N-E-R-Y-T-R-N-O-A-C-E"},
    {info: "F01.0 W123 T0000135 INFO: F01.0 W12(05.3) R00000-08000 P05.3 L0-0-0-4-2-4-2-0 S01 T0000135 W123 >8x8-ITA-D-O-M-A-N-I-O-L-L-E-R-A-T-A-P-S-L-D-U-T-N-N-I-I-A-A-D-A-O-A-G-O-I-P-G-I-L-M-U-A-E-S-U-R-I-D-Q-N-T-T-M-O-R-I-R-T-A-E-S-O-A-B-O-A"},
    {info: "F01.0 W125 T0000020 INFO: F01.0 W12(05.3) R01000-08000 P05.3 L0-0-0-2-5-4-1-0 S01 T0000020 W125 >8x8-ITA-Y-T-R-A-P-P-R-O-O-T-C-O-C-H-E-N-O-R-U-P-N-B-E-T-P-S-I-G-A-I-D-O-E-V-A-L-P-A-O-L-N-R-O-A-P-T-T-O-G-E-D-L-E-C-I-R-A-P-U-R-A-R-A-I"},
    {info: "F01.0 W125 T0000038 INFO: F01.0 W12(05.3) R00000-08000 P05.3 L0-0-0-5-2-3-0-2 S01 T0000038 W125 >8x8-ITA-A-L-T-R-O-T-S-I-A-C-A-O-P-S-R-L-V-I-P-R-T-T-A-A-A-C-C-I-R-F-A-M-N-Z-A-I-U-F-A-R-O-T-N-V-P-O-T-O-C-T-E-A-S-I-G-N-O-N-B-R-L-O-O-K"},
    {info: "F01.0 W126 T0000020 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-2-7-0-3-0 S01 T0000020 W126 >8x8-ITA-R-A-I-U-A-V-R-O-O-B-I-T-C-I-O-R-A-U-A-F-I-O-D-B-T-S-L-I-D-E-B-A-M-A-I-B-I-O-M-F-I-N-E-B-P-V-E-F-R-N-F-F-E-A-N-I-A-O-G-A-N-S-T-O"},
    {info: "F01.0 W130 T0000024 INFO: F01.0 W11(05.8) R01000-08000 P05.8 L0-0-0-4-0-2-4-1 S01 T0000024 W130 >8x8-ITA-T-E-C-I-R-P-I-S-T-A-R-T-R-E-A-O-A-I-B-O-O-I-T-D-O-C-E-N-F-G-E-I-I-D-C-O-I-R-T-N-R-M-A-T-I-E-N-O-E-U-A-R-F-O-G-R-T-T-E-T-A-L-O-P"},
    {info: "F01.0 W131 T0000098 INFO: F01.0 W12(05.3) R03000-08000 P05.3 L0-0-0-3-4-4-0-1 S01 T0000098 W131 >8x8-ITA-O-P-R-O-F-F-S-S-S-I-C-C-I-A-E-O-U-T-O-U-T-L-S-C-C-I-R-O-T-V-O-S-A-A-P-I-D-I-A-S-N-E-N-A-R-C-B-K-O-B-O-A-T-R-E-E-I-A-N-T-S-O-C-T"},
    {info: "F01.0 W134 T0000041 INFO: F01.0 W12(05.3) R00000-08000 P05.3 L0-0-0-4-3-2-3-0 S01 T0000041 W134 >8x8-ITA-L-E-O-H-I-V-O-L-O-G-G-C-N-T-S-A-D-M-A-I-A-I-U-G-N-C-A-B-T-E-A-D-A-B-D-R-E-N-T-A-O-N-O-M-E-G-I-N-V-E-R-O-I-L-N-D-O-G-N-A-D-I-G-O"},
    {info: "F01.0 W140 T0000022 INFO: F01.0 W12(05.3) R01000-07000 P05.3 L0-0-0-3-4-3-2-0 S01 T0000022 W140 >8x8-ITA-C-A-S-T-T-U-T-C-O-I-H-R-A-R-N-I-D-E-C-D-O-A-R-Z-D-E-A-C-O-T-E-I-E-V-L-I-R-B-A-V-R-G-O-R-E-T-N-E-S-E-J-O-S-R-E-A-N-A-S-T-U-P-E-R"},
    {info: "F01.0 W142 T0000054 INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-3-1-2-5-0 S01 T0000054 W142 >8x8-ITA-I-O-U-S-E-T-T-I-T-R-P-C-R-V-A-M-S-T-E-S-I-O-U-O-I-L-O-T-T-S-V-O-Z-A-N-T-I-A-L-R-A-N-A-T-E-A-B-O-O-P-I-N-S-U-T-C-D-P-I-A-A-R-T-O"},
    {info: "F01.0 W143 T0000022 INFO: F01.0 W13(04.9) R02000-08000 P04.9 L0-0-0-5-5-2-1-0 S01 T0000022 W143 >8x8-ITA-I-N-F-E-E-R-O-F-O-N-O-R-P-E-C-R-D-G-O-N-Z-L-A-E-N-E-T-I-O-O-C-S-A-R-N-A-P-S-R-E-B-P-M-A-E-R-U-D-A-I-N-I-F-A-O-S-A-I-O-T-O-A-B-U"},
    {info: "F01.0 W143 T0000033 INFO: F01.0 W13(04.9) R00000-08000 P04.9 L0-0-0-6-3-3-1-0 S01 T0000033 W143 >8x8-ITA-O-I-V-I-I-A-R-U-P-R-T-D-A-T-P-G-P-O-G-T-R-S-A-H-P-L-O-O-P-I-D-E-A-F-D-N-U-D-I-V-T-A-O-M-A-O-O-L-E-T-O-D-N-S-S-E-A-R-U-P-B-A-O-G"},
    {info: "F01.0 W148 T0000027 INFO: F01.0 W13(04.9) R01000-08000 P04.9 L0-0-0-5-4-4-0-0 S01 T0000027 W148 >8x8-ITA-E-G-D-O-R-B-I-D-T-D-O-T-I-Y-T-O-B-U-O-T-F-A-R-N-S-T-A-R-I-P-D-E-E-I-P-D-O-S-N-O-R-T-A-E-R-C-E-P-E-D-S-S-T-A-N-U-O-N-C-H-E-D-U-C"},
    {info: "F01.0 W153 T0000028 INFO: F01.0 W13(04.9) R02000-08000 P04.9 L0-0-0-5-5-2-1-0 S01 T0000028 W153 >8x8-ITA-T-S-I-C-I-B-O-V-A-Z-I-L-A-U-I-U-R-R-S-A-T-R-U-O-I-E-S-X-I-L-A-T-N-H-A-A-M-I-S-E-O-C-S-T-C-E-T-E-T-O-L-O-C-O-G-R-I-D-M-O-D-U-L-O"},
    {info: "F01.0 W154 T0000084 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-3-4-3-2-0 S01 T0000084 W154 >8x8-ITA-E-I-V-P-O-T-I-M-T-S-T-I-S-A-P-P-D-I-A-R-T-A-D-E-E-F-O-D-O-T-O-G-T-N-D-I-H-C-S-N-T-O-E-S-E-M-A-A-I-P-S-C-N-I-N-T-A-M-E-R-Q-U-I-O"},
    {info: "F01.0 W156 T0000025 INFO: F01.0 W12(05.3) R02000-08000 P05.3 L0-0-0-5-3-1-1-2 S01 T0000025 W156 >8x8-ITA-M-A-D-E-S-T-I-I-G-O-D-B-A-N-U-D-U-A-R-E-P-I-L-O-S-C-A-P-O-B-O-T-A-I-N-U-R-U-G-T-R-T-N-D-O-I-O-U-A-T-A-O-S-A-C-L-X-I-S-S-A-P-R-A"},
    {info: "F01.0 W166 T0000040 INFO: F01.0 W13(04.9) R01000-08000 P04.9 L0-0-0-6-3-3-1-0 S01 T0000040 W166 >8x8-ITA-O-S-B-M-D-E-R-A-D-S-A-A-O-G-A-U-N-A-B-L-P-P-E-L-T-S-C-I-O-I-R-A-U-R-I-N-A-G-A-G-I-N-A-N-D-I-S-E-O-T-S-O-A-C-S-P-D-E-U-C-P-I-A-R"},
    {info: "F01.0 W167 T0000238 INFO: F01.0 W13(04.9) R02000-08000 P04.9 L0-0-0-8-1-2-1-1 S01 T0000238 W167 >8x8-ITA-T-O-P-S-S-T-O-D-A-B-I-O-D-I-C-C-C-A-N-T-O-A-O-I-A-D-O-T-N-I-D-A-R-T-I-B-E-I-O-B-T-U-I-R-I-B-N-A-U-T-A-E-C-E-R-C-B-O-P-R-E-T-O-I"},
    {info: "F01.0 W171 T0000123 INFO: F01.0 W13(04.9) R00000-07000 P04.9 L0-0-0-4-6-3-0-0 S01 T0000123 W171 >8x8-ITA-T-I-N-E-R-O-I-V-A-T-A-T-S-O-C-E-E-A-E-U-I-R-B-R-S-M-N-G-N-A-S-A-O-V-I-L-A-C-T-L-D-I-N-S-I-S-E-V-G-A-I-E-D-C-R-O-I-O-L-O-V-O-Z-O"},
    {info: "F01.0 W181 T0000506 INFO: F01.0 W12(05.3) R03000-08000 P05.3 L0-0-0-5-2-2-2-1 S01 T0000506 W181 >8x8-ITA-A-R-T-R-T-N-E-V-I-N-N-E-A-T-R-O-A-C-O-I-X-M-D-L-T-R-O-P-I-O-A-R-M-S-R-I-D-N-A-R-O-E-R-I-I-A-M-A-D-A-R-C-C-R-I-D-U-L-O-O-S-G-R-I"},
    {info: "F01.0 W182 T0000042 INFO: F01.0 W11(05.8) R02000-08000 P05.8 L0-0-0-2-2-3-4-0 S01 T0000042 W182 >8x8-ITA-T-O-M-A-L-C-N-S-L-A-O-S-E-S-I-E-S-F-D-E-R-E-O-T-A-N-E-O-T-P-V-T-P-E-F-F-A-R-O-I-N-I-I-D-E-S-I-E-I-A-L-A-R-T-P-S-M-C-D-A-P-A-M-E"},
    {info: "F01.0 W183 T0000071 INFO: F01.0 W12(05.3) R00000-06000 P05.3 L0-0-0-5-1-3-3-0 S01 T0000071 W183 >8x8-ITA-I-L-S-A-E-L-I-B-N-C-I-G-I-I-R-A-G-E-L-L-A-M-U-T-U-R-E-I-R-O-V-S-E-P-E-V-E-I-I-T-G-C-U-M-R-I-T-E-I-A-R-A-L-D-T-M-R-O-I-T-A-C-A-O"},
    {info: "F01.0 W190 T0000191 INFO: F01.0 W13(04.9) R00000-08000 P04.9 L0-0-0-5-6-1-0-1 S01 T0000191 W190 >8x8-ITA-I-V-I-D-O-M-A-T-P-O-A-D-I-A-V-O-N-R-I-D-E-Z-I-N-E-T-O-A-M-I-I-A-T-T-O-I-A-T-T-Z-I-O-N-P-I-D-E-N-D-A-D-I-V-I-D-A-U-N-G-U-E-E-D-C"},
    {info: "F01.0 W214 T0000034 INFO: F01.0 W13(04.9) R01000-08000 P04.9 L0-0-0-6-4-2-0-1 S01 T0000034 W214 >8x8-ITA-M-O-D-U-L-O-I-H-O-D-S-E-C-O-A-G-V-O-S-A-C-R-L-A-I-T-A-T-I-T-I-B-V-E-R-T-G-S-O-R-I-R-I-B-U-I-I-E-N-O-C-A-R-I-Z-E-O-D-K-U-S-C-P-R"},
    {info: "F01.0 W265 T0006054 INFO: F01.0 W13(04.9) R01000-08000 P04.9 L0-0-0-4-7-1-1-0 S01 T0006054 W265 >8x8-ITA-V-N-E-R-I-O-L-L-O-O-M-F-E-T-T-A-R-R-U-F-I-S-E-F-M-A-R-N-A-S-E-M-E-R-A-D-R-U-R-C-S-I-M-A-G-A-P-I-S-S-A-F-A-I-A-L-E-T-I-O-G-L-O-Z"},
];



const challengeSetSWE2 = [
    {info: "INFO: F02.3 W05(07.4) R00000-01000 P03.2 L0-2-1-1-1-0-0-0-0-0-0-0-0-0-0-0 S01 T0001 W012 >4x4-SWE-ppo-ra-ng-poä-rt-og-be-te-ll-sk-mar-sa-ne-io-dit-tra"},
    {info: "INFO: F01.2 W06(07.5) R00000-02000 P06.0 L0-0-0-3-1-0-0-1-0-0-1-0-0-0-0-0 S01 T0007 W062 >6x6-SWE-a-r-ff-i-å-t-d-l-si-n-t-ps-me-e-ms-s-e-up-r-p-k-k-l-l-i-p-a-ä-l-ek-va-t-ll-e-u-t"},
    {info: "INFO: F01.0 W07(09.1) R01000-04000 P09.1 L0-0-0-0-1-1-1-0-0-1-1-1-1-0-0-0 S01 T0074 W171 >8x8-SWE-k-g-e-r-t-t-u-d-s-i-t-a-s-s-n-e-u-e-l-l-t-k-t-i-t-k-e-o-i-u-r-n-a-i-l-n-r-ä-t-s-n-n-l-n-k-t-s-g-r-t-e-i-f-ö-r-g-ä-j-h-n-g-s-n-y"},
];


const challengeSetFRA = [
    {info: "INFO: F03.0 W05(09.6) R00000-02000 P03.2 L0-0-1-2-2-0-0-0-0-0-0-0-0-0-0-0-0 S01 T0001 W013 >4x4-FRA-BER-TOM-LIO-BIB-ION-SAT-THÈ-CER-CON-VER-QUE-PLA-ÈRE-NDP-GRA-REM"},
    {info: "INFO: F02.4 W04(09.5) R00000-02000 P04.0 L0-0-1-1-1-0-0-1-0-0-0-0-0-0-0-0-0 S01 T0001 W011 >4x4-FRA-DU-ORT-NSP-TIE-EN-ER-TRA-PAR-ENT-IN-RD-EX-RE-AI-AO-TR"},
    {info: "INFO: F02.0 W04(08.0) R00000-02000 P04.0 L0-0-1-1-0-1-1-0-0-0-0-0-0-0-0-0-0 S01 T0001 W016 >4x4-FRA-TU-TI-FÊ-TE-ER-NS-ST-AN-AM-CO-ON-CE-US-ER-RC-CI"},
    {info: "INFO: F01.4 W03(07.3) R00000-02000 P05.3 L0-0-0-1-0-1-0-0-1-0-0-0-0-0-0-0-0 S01 T0014 W042 >4x4-FRA-E-R-DE-LI-H-C-O-SO-H-A-R-P-C-S-SER-AP"},

    {info: "INFO: F02.2 W05(10.8) R01000-02000 P05.0 L0-0-0-1-1-1-1-1-0-0-0-0-0-0-0-0-0 S01 T0001 W018 >5x5-FRA-LE-VA-RE-AI-IN-UR-EX-TR-AO-RD-RE-EP-SA-LER-MU-ND-TR-TIS-FA-SSI-RE-EN-ION-CT-DI"},
    {info: "INFO: F02.0 W06(08.3) R00000-02000 P04.2 L0-0-0-3-1-0-2-0-0-0-0-0-0-0-0-0-0 S01 T0001 W021 >5x5-FRA-SÈ-MI-AN-CE-IC-RE-AI-SS-PU-BL-CO-NN-SA-TI-ON-ÉT-RE-NI-ER-PI-EI-ND-GA-OR-PA"},
    {info: "INFO: F01.6 W05(08.2) R00000-02000 P05.0 L0-0-0-3-0-0-0-1-0-1-0-0-0-0-0-0-0 S01 T0007 W028 >5x5-FRA-AIS-ANÇ-O-N-ST-M-FR-C-U-R-A-R-ANC-I-NIE-I-NI-L-R-PAG-NT-E-B-E-COM"},
    {info: "INFO: F01.4 W05(07.0) R00000-02000 P05.0 L0-0-0-2-1-0-1-0-0-1-0-0-0-0-0-0-0 S01 T0012 W034 >5x5-FRA-AR-CH-H-E-R-GE-R-C-O-L-E-S-EN-R-AR-M-PR-ÊT-P-ME-BL-E-RE-E-R"},

    {info: "INFO: F02.2 W06(13.3) R01000-04000 P06.0 L0-0-0-0-1-0-3-2-0-0-0-0-0-0-0-0-0 S01 T0004 W026 >6x6-FRA-ION-RE-TT-ME-IST-MIN-UCT-STR-CON-RO-RA-AD-IN-AI-CO-MP-TI-ON-RD-RE-CE-AN-RE-CO-RAO-PR-ÉS-SS-AI-NN-EXT-RE-EN-TA-TI-ON"},
    {info: "INFO: F02.0 W07(10.3) R01000-04000 P05.1 L0-0-0-1-2-1-1-2-0-0-0-0-0-0-0-0-0 S01 T0007 W030 >6x6-FRA-EN-TA-TI-LI-TÉ-ER-ÉS-NT-ON-BI-SO-RB-PR-ME-ON-SA-AB-LE-RE-GE-SP-CO-ÉR-AB-ER-JU-RE-NS-ID-DI-CH-RO-CC-RA-RS-VE"},
    {info: "INFO: F01.4 W06(08.7) R02000-04000 P06.0 L0-0-0-1-1-1-0-1-1-1-0-0-0-0-0-0-0 S01 T0001 W056 >6x6-FRA-LA-GER-E-P-P-HOT-SOU-RÉ-C-T-APH-OGR-R-E-O-I-E-R-ÔME-I-N-U-R-E-T-T-N-E-L-F-AN-F-HA-C-E-F"},
    {info: "INFO: F01.2 W06(07.5) R00000-04000 P06.0 L0-0-0-1-1-1-0-2-0-0-1-0-0-0-0-0-0 S01 T0007 W048 >6x6-FRA-NI-R-D-RE-E-N-E-V-E-E-M-T-E-BI-N-S-S-I-N-CL-E-I-G-ÉM-N-IG-E-T-RÉ-H-E-R-M-TI-UL-C"},

    {info: "INFO: F02.0 W10(09.8) R01000-04000 P04.9 L0-0-0-2-2-2-3-1-0-0-0-0-0-0-0-0-0 S01 T0001 W042 >7x7-FRA-OY-ER-CO-ON-TI-ME-IÈ-PL-DÉ-NN-ER-SA-LI-UX-AN-SS-AI-NT-CI-VI-DE-CE-TO-UR-ME-EN-ÉS-PR-EU-EF-RT-TI-TA-ER-RE-IL-LE-PO-ON-TI-FI-BO-CR-ÉD-IT-ID-EN-LA-VA"},
    {info: "INFO: F01.2 W06(09.8) R02000-04000 P08.2 L0-0-0-0-1-0-0-1-1-2-0-0-1-0-0-0-0 S01 T0024 W119 >7x7-FRA-E-R-R-E-G-LI-L-NVO-LE-E-NC-I-NT-E-TO-N-T-E-E-D-I-URM-E-N-D-R-R-É-N-V-E-É-P-U-C-O-CA-I-R-E-R-S-I-T-F-I-N-G-I"},
    {info: "INFO: F01.2 W07(08.6) R01000-04000 P07.0 L0-0-0-0-3-0-0-0-2-1-0-0-1-0-0-0-0 S01 T0014 W083 >7x7-FRA-U-L-R-E-U-A-CH-B-C-U-T-S-S-TÉ-E-D-P-TE-T-E-I-M-I-S-R-E-S-IL-È-I-S-IR-EN-P-B-ON-PÇ-I-O-NT-O-A-SO-U-T-R-CO-N-S"},
    {info: "INFO: F01.0 W06(08.2) R01000-04000 P08.2 L0-0-0-0-0-1-1-1-0-1-1-0-1-0-0-0-0 S01 T0045 W107 >7x7-FRA-N-T-H-T-U-U-T-E-U-O-I-E-R-N-E-S-I-T-P-O-I-M-S-A-S-N-O-C-U-I-L-L-E-L-L-O-C-R-X-R-I-O-R-B-E-U-C-A-U"},

    {info: "INFO: F02.0 W11(11.6) R02000-07000 P05.8 L0-0-0-0-0-5-3-3-0-0-0-0-0-0-0-0-0 S01 T0001 W040 >8x8-FRA-ON-DE-UR-NT-CO-MÉ-ÉR-AI-OF-RE-OI-RA-ON-DI-IN-RE-PR-RE-CT-DI-TI-TA-IT-RE-SS-OI-TI-SA-RI-TO-OQ-CR-CE-RE-ON-RR-CO-AU-UE-VI-AC-ND-PO-ES-RE-ON-ER-LL-TI-NS-CO-EX-AI-TI-IN-TE-TU-TI-ON-EM-PL-TA-RÉ-RP"},
    {info: "INFO: F01.3 W09(09.2) R02000-08000 P07.1 L0-0-0-0-0-1-3-2-1-1-1-0-0-0-0-0-0 S01 T0003 W084 >8x8-FRA-X-T-T-N-E-AR-NCE-A-E-R-AI-R-E-P-E-MBL-E-H-A-N-A-P-ESS-R-R-C-TR-Q-U-ILL-P-É-E-È-L-F-TÉ-I-O-D-U-Q-O-F-V-R-U-NT-P-L-E-F-O-I-R-ISA-CI-IS-D-U-S-DÉP-L-A"},
    {info: "INFO: F01.2 W07(10.6) R02000-08000 P09.1 L0-0-0-0-2-0-0-0-1-1-0-0-1-1-1-0-0 S01 T0003 W110 >8x8-FRA-O-I-R-E-O-N-R-RE-IS-R-É-T-I-N-ER-LO-N-T-D-C-R-LE-É-CO-A-D-N-E-F-UB-L-E-P-P-O-E-R-ME-T-C-A-L-P-P-R-O-R-I-D-AU-S-E-R-C-T-Q-I-S-S-E-M-E-N-UE"},
    {info: "INFO: F01.0 W07(09.1) R02000-08000 P09.1 L0-0-0-0-0-2-0-0-1-0-1-1-1-1-0-0-0 S01 T0004 W094 >8x8-FRA-O-U-S-I-A-E-S-H-H-N-O-I-S-T-É-A-T-N-E-T-R-C-D-B-T-D-U-C-É-U-S-I-R-A-E-R-É-E-L-L-B-R-S-N-T-R-P-L-Â-E-S-I-D-D-É-O-T-I-R-S-É-R-E-Y"},
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
        case "FIN3":
            options.challenges = challengeSetFIN3;
            globals.storage    = strorageName + "-FIN3";
            break;
        case "SWE":
            options.challenges = challengeSetSWE;
            globals.storage    = strorageName + "-SWE";
            break;
        case "SWE2":
            options.challenges = challengeSetSWE2;
            globals.storage    = strorageName + "-SWE2";
            break;
        case "ENG":
            options.challenges = challengeSetENG;
            globals.storage    = strorageName + "-ENG";
            break;
        case "ITA":
            options.challenges = challengeSetITA;
            globals.storage    = strorageName + "-ITA";
            break;
        case "ITA2":
            options.challenges = challengeSetITA2;
            globals.storage    = strorageName + "-ITA2";
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



