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



