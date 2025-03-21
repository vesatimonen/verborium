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

const challengeSetENG = [
    {info: "INFO: F02.4 W06(06.3) R00000-01000 P02.7 L0-5-0-0-0-1-0-0 T0000437 S0022 >4x4-ENG-e-r-mill-g-p-o-ion-lass-t-r-sub-er-dred-hun-ject-moth"},
    {info: "INFO: F01.9 W05(06.2) R00000-01000 P03.2 L0-1-2-2-0-0-0-0 T0000112 S0025 >4x4-ENG-xpec-e-c-r-t-er-des-ibe-en-t-e-anno-n-o-t-unce"},
    {info: "INFO: F02.3 W05(07.4) R00000-01000 P03.2 L0-2-1-1-1-0-0-0 T0000339 S0026 >4x4-ENG-ful-d-o-m-use-e-r-o-sign-rn-mal-n-ifi-cant-tary-mili"},
    {info: "INFO: F01.5 W04(06.0) R00000-01000 P04.0 L0-2-0-1-0-0-0-1 T0000317 S0023 >4x4-ENG-e-nic-l-a-i-m-d-n-n-r-e-prop-i-s-t-osal"},

    {info: "INFO: F01.5 W04(09.2) R00000-02000 P06.2 L0-0-0-0-1-2-0-1 T0000493 S0038 >5x5-ENG-e-a-tion-rsa-co-sp-k-e-e-nv-p-a-r-xhi-b-p-h-c-e-it-r-o-a-n-io"},
    {info: "INFO: F01.6 W05(08.2) R00000-02000 P05.0 L0-1-1-0-0-2-0-1 T0001232 S0030 >5x5-ENG-c-h-e-rg-cha-a-ass-o-c-ect-o-r-at-i-coll-p-p-e-e-at-a-d-e-mon-str"},
    {info: "INFO: F01.5 W04(09.2) R00000-02000 P06.2 L0-0-0-1-0-1-1-1 T0002066 S0027 >5x5-ENG-e-pr-l-pr-o-se-nt-a-on-fe-n-mo-c-i-ss-a-de-r-a-t-ic-er-m-a-ic"},
    {info: "INFO: F01.6 W05(08.0) R00000-02000 P05.0 L0-0-3-0-0-0-0-2 T0001333 S0027 >5x5-ENG-oice-g-ion-i-n-h-ath-tat-p-ter-c-er-e-r-s-y-g-e-t-t-ou-tp-ut-a-r"},

    {info: "INFO: F01.7 W08(07.5) R01000-04000 P04.5 L0-1-2-1-2-1-0-1 T0012374 S0034 >6x6-ENG-e-id-pr-on-ti-a-u-r-t-s-nce-isl-g-g-inci-d-e-eg-y-l-e-ing-n-l-t-t-men-sign-mea-p-u-a-be-s-a-ast"},
    {info: "INFO: F01.5 W08(06.8) R00000-04000 P04.5 L0-1-1-4-0-0-1-1 T0031669 S0036 >6x6-ENG-n-o-i-d-r-corr-vi-on-t-q-ai-esp-nce-c-s-ue-n-ond-h-c-ca-l-rk-e-ec-a-nt-c-ma-t-k-l-p-u-l-a"},
    {info: "INFO: F01.6 W06(09.8) R01000-04000 P06.0 L0-0-0-1-1-2-1-1 T0000862 S0021 >6x6-ENG-ted-enc-o-u-ra-gi-es-nter-i-ue-q-ng-l-e-v-nt-e-r-a-f-si-pres-im-f-ent-un-nt-e-i-v-m-da-i-n-s-e"},
    {info: "INFO: F01.8 W08(08.2) R01000-04000 P04.5 L0-0-3-1-3-0-0-1 T0006230 S0042 >6x6-ENG-i-an-i-b-xhi-e-l-e-t-n-ach-m-tra-n-i-o-a-sto-aus-a-rage-e-v-ing-e-l-p-itan-opol-reas-t-o-u-q-metr-inc"},

    {info: "INFO: F01.8 W13(06.9) R01000-07000 P03.8 L0-1-7-1-3-0-1-0 T0006935 S0037 >7x7-ENG-i-rt-b-irri-ta-gna-resi-h-e-r-e-tion-tion-pic-s-e-c-ast-er-y-nic-g-ze-l-i-c-x-g-n-b-e-m-is-la-a-ni-a-z-b-d-aggr-es-ai-rg-ga-ins-ta-nt-sion"},
    {info: "INFO: F01.3 W10(06.5) R00000-06000 P04.9 L0-0-1-5-1-1-1-1 T8328632 S0078 >7x7-ENG-e-t-fo-rmu-te-i-c-p-a-te-la-d-r-a-a-lit-i-c-n-i-w-r-er-f-a-s-e-a-w-t-nis-c-h-r-q-y-jus-i-ra-s-t-ue-if-t-m-d-a-y-r"},
    {info: "INFO: F01.8 W11(07.9) R00000-08000 P04.5 L0-2-2-2-2-1-1-1 T0039064 S0045 >7x7-ENG-me-c-hani-ca-l-g-nin-f-a-b-n-i-m-stun-o-l-u-i-m-de-s-u-s-ked-shoc-a-mo-t-e-ted-lec-se-l-s-t-abl-id-pati-ory-ls-e-d-fo-rm-ent-com-pu-e-l"},
    {info: "INFO: F01.7 W12(07.1) R01000-07000 P04.1 L0-3-2-3-1-1-2-0 T0123827 S0044 >7x7-ENG-e-d-ft-i-r-nt-dime-ck-o-h-s-d-wim-se-ical-sw-a-l-low-s-e-log-n-o-ati-c-allo-t-on-i-mp-tom-s-wa-s-i-nat-sy-ecay-an-ua-r-l-nc-i-d-c-t-y"},

    {info: "INFO: F01.6 W14(07.4) R03000-16000 P04.6 L0-0-2-5-5-1-1-0 T9321413 S0047 >8x8-ENG-n-r-e-u-l-e-toot-hbr-t-r-v-o-b-var-d-ush-u-vi-ta-e-s-a-ft-op-oso-an-t-ib-io-v-o-o-st-ue-nt-a-tic-k-li-r-c-onq-y-r-war-as-n-ing-u-b-n-no-t-l-te-s-r-st-o-i-at-f-lema-ta"},
    {info: "INFO: F01.5 W17(05.5) R00000-15000 P03.8 L0-0-11-1-4-0-1-0 T2030280 S0056 >8x8-ENG-s-da-co-uc-h-s-e-r-h-w-dg-et-t-e-rta-nte-nk-i-bu-e-m-n-i-e-s-h-w-il-ta-e-qu-a-dow-a-mp-l-je-e-r-t-ckle-e-u-d-en-k-awa-e-hu-l-b-m-u-o-v-e-c-t-r-spo-t-s-un-rr"},
    {info: "INFO: F01.7 W14(07.6) R05000-16000 P04.6 L0-0-3-4-5-0-2-0 T1293235 S0074 >8x8-ENG-c-o-h-ere-matr-imon-i-a-ri-nth-i-nt-sh-a-bb-l-co-nee-an-t-w-i-y-g-u-dl-ess-d-kene-s-ti-n-nn-am-d-ema-blac-dis-t-e-t-e-d-nd-ing-pa-ra-re-s-i-t-i-l-t-r-o-f-all-e-n-e-m-i-s"},
    {info: "INFO: F01.5 W15(06.5) R00000-16000 P04.3 L0-0-7-3-2-1-1-1 T1478986 S0059 >8x8-ENG-t-s-p-h-e-r-nde-a-en-rm-o-t-ri-c-mi-b-sted-e-ik-r-l-a-nd-ou-au-exh-h-e-nd-leli-e-s-u-m-te-nd-ca-g-ht-c-i-c-c-n-oa-s-te-o-d-l-a-ke-l-ile-r-r-yria-m-l-i-m-o-saic-t"},
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



