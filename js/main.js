const strorageName = "verborium/game-level";

/*****************************************************************************
 * Game challenges (levels)
 *****************************************************************************/
const challengeSetFIN = [
    {info: "INFO: F03.0 W05(09.6) R00000-02000 P03.2 L0-1-2-2-0-0-0-0 S01 T0000001 W010 >4x4-FIN-tio-raa-ope-uus-nti-noi-val-lis-mar-kki-tur-teä-taa-jas-pal-läh"},
    {info: "INFO: F02.3 W04(09.2) R00000-02000 P04.0 L0-1-1-0-1-1-0-0 S01 T0000001 W010 >4x4-FIN-lo-ude-ll-in-ta-ty-öl-en-itt-käs-li-sy-ely-ano-pi-ys"},
    {info: "INFO: F02.0 W05(06.4) R00000-02000 P03.2 L0-2-1-1-1-0-0-0 S01 T0000001 W016 >4x4-FIN-ka-ki-sa-ha-lk-pa-ri-pa-ju-lk-so-pr-en-in-es-of"},
    {info: "INFO: F01.6 W05(05.0) R00000-02000 P03.2 L0-1-2-2-0-0-0-0 S01 T0000003 W014 >4x4-FIN-aa-t-an-e-it-o-il-m-aa-h-il-m-ja-kaa-s-ä"},

    {info: "INFO: F02.2 W06(09.2) R00000-02000 P04.2 L0-0-2-2-1-1-0-0 S01 T0000001 W016 >5x5-FIN-att-om-hu-lu-rai-ava-si-tt-ää-vie-ti-kä-ma-ks-aa-nt-pre-en-sa-ot-de-si-in-la-ru"},
    {info: "INFO: F02.0 W06(08.3) R00000-02000 P04.2 L0-0-2-2-1-1-0-0 S01 T0000005 W017 >5x5-FIN-us-aa-st-en-in-ut-av-ka-ra-ll-pe-sa-ll-it-no-la-ta-ha-se-on-eä-lk-se-va-lu"},
    {info: "INFO: F01.6 W05(07.8) R00000-02000 P05.0 L0-0-1-0-3-0-1-0 S01 T0000001 W012 >5x5-FIN-a-i-nen-a-j-st-ja-ai-si-si-r-pan-il-s-ose-to-ä-ä-t-r-l-äh-e-t-p"},
    {info: "INFO: F01.3 W05(06.6) R00000-02000 P05.0 L0-0-2-0-1-1-0-1 S01 T0000036 W036 >5x5-FIN-au-tt-v-a-e-om-aa-a-a-l-hu-e-n-j-är-i-n-a-to-vi-a-h-l-u-a"},

    {info: "INFO: F02.3 W09(09.1) R01000-04000 P04.0 L0-0-4-2-2-1-0-0 S01 T0000001 W027 >6x6-FIN-nen-va-to-eh-ki-ti-vi-ki-ka-ko-ns-ert-ne-on-rt-ter-art-ikk-tto-en-io-vei-en-eli-mu-in-ll-set-in-st-us-vi-ho-ko-mmu-ni"},
    {info: "INFO: F02.0 W08(09.0) R01000-03000 P04.5 L0-0-1-3-3-1-0-0 S01 T0000001 W018 >6x6-FIN-ti-nt-mo-re-tu-va-en-in-kk-it-it-lu-im-mä-ar-eh-os-ut-lk-jä-ri-ti-su-ta-li-ai-ip-pu-sa-no-ja-rk-vi-vu-us-ma"},
    {info: "INFO: F01.9 W08(08.5) R01000-04000 P04.5 L0-0-2-3-2-0-0-1 S01 T0000009 W039 >6x6-FIN-aja-en-n-lli-eri-est-ent-rak-h-u-sur-rk-ai-k-a-ll-i-o-va-t-ine-n-t-s-s-a-ala-a-lus-ij-sau-vii-s-va-ta-a"},
    {info: "INFO: F01.4 W08(06.5) R01000-04000 P04.5 L0-0-3-2-1-1-0-1 S01 T0000006 W038 >6x6-FIN-l-k-ti-hu-o-mi-ii-ka-ä-a-hj-o-t-t-ä-jä-po-sä-aa-o-n-ä-lt-ve-at-kk-tä-t-ö-y-ka-a-ä-y-d-h"},

    {info: "INFO: F02.0 W12(08.2) R01000-04000 P04.1 L0-0-4-5-2-0-1-0 S01 T0000003 W032 >7x7-FIN-nt-me-tt-aa-en-in-ma-ää-il-tu-bj-su-ll-nn-uv-ne-is-ek-ra-ja-er-os-to-is-ti-pe-lä-tä-ma-va-oi-sä-en-in-kä-ht-at-on-og-ol-ym-yt-aa-im-at-ia-te-yt-tä"},
    {info: "INFO: F01.6 W10(07.6) R01000-04000 P04.9 L0-0-3-2-1-2-1-1 S01 T0000001 W044 >7x7-FIN-a-k-u-a-lu-re-o-s-ui-ul-sa-o-te-tu-i-vi-j-ak-ava-tt-k-va-sä-ne-i-kl-a-omp-me-t-n-u-s-s-ro-t-en-o-t-ik-ko-m-ää-pid-m-i-si-s-i"},
    {info: "INFO: F01.4 W10(07.1) R01000-04000 P04.9 L0-0-2-1-5-1-0-1 S01 T0000004 W046 >7x7-FIN-a-mi-l-so-t-s-i-a-k-k-u-e-r-a-e-k-a-as-a-i-m-r-äs-s-e-ja-t-t-in-il-tt-ll-ys-u-el-s-ri-he-pe-t-rä-er-in-öö-lä-ha-ll-i-ki"},
    {info: "INFO: F01.0 W09(05.4) R01000-04000 P05.4 L0-0-0-3-2-2-1-1 S01 T0000085 W100 >7x7-FIN-k-k-u-a-a-t-a-o-m-a-ä-k-t-a-i-l-i-ä-t-t-i-a-k-t-ä-t-k-i-s-i-r-i-k-r-u-v-a-u-p-a-s-h-i-s-a-a-n-i-t"},

    {info: "INFO: F02.0 W15(08.5) R02000-08000 P04.3 L0-0-2-8-4-1-0-0 S01 T0000003 W038 >8x8-FIN-ni-st-in-us-ul-ka-so-ve-yn-pa-ki-no-it-si-ja-ll-kä-ka-jä-ut-pe-ia-us-ut-ot-un-li-ua-so-op-in-ar-ar-kä-ve-vä-tä-ut-na-is-ku-va-il-la-yt-ad-la-ke-ke-rt-ka-st-nä-uk-us-ka-na-aa-ra-et-tu-as-st-la"},
    {info: "INFO: F01.5 W11(08.7) R03000-08000 P05.8 L0-0-0-1-5-1-3-1 S01 T0000005 W075 >8x8-FIN-ääk-j-k-a-a-t-lit-n-i-ek-o-o-k-p-u-ne-nen-koi-lu-m-k-ok-ru-li-lli-l-u-n-l-al-a-l-tee-ti-s-i-ko-jum-al-a-ris-m-e-k-a-ä-y-p-ko-s-nny-iu-s-f-r-i-t-ä-s-l-i-g-an-hä"},
    {info: "INFO: F01.3 W12(07.1) R02000-08000 P05.3 L0-0-1-4-1-3-2-1 S01 T0000005 W061 >8x8-FIN-a-tk-li-a-tu-t-t-ta-m-ia-l-jä-oh-y-i-n-it-t-a-ä-j-y-m-u-i-i-ah-t-s-vy-u-rj-n-ui-m-k-p-äi-h-o-t-ra-i-on-k-us-ra-t-k-a-s-rs-u-a-t-da-oa-t-n-u-t-r-p-an"},
    {info: "INFO: F01.0 W11(05.8) R03000-08000 P05.8 L0-0-0-2-2-4-2-1 S01 T0000049 W138 >8x8-FIN-e-k-t-a-i-n-k-a-ö-ö-j-j-ä-ä-t-s-m-i-l-k-n-u-r-i-k-i-r-e-a-p-e-e-s-e-v-m-i-t-i-v-t-t-i-t-s-t-r-i-i-u-k-i-ä-ä-ä-v-j-a-n-o-e-r-ä-j"},
];

const challengeSetFIN2 = [
    {info: "INFO: F02.1 W05(06.8) R00000-02000 P03.2 L0-2-1-1-1-0-0-0 S01 T0000003 W013 >4x4-FIN-kea-r-kes-k-vai-aka-t-us-yli-st-a-n-ty-aa-tys-imi"},

    {info: "INFO: F02.0 W09(08.1) R01000-04000 P04.0 L0-2-2-3-0-1-0-1 S01 T0000001 W016 >6x6-FIN-nen-ivo-ra-te-e-tti-li-l-iso-i-ari-aal-as-i-r-tor-tai-dem-til-at-nuo-auk-a-ulu-o-m-m-a-t-lu-p-tia-poh-o-nt-e"},
    {info: "INFO: F01.4 W08(06.5) R01000-04000 P04.5 L0-0-1-5-1-0-0-1 S01 T0000001 W038 >6x6-FIN-ho-ka-s-i-t-t-te-m-i-so-r-r-ry-t-r-al-mi-e-ki-s-la-l-i-s-n-aa-t-s-i-n-ju-lk-ai-su-pa-ko"},

    {info: "INFO: F01.6 W13(07.8) R02000-08000 P04.9 L0-0-3-4-0-4-1-1 S01 T0000004 W048 >8x8-FIN-a-tij-laa-o-kk-ati-a-m-k-i-m-hk-e-ve-toa-e-ui-tu-o-u-h-vil-va-mat-v-ine-all-mal-ön-pit-nu-s-a-n-j-u-aa-en-ii-m-e-k-k-u-tt-n-i-ä-a-s-u-s-y-ven-im-m-r-u-ho-ä-y-t-är-ä"},
    {info: "INFO: F01.4 W10(08.9) R02000-08000 P06.4 L0-0-0-0-2-3-4-1 S01 T0000003 W077 >8x8-FIN-j-t-ä-ai-v-a-a-t-oh-ie-m-h-t-ei-s-n-t-t-ys-v-a-i-to-me-aj-uu-ua-to-k-k-ku-u-en-s-st-h-ie-k-i-r-in-ll-do-o-mu-v-u-än-t-ia-li-tt-a-a-l-v-uk-ah-d-u-a-t-o-n"},
    {info: "INFO: F01.0 W11(05.8) R03000-08000 P05.8 L0-0-0-3-1-3-3-1 S01 T0000015 W118 >8x8-FIN-e-h-j-e-s-o-l-u-a-p-ä-k-s-y-m-k-r-k-h-y-y-e-i-a-o-a-ö-y-k-s-a-h-l-ö-h-v-s-u-v-a-o-l-s-u-u-a-r-u-p-k-i-l-l-i-r-a-ä-k-o-i-k-o-n-k"},
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


const challengeSetENG = [
    {info: "INFO: F03.0 W05(09.6) R00000-02000 P03.2 L0-1-2-2-0-0-0-0 S01 T0000001 W015 >4x4-ENG-fes-sor-con-end-pro-con-str-fri-vat-ser-uct-ion-ive-age-ant-adv"},
    {info: "INFO: F02.1 W04(08.5) R00000-02000 P04.0 L0-1-1-0-1-1-0-0 S01 T0000001 W010 >4x4-ENG-on-ti-er-ad-un-ica-di-le-mm-ce-ff-mo-co-en-er-tor"},
    {info: "INFO: F02.0 W04(08.0) R00000-02000 P04.0 L0-1-0-2-0-1-0-0 S01 T0000003 W014 >4x4-ENG-st-ra-nt-co-gn-si-te-da-if-ic-re-ic-ce-an-pu-bl"},
    {info: "INFO: F01.9 W04(07.5) R00000-02000 P04.0 L0-1-1-1-0-0-1-0 S01 T0000001 W007 >4x4-ENG-tio-u-b-tri-n-e-hin-is-ll-p-mac-d-ba-o-vel-de"},

    {info: "INFO: F02.3 W06(09.5) R00000-02000 P04.2 L0-0-2-2-1-1-0-0 S01 T0000004 W016 >5x5-ENG-on-pe-rs-on-al-ti-bu-ri-nt-co-on-de-rt-ake-inf-ati-un-ch-ar-lue-tig-es-inv-se-nce"},
    {info: "INFO: F02.0 W06(08.3) R00000-02000 P04.2 L0-0-1-4-0-1-0-0 S01 T0000003 W022 >5x5-ENG-rn-he-re-ns-tr-an-ut-me-co-uc-al-so-mb-er-ti-ys-er-sf-ur-on-is-tr-an-lo-co"},
    {info: "INFO: F01.7 W05(08.4) R00000-02000 P05.0 L0-0-1-1-1-1-1-0 S01 T0000006 W026 >5x5-ENG-ge-gua-lan-a-s-p-r-ov-ia-soc-de-a-ide-t-ion-m-ac-a-r-g-ic-t-n-e-um"},
    {info: "INFO: F01.4 W05(06.8) R00000-02000 P05.0 L0-0-2-0-1-1-0-1 S01 T0000022 W037 >5x5-ENG-ce-r-e-t-s-ri-p-i-n-i-c-ch-m-y-v-o-ar-ge-or-i-ns-id-er-t-c"},

    {info: "INFO: F02.3 W08(10.5) R01000-04000 P04.5 L0-0-1-3-3-1-0-0 S01 T0000001 W024 >6x6-ENG-on-ti-rep-lac-yme-nt-st-ra-ent-em-plo-em-mon-nt-un-ne-ce-un-de-le-va-fo-ssa-ry-ive-nct-ui-un-dat-ion-di-sti-eq-mo-de-st"},
    {info: "INFO: F02.0 W09(08.0) R00000-04000 P04.0 L0-0-3-4-1-1-0-0 S01 T0000003 W030 >6x6-ENG-cy-ra-cu-se-ni-or-nc-fu-ac-de-ta-il-ti-on-ty-il-gu-ed-op-ra-st-ce-in-ce-po-ti-lu-co-nv-an-se-on-il-im-po-rt"},
    {info: "INFO: F01.4 W08(06.1) R00000-04000 P04.5 L0-0-1-5-1-0-0-1 S01 T0000004 W048 >6x6-ENG-h-c-s-di-ma-ri-t-o-h-r-ry-p-c-l-c-i-s-ti-e-nd-iri-tua-l-a-x-te-sp-c-o-n-r-e-rd-o-o-k"},
    {info: "INFO: F01.2 W07(06.4) R00000-04000 P05.1 L0-0-3-0-0-2-1-1 S01 T0000026 W075 >6x6-ENG-si-st-e-r-e-c-as-t-n-o-i-n-lt-d-e-n-g-e-su-i-ev-ie-y-s-re-l-i-ld-e-b-d-e-c-a-t-a"},

    {info: "INFO: F02.0 W11(08.9) R00000-04000 P04.5 L0-0-0-7-3-1-0-0 S01 T0000005 W037 >7x7-ENG-bl-pu-pe-rc-ep-ti-se-ic-re-re-ti-si-on-er-nd-te-pu-ve-po-un-iv-en-ti-ta-in-st-in-so-cy-on-ce-en-va-ct-lu-on-si-es-er-lu-ab-ti-al-pr-of-ef-pr-le-on"},
    {info: "INFO: F01.5 W10(07.5) R00000-04000 P04.9 L0-0-1-4-2-2-0-1 S01 T0000001 W049 >7x7-ENG-od-dho-l-i-tre-a-he-t-ate-od-h-c-n-t-r-o-omm-c-e-a-l-i-p-acc-y-t-mys-g-c-b-li-r-e-r-or-a-u-c-ify-h-pe-em-l-p-qua-l-ea-din-g"},
    {info: "INFO: F01.4 W09(07.4) R01000-04000 P05.4 L0-0-0-2-3-3-0-1 S01 T0000001 W067 >7x7-ENG-gy-ce-su-rv-iv-ar-in-lo-n-a-l-al-s-em-o-ra-st-ba-c-q-u-e-t-u-fr-h-e-e-id-i-o-n-s-a-ns-b-e-p-o-c-r-f-u-i-ld-e-r-t-er"},
    {info: "INFO: F01.0 W09(05.4) R00000-04000 P05.4 L0-0-0-2-4-1-1-1 S01 T0000063 W105 >7x7-ENG-h-o-e-g-n-a-r-p-n-e-s-c-a-r-l-b-e-p-o-a-n-e-a-n-d-t-s-g-u-n-e-i-y-e-e-o-l-p-n-c-r-r-u-d-s-g-n-a-f"},

    {info: "INFO: F02.0 W15(08.5) R02000-08000 P04.3 L0-0-3-5-7-0-0-0 S01 T0000001 W048 >8x8-ENG-ed-bl-es-ry-da-co-ns-cy-oy-pl-si-ng-un-bo-pi-ra-un-em-nt-me-in-ta-va-si-at-cr-mi-dd-re-at-in-on-re-au-ve-ay-lu-ct-er-nd-bu-et-lv-te-re-an-al-te-ll-ce-ex-co-nc-ce-tu-en-en-ce-pr-op-ag-an-da-ev"},
    {info: "INFO: F01.4 W11(08.1) R02000-08000 P05.8 L0-0-0-2-4-1-2-2 S01 T0000001 W067 >8x8-ENG-ier-c-o-re-u-as-i-tt-m-e-l-on-i-re-ng-cu-p-r-n-r-c-t-a-ul-ol-coh-jo-u-ger-ia-t-c-a-l-ad-m-a-l-io-ir-f-i-e-a-n-p-n-c-i-m-d-c-o-e-t-ts-d-o-e-enc-inn-f-o-o"},
    {info: "INFO: F01.3 W11(07.5) R01000-08000 P05.8 L0-0-0-4-1-2-1-3 S01 T0000007 W071 >8x8-ENG-g-n-di-un-t-p-da-a-s-u-r-ro-a-n-h-to-s-e-d-e-ti-o-c-u-s-r-te-ba-y-a-l-os-i-st-gy-o-s-m-c-u-d-i-n-ol-i-i-t-re-m-s-i-ge-d-c-s-a-f-e-m-ch-wi-nd-sa-dr"},
    {info: "INFO: F01.0 W11(05.8) R01000-08000 P05.8 L0-0-0-1-4-3-2-1 S01 T0000044 W116 >8x8-ENG-e-l-p-e-g-r-t-e-o-p-m-r-t-e-a-r-i-s-a-k-c-o-u-u-w-e-s-a-p-l-n-c-o-n-o-i-p-l-a-c-r-r-y-t-c-d-u-a-g-e-t-f-i-s-w-t-r-e-e-m-o-d-e-a"},
];


const challengeSetITA = [
    {info: "INFO: F03.0 W05(09.6) R01000-02000 P03.2 L0-1-2-2-0-0-0-0 S01 T0000001 W010 >4x4-ITA-ARE-SAR-EBB-PRE-ORD-RIC-ERO-ZZI-MAG-IST-INT-ERE-URA-RAT-NTE-SSA"},
    {info: "INFO: F02.6 W04(10.5) R00000-02000 P04.0 L0-1-1-0-1-1-0-0 S01 T0000005 W009 >4x4-ITA-ILE-TA-NI-SPO-SAB-LI-BI-DI-EN-SOL-ITO-QUE-ISP-IND-ONE-STI"},
    {info: "INFO: F02.0 W04(08.0) R00000-02000 P04.0 L0-1-1-0-1-1-0-0 S01 T0000001 W013 >4x4-ITA-LE-RC-CI-PO-MA-OL-GR-UP-IO-AZ-PA-TR-NE-IO-ON-IM"},
    {info: "INFO: F01.6 W04(06.5) R00000-02000 P04.0 L0-1-1-1-0-0-1-0 S01 T0000001 W022 >4x4-ITA-OR-I-ERO-IB-R-GG-MA-L-I-P-R-ETI-A-S-E-PAR"},

    {info: "INFO: F02.2 W06(09.2) R00000-02000 P04.2 L0-0-3-1-0-2-0-0 S01 T0000003 W019 >5x5-ITA-DI-CH-IA-RAZ-UN-ZIO-TRU-NI-IO-IO-NE-COS-DE-NA-NE-SP-ON-IBI-RO-VA-DI-TA-LI-RI-LO"},
    {info: "INFO: F02.0 W06(08.3) R00000-02000 P04.2 L0-0-1-4-0-1-0-0 S01 T0000001 W018 >5x5-ITA-PR-IN-CO-ES-CC-IN-RI-NT-SO-SU-CI-PE-ON-IS-TA-FA-RI-AG-DO-VR-AF-PR-OT-NO-AN"},
    {info: "INFO: F01.5 W05(07.6) R00000-02000 P05.0 L0-0-1-1-1-1-1-0 S01 T0000004 W029 >5x5-ITA-T-RO-E-ESS-DOV-E-P-A-I-Z-STA-S-IN-G-AN-AR-GU-E-A-R-DO-I-N-D-GA"},
    {info: "INFO: F01.4 W05(06.8) R00000-02000 P05.0 L0-0-2-0-1-1-0-1 S01 T0000001 W019 >5x5-ITA-E-N-U-N-C-D-S-T-S-I-E-L-EL-CE-A-I-IN-AR-NA-O-MM-AG-E-PI-AN"},

    {info: "INFO: F02.3 W08(10.4) R01000-04000 P04.5 L0-0-2-2-2-2-0-0 S01 T0000003 W031 >6x6-ITA-NI-MI-AM-OP-ZA-EN-STR-NI-ZIO-ERA-DO-ND-AT-ORI-IN-AND-AN-TE-RE-RP-TE-AUT-ORI-ZZA-TE-ANT-TO-DI-IM-ZI-PO-ICI-RI-EN-PR-ONE"},
    {info: "INFO: F02.0 W09(08.0) R01000-04000 P04.0 L0-0-3-3-3-0-0-0 S01 T0000012 W047 >6x6-ITA-SE-IN-TI-EN-TA-OS-GN-LO-CO-EV-CO-EL-AN-EL-SI-FI-LI-IC-TE-PP-CA-RO-TE-OT-IO-PA-RI-NT-CE-IA-NO-AP-NE-CE-SS-AR"},
    {info: "INFO: F01.5 W07(07.6) R01000-04000 P05.1 L0-0-1-1-3-1-0-1 S01 T0000003 W046 >6x6-ITA-ONE-SI-ES-C-O-M-M-A-GGR-ERA-R-P-E-M-ARR-IV-E-S-B-B-R-O-DIF-I-A-N-T-PI-EN-DER-A-C-I-S-O-E"},
    {info: "INFO: F01.4 W07(07.1) R01000-04000 P05.1 L0-0-1-3-0-1-1-1 S01 T0000011 W051 >6x6-ITA-IO-IZ-ED-S-ER-IO-NE-I-NT-S-L-AR-T-N-ER-IN-GO-E-I-E-V-A-IC-G-A-RS-I-N-I-LO-D-A-C-I-L-C"},

    {info: "INFO: F02.0 W11(08.9) R00000-04000 P04.5 L0-0-1-5-4-1-0-0 S01 T0000001 W037 >7x7-ITA-LI-VO-RI-TO-UT-PO-SS-IN-RE-NE-IE-OD-PR-ES-NU-ME-LE-RT-UE-EG-SO-NO-IA-IA-PA-AP-OS-PR-IT-AL-NZ-SE-IM-NT-SE-CA-TO-HE-ES-EN-VO-RR-DI-DE-NG-LU-TO-BE-EB"},
    {info: "INFO: F01.6 W09(08.6) R01000-04000 P05.4 L0-0-0-2-4-1-1-1 S01 T0000004 W062 >7x7-ITA-G-R-I-AL-ON-ZI-RNA-Z-A-ME-VAL-UTA-INT-E-I-A-U-T-ZI-ONE-ALI-S-T-T-S-COM-ME-RCI-O-E-O-CO-A-L-L-S-P-I-ES-N-E-A-NZE-E-G-O-T-EV-SP"},
    {info: "INFO: F01.3 W08(08.1) R01000-04000 P06.1 L0-0-0-1-1-3-2-1 S01 T0000008 W072 >7x7-ITA-E-M-PL-A-RI-Z-I-ES-P-R-T-ON-Z-OR-I-C-E-E-DE-IO-GL-S-TO-ON-FR-T-T-A-I-S-S-ON-S-O-LL-M-E-A-C-VO-E-I-O-GI-G-O-T-AS-P"},
    {info: "INFO: F01.0 W09(05.4) R01000-04000 P05.4 L0-0-0-2-3-3-0-1 S01 T0000029 W119 >7x7-ITA-F-S-O-I-L-O-V-I-S-A-N-G-A-S-U-E-M-U-E-B-I-G-R-V-O-Z-L-T-E-R-E-D-I-A-A-F-I-G-P-M-E-T-A-R-U-E-S-T-A"},

    {info: "INFO: F02.0 W16(08.0) R00000-08000 P04.0 L0-0-5-7-3-1-0-0 S01 T0000003 W045 >8x8-ITA-TR-UZ-RI-BU-RI-NA-SC-SE-IS-IO-NT-TI-ST-RE-IM-CE-QU-NI-CO-FI-NE-TO-EN-AC-AN-TO-AV-RE-MO-SA-MO-FA-SC-IA-MO-CC-ON-SP-OR-TI-NO-NA-LE-RA-TO-IA-MO-VI-CO-BA-FA-SC-IS-CH-RI-TE-MO-IS-CL-CI-TA-SO-RG-EN"},
    {info: "INFO: F01.5 W11(08.5) R00000-08000 P05.8 L0-0-0-3-1-4-1-2 S01 T0000001 W101 >8x8-ITA-A-IOS-TO-A-S-RIP-PR-ESS-RE-G-C-A-S-RO-ONI-I-RIO-I-O-P-E-PON-P-P-E-L-E-M-A-ZZ-AR-A-NT-E-RE-A-G-I-T-EN-A-R-N-TE-I-N-ONO-G-E-N-TO-EM-O-D-N-P-MM-O-C-R-SUP-O-E-R"},
    {info: "INFO: F01.3 W11(07.7) R02000-08000 P05.8 L0-0-0-2-3-3-1-2 S01 T0000015 W090 >8x8-ITA-A-EL-V-O-R-P-O-SE-N-R-I-S-T-SS-TE-HE-D-O-PO-SS-E-ER-O-RG-IN-A-T-I-RO-E-S-BO-C-A-I-E-D-E-ES-O-R-P-AC-O-A-R-AV-N-IC-O-VO-C-I-B-DE-I-AM-BI-LU-T-A-E-C-L"},
    {info: "INFO: F01.0 W12(05.3) R00000-08000 P05.3 L0-0-0-3-5-2-1-1 S01 T0000039 W119 >8x8-ITA-I-U-C-U-R-I-N-U-R-S-S-T-T-A-T-P-I-C-I-O-E-T-I-R-V-O-G-G-T-I-N-A-C-L-R-A-Q-U-T-O-I-A-C-I-Z-Z-O-S-U-R-P-M-U-A-R-S-C-A-R-O-F-J-G-I"},

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
        case "FIN2":
            options.challenges = challengeSetFIN2;
            globals.storage    = strorageName + "-FIN2";
            break;
        case "FIN3":
            options.challenges = challengeSetFIN3;
            globals.storage    = strorageName + "-FIN3";
            break;
        case "SWE":
            options.challenges = challengeSetSWE;
            globals.storage    = strorageName + "-SWE";
            break;
        case "ENG":
            options.challenges = challengeSetENG;
            globals.storage    = strorageName + "-ENG";
            break;
        case "ITA":
            options.challenges = challengeSetITA;
            globals.storage    = strorageName + "-ITA";
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



