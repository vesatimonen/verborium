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

    {info: "INFO: F01.9 W11(08.3) R02000-08000 P04.5 L0-1-4-1-2-1-1-1 T010731 >7x7-FIN-e-ttu-u-ä-ij-s-k-a-a-l-i-a-fra-e-s-s-keu-p-p-asi-k-v-a-l-am-k-ärs-imys-us-tust-vas-k-mys-sy-vä-aili-virk-t-es-v-itte-lij-ja-ti-oin-i-n-vä-ä"},
    {info: "INFO: F01.8 W12(07.5) R02000-08000 P04.1 L0-1-2-4-5-0-0-0 T137679 >7x7-FIN-tä-i-va-p-ri-aa-tt-l-l-llo-us-t-aa-ostu-hi-tta-i-i-tk-eä-erm-e-a-ih-a-i-lla-h-d-taa-sata-ltää-i-ki-v-e-is-ta-is-ta-a-ä-tä-al-v-tu-t-tää-is"},
    {info: "INFO: F01.9 W12(07.8) R02000-08000 P04.1 L0-2-3-3-1-2-1-0 T170892 >7x7-FIN-evä-en-a-s-arvo-a-e-vas-m-vo-i-ton-kan-k-kii-ra-i-ton-a-a-l-t-ä-väl-s-uunn-h-l-ys-vi-l-inen-tu-t-i-jä-ä-ro-i-s-k-kuin-n-ne-eräi-en-kesk-pi-en"},
    {info: "INFO: F01.9 W11(08.4) R03000-07000 P04.5 L0-2-2-3-1-1-0-2 T010318 >7x7-FIN-a-vo-it-a-a-alt-oiv-sti-ra-t-vi-r-t-t-aton-m-a-ruko-taus-i-a-et-y-s-illa-i-t-a-jais-y-j-taks-s-aa-t-a-haut-ä-i-kyy-s-ruut-y-ri-tt-it-sek-p-e"},

    {info: "INFO: F01.5 W13(07.5) R03000-08000 P04.9 L0-0-0-6-5-0-1-1 T0840253 S0069 >8x8-FIN-o-k-graa-h-o-ek-n-s-a-k-fi-ta-m-ine-ään-a-uk-e-l-kä-y-n-k-k-s-yys-yhte-s-h-ai-t-ki-s-is-nä-o-r-a-t-jää-e-n-i-i-m-var-inti-kä-l-ute-s-k-a-t-io-r-i-as-u-b-l-j-a-i"},
    {info: "INFO: F01.5 W12(08.0) R02000-08000 P05.3 L0-0-0-5-2-2-2-1 T6141430 S0077 >8x8-FIN-o-t-s-u-ä-ä-l-e-r-e-a-utut-p-t-l-yt-e-l-l-ta-e-t-ä-ä-u-k-pit-a-ä-ä-yst-n-mot-a-ki-ttä-py-y-d-aa-ää-t-n-ä-a-tu-is-tt-p-yä-e-s-r-oma-ohd-i-ä-ätt-v-y-taa-h-k-seko"},
    {info: "INFO: F01.8 W13(08.9) R02000-08000 P04.9 L0-0-2-4-4-1-0-2 T0077798 S0049 >8x8-FIN-e-k-o-toi-nen-osit-t-a-ht-ym-ät-s-a-im-hu-inen-tu-m-ön-a-k-i-p-m-u-at-on-pu-i-k-t-le-to-i-s-utt-eel-m-u-a-m-er-ki-l-l-t-y-yn-inen-oll-inen-l-inen-uo-p-i-m-uod-inen-iall-kunn-s-e-a"},
    {info: "INFO: F01.4 W13(07.0) R02000-08000 P04.9 L0-0-0-8-2-0-2-1 T8848215 S0057 >8x8-FIN-i-t-a-n-s-t-y-ö-n-e-e-ner-i-u-v-h-u-t-g-min-a-n-t-y-mu-to-k-e-a-n-o-k-n-ine-aust-n-t-y-d-e-k-peri-m-mäin-a-r-t-unta-e-ys-t-en-mas-l-is-s-h-o-i-vir-m-a-a-r"},
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

const challengeSetITA = [
    {info: "INFO: F02.7 W07(06.1) R00000-01000 P02.3 L0-6-0-1-0-0-0-0 T0000099 S0016 >4x4-ITA-LINE-T-O-TE-A-ES-CCHI-NIEN-INI-T-PUBB-MATT-BAMB-A-LICO-INA"},
    {info: "INFO: F02.4 W06(06.3) R00000-01000 P02.7 L0-2-4-0-0-0-0-0 T0000294 S0015 >4x4-ITA-T-R-R-RDA-A-ATTA-POTE-GUA-VE-SERE-ES-RI-RE-RAC-C-ONTA"},
    {info: "INFO: F02.3 W05(07.4) R00000-01000 P03.2 L0-2-1-1-1-0-0-0 T0000117 S0014 >4x4-ITA-ILE-FAC-OSTO-UTT-ANTE-TA-NTO-PI-T-E-TR-IN-R-IMPO-L-O"},
    {info: "INFO: F02.1 W04(08.2) R00000-01000 P04.0 L0-1-1-1-0-0-1-0 T0000081 S0010 >4x4-ITA-E-T-ANTE-RO-LME-N-RT-IB-A-IM-PO-L-N-FI-MAGG-IORE"},

    {info: "INFO: F02.2 W07(07.9) R00000-01000 P03.6 L0-1-2-3-1-0-0-0 T0000341 S0029 >5x5-ITA-ERDI-A-RN-ATA-VITT-VEN-T-O-GI-OR-NE-OR-S-O-IA-ZIO-A-ILIT-T-AGOS-TTEN-A-IB-SS-PO"},
    {info: "INFO: F02.4 W08(07.4) R00000-01000 P03.1 L0-1-5-2-0-0-0-0 T0000491 S0015 >5x5-ITA-P-A-D-OV-EVA-ORDA-GAR-E-DI-VENT-IC-R-NERE-OTTE-ARE-N-N-CON-T-INUA-O-VA-RISP-OND-ERE"},
    {info: "INFO: F02.2 W07(07.7) R00000-01000 P03.6 L0-1-2-3-1-0-0-0 T0000234 S0020 >5x5-ITA-NTE-RAME-CU-ICOL-PART-ORA-L-SI-ARM-ENTE-E-AL-NS-IEM-E-REAL-ZO-I-Z-Z-TE-R-M-E-O"},
    {info: "INFO: F02.2 W07(08.0) R00000-01000 P03.6 L0-1-3-2-0-1-0-0 T0000581 S0027 >5x5-ITA-RITT-URA-MA-GA-RI-ADDI-GIOR-TIT-R-E-ISTI-NAL-A-PA-S-I-N-D-AG-I-ONA-PERS-I-IN-STE"},

    {info: "INFO: F01.9 W09(07.4) R00000-02000 P04.0 L0-0-4-4-0-0-0-1 T0045460 S0039 >6x6-ITA-ATI-C-E-NE-ZIO-TA-R-ST-N-T-NDI-NI-E-MAGI-N-I-CO-U-R-EMB-AI-A-E-S-CI-NOV-ES-PERT-I-A-F-RA-STA-CHIE-IN-B"},
    {info: "INFO: F01.8 W08(08.2) R00000-02000 P04.5 L0-0-4-1-0-2-0-1 T0093067 S0045 >6x6-ITA-F-IN-I-S-C-E-IC-H-I-T-E-DERE-R-E-ED-N-R-ON-DO-IAN-LASC-I-V-RISP-V-E-IRE-RE-ENI-E-SER-GA-RANT-D-OV-ESS"},
    {info: "INFO: F01.8 W08(08.2) R00000-02000 P04.5 L0-0-4-1-1-0-1-1 T0002930 S0042 >6x6-ITA-NI-TECN-IC-TALE-O-T-A-M-O-AMEN-FOND-N-D-O-O-V-I-APPU-R-I-G-I-T-P-O-I-L-USTA-I-OS-M-I-G-SPEC-IALM-ENTE"},
    {info: "INFO: F01.9 W08(08.8) R00000-02000 P04.5 L0-0-4-1-1-0-1-1 T0007480 S0036 >6x6-ITA-SE-LE-ING-RA-ACQU-IS-LAVO-RA-TORI-FE-OS-TO-A-I-C-CO-M-C-N-C-A-S-AT-ONFR-I-M-PA-TRUZ-IONE-ONTO-C-O-C-I-T-A"},

    {info: "INFO: F01.4 W10(07.1) R01000-04000 P04.9 L0-0-2-2-2-3-1-0 T3602651 S0065 >7x7-ITA-S-ABBA-N-DONO-A-I-OD-O-R-UZ-C-A-C-ST-A-ST-I-ONE-A-CI-CU-C-CO-R-AD-O-A-T-PA-R-I-QU-OG-L-CA-E-T-RSI-E-M-A-R-N-Z-A-V-M-A-D"},
    {info: "INFO: F01.4 W10(07.0) R01000-04000 P04.9 L0-0-1-5-1-1-1-1 T3706510 S0065 >7x7-ITA-I-S-AR-M-O-UO-S-A-U-M-R-C-N-A-E-N-E-FE-S-I-C-AR-T-D-ES-M-P-A-O-T-ET-SA-P-R-R-RAPP-RE-O-TIV-S-E-IM-ENTA-S-S-EN-E-NERE-A"},
    {info: "INFO: F01.4 W09(07.9) R01000-04000 P05.4 L0-0-0-4-1-1-2-1 T0127820 S0052 >7x7-ITA-I-H-I-R-E-I-T-T-C-TIVO-INI-EF-V-OLEN-E-S-U-R-D-IAPP-O-D-E-P-O-EN-G-NE-N-I-I-CATA-T-R-SE-G-S-EL-L-IB-A-M-OL-I-D-I-ER-I-B"},
    {info: "INFO: F01.5 W11(06.8) R00000-04000 P04.5 L0-0-3-6-0-0-0-2 T0445517 S0050 >7x7-ITA-PREC-PA-R-N-O-C-ORI-EDE-NTI-T-C-E-R-T-EQ-R-E-TA-RPE-T-T-U-F-UN-I-A-O-FA-E-N-TI-T-C-ER-COP-I-T-F-A-S-T-URA-OM-BR-A-A-TT-RU-B"},

    {info: "INFO: F01.5 W12(08.2) R00000-08000 P05.3 L0-0-2-3-1-2-3-1 T5933916 S0057 >8x8-ITA-NO-ER-F-IN-R-E-R-T-O-L-DUO-I-RA-P-E-I-E-O-VI-NDI-A-B-A-I-N-G-ONE-I-IC-R-A-UC-SIO-N-A-Z-ANO-E-M-SFID-U-L-I-I-T-ON-G-P-D-E-TR-RIP-AR-E-RA-A-TRA-HES-ORC-TO-N-IA-MP-I"},
    {info: "INFO: F01.8 W15(07.9) R02000-08000 P04.3 L0-0-6-3-4-1-0-1 T6859762 S0077 >8x8-ITA-T-ARE-O-ON-R-OVA-U-M-VISI-ANC-M-SOR-ANO-TR-OVE-TRAS-AN-AV-N-PRE-CI-C-ATA-FORM-DI-A-D-ER-U-A-I-C-AMO-M-E-E-NG-F-RC-REDE-SI-E-PI-O-TI-S-I-D-AR-S-P-O-APP-A-BB-E-REC-S-E-C-S-RIRE-DRE-AN"},
    {info: "INFO: F01.6 W13(08.1) R03000-08000 P04.9 L0-0-4-3-1-1-3-1 T5474397 S0068 >8x8-ITA-IF-I-I-DUT-F-ED-ER-DOV-C-CA-I-SE-A-E-AL-UN-E-P-ST-I-ARD-MB-O-QUE-D-S-TRI-T-REN-LO-IC-L-I-L-I-VI-COR-IN-ENTI-O-F-A-I-SIB-ILE-DIFF-ER-MB-F-U-Z-N-A-G-A-I-O-S-ES-SE-C-I-M-S"},
    {info: "INFO: F01.6 W12(08.5) R02000-08000 P05.3 L0-0-0-4-4-1-2-1 T2215659 S0037 >8x8-ITA-C-O-E-N-I-B-M-A-I-CIAM-C-IONE-OZ-S-C-B-R-MIN-O-A-D-CU-I-N-C-U-I-E-T-N-IONE-O-D-UCE-T-O-DIP-ENDE-LIZ-BO-O-Q-ORE-TERI-L-O-E-A-R-U-A-R-U-C-CENT-ISFA-P-A-T-AN-CI-R-S-ODD"},
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



