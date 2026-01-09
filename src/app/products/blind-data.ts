
export interface BlindProduct {
    id: string; // e.g., 'roll', 'combi'
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    subTypes?: { name: string; desc: string; image?: string }[];
    recommendedFor: string[];
    mainImage?: string;
}

export const BLIND_PRODUCTS: Record<string, BlindProduct> = {
    "roll": {
        id: "roll",
        title: "ë¡?ë¸”ë¼?¸ë“œ",
        subtitle: "Roll Screen",
        mainImage: "/1/images/roll-blinds/roll_blind_main.jpg",
        // ... 
        subTypes: [
            { name: "?¸ë Œ??, desc: "?¬í”Œ?˜ê³  ëª¨ë˜???”ì?¸ì˜ ê¸°ë³¸ ë¡¤ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_trensoll.png" },
            { name: "ì¹´í”„ë¦?, desc: "ê³ ê¸‰?¤ëŸ¬???ìŠ¤ì²˜ì? ?€?€??ê´‘íƒê°?, image: "/1/images/roll-blinds/roll_capri.png" },
            { name: "?¼ë°??, desc: "?ì—°?¤ëŸ¬??ì§ì¡°ê°ì´ ?‹ë³´?´ëŠ” ?œí’ˆ", image: "/1/images/roll-blinds/roll_radena.png" },
            { name: "?¨ë¡œë£©ìŠ¤RR 1% ë°©ì—¼", desc: "ê°•ë ¥???ì™¸??ì°¨ë‹¨ê³?ë°©ì—¼ ê¸°ëŠ¥ (1%)", image: "/1/images/roll-blinds/roll_purolux_1_fr.jpg" },
            { name: "?¨ë¡œë£©ìŠ¤RR 3% ë°©ì—¼", desc: "?ì ˆ???œì•¼ ?•ë³´?€ ì°¨ì—´ ?¨ê³¼ (3%)", image: "/1/images/roll-blinds/roll_purolux_3_fr.jpg" },
            { name: "ì¹´ë©œ?ˆì˜¨ 3% ë°©ì—¼", desc: "ë³´ëŠ” ê°ë„???°ë¼ ?‰ê°??ë³€?˜ëŠ” ?¬í†¤ ?¨ê³¼ (3%)", image: "/1/images/roll-blinds/roll_chameleon_3_fr.jpg" },
            { name: "ì¹´ë©œ?ˆì˜¨ 1% ë°©ì—¼", desc: "ê³ ê¸‰?¤ëŸ¬???„ê°??ê°€ë¯¸ëœ ê¸°ëŠ¥???ë‹¨ (1%)", image: "/1/images/roll-blinds/roll_chameleon_1_fr.jpg" },
            { name: "?¬ìŠ¤?¬ë¦°AT 3% ë°©ì—¼", desc: "?¨ìœ¨?ì¸ ??ì°¨ë‹¨ê³?ì¾Œì ???¤ë‚´ ?˜ê²½ ì¡°ì„±", image: "/1/images/roll-blinds/roll_sunscreen_at_3_fr.jpg" },
            { name: "?¬ìŠ¤?¬ë¦°AT 1% ë°©ì—¼", desc: "?ˆë???ë°©ì??€ ?„ë¼?´ë²„??ë³´í˜¸??ìµœì ??, image: "/1/images/roll-blinds/roll_sunscreen_at_1_fr.jpg" },
            { name: "?„ì¹´?”ì•„ ?”ë§‰", desc: "ë¶€?œëŸ¬??ì»¬ëŸ¬ê°ì˜ ê³ ê¸°?¥ì„± ?”ë§‰ ?¤í¬ë¦?, image: "/1/images/roll-blinds/roll_arcadia_blackout.jpg" },
            { name: "ë©”ìŠ¤?°ì•„", desc: "?…íŠ¹???¨í„´ê³?ì§ˆê°?¼ë¡œ ?¬ì¸?¸ê? ?˜ëŠ” ?”ì??, image: "/1/images/roll-blinds/roll_mestia.jpg" },
            { name: "?”íŠ¸?ˆì´???”ë§‰/ë°©ì—¼", desc: "?”ë§‰ê³?ë°©ì—¼ ê¸°ëŠ¥???™ì‹œ??ê°–ì¶˜ ?„ë¦¬ë¯¸ì—„ ?œí’ˆ", image: "/1/images/roll-blinds/roll_saltlake_blackout_fr.jpg" },
            { name: "?€?ˆí‹°", desc: "?´ì–‘ì§€???ì—°????? ?´ì¶”???ìŠ¤ì²?, image: "/1/images/roll-blinds/roll_tahiti.jpg" },
            { name: "ì²´ë¡œ???”ë§‰", desc: "ì°¨ë¶„?˜ê³  ?ˆì •?ì¸ ë¶„ìœ„ê¸°ì˜ ?”ë§‰ ë¡¤ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_cherokee_blackout.jpg" },
            { name: "ë§ˆì¹¼ë£??”ë§‰", desc: "ê¹Šì´ê°??ˆëŠ” ì»¬ëŸ¬?€ ?°ì–´??ë¹?ì°¨ë‹¨??, image: "/1/images/roll-blinds/roll_makalu_blackout.jpg" },
            { name: "?¸ë ˆë¹?, desc: "?¸ë ¨???„ì‹œ??ê°ì„±??ëª¨ë˜ ?¤í???, image: "/1/images/roll-blinds/roll_trevi.jpg" },
            { name: "ëª¨ë ˆ??, desc: "?¬ì„¸???¨í„´???‹ë³´?´ëŠ” ê³ ê¸‰ ?ë‹¨", image: "/1/images/roll-blinds/roll_moray.jpg" },
            { name: "? ë¦¬???”ë§‰/ë°©ì—¼", desc: "?ˆì „ê³??´ì‹???„í•œ ë°©ì—¼ ?”ë§‰ ?”ë£¨??, image: "/1/images/roll-blinds/roll_torino_blackout_fr.jpg" },
            { name: "?ˆì¸", desc: "ë¹??´ë¦¬????•œ ê°ì„±?ì¸ ?¨í„´", image: "/1/images/roll-blinds/roll_rain.jpg" },
            { name: "ê¸€ë¦¬í„°", desc: "?€?€?˜ê²Œ ë°˜ì§?´ëŠ” ?„ì´ ë§¤ë ¥?ì¸ ?œí’ˆ", image: "/1/images/roll-blinds/roll_glitter.jpg" },
            { name: "?ˆë????”ë§‰/ë°©ì—¼", desc: "ê³ ê¸‰ ?”ë§‰ ?ë‹¨??ë°©ì—¼ ì²˜ë¦¬ë¥??”í•œ ?ˆì‹¬ ë¸”ë¼?¸ë“œ", image: "/1/images/roll-blinds/roll_lenola_blackout_fr.jpg" },
            { name: "?ˆë????”ë§‰", desc: "?„ë²½???”ë§‰ ?¨ê³¼ë¡??˜ë©´ ?˜ê²½ ê°œì„ ", image: "/1/images/roll-blinds/roll_lenola_blackout.jpg" },
            { name: "?˜ë°”??, desc: "ê¹”ë”?˜ê³  ?¨ì •???ë‚Œ??ë² ì´ì§?ë¡¤ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_elbas.jpg" },
            { name: "ì²´ë¡œ???”ë§‰/ë°©ì—¼", desc: "ì²´ë¡œ???”ë§‰??ê³ ê¸‰?¤ëŸ¬?€??ë°©ì—¼ ê¸°ëŠ¥ ì¶”ê?", image: "/1/images/roll-blinds/roll_cherokee_blackout_fr.jpg" },
            { name: "ë°€???¼í™???”ë§‰/ë°©ì—¼", desc: "ìµœê³  ?˜ì???ë¹?ì°¨ë‹¨?¨ì„ ?ë‘?˜ëŠ” ê¸°ëŠ¥???œí’ˆ", image: "/1/images/roll-blinds/roll_millet_perfect_blackout_fr.jpg" },
            { name: "?¬í”Œ??ë°©ì—¼", desc: "?”ì¬ ?ˆì „?±ì„ ?’ì¸ ?¤ìš©?ì¸ ë°©ì—¼ ?¤í¬ë¦?, image: "/1/images/roll-blinds/roll_sunflat_fr.jpg" },
            { name: "ë¡œí„°???”ë§‰", desc: "?°ê½ƒì²˜ëŸ¼ ?°ì•„?˜ê³  ë¶€?œëŸ¬??ì»¬ëŸ¬ê°?, image: "/1/images/roll-blinds/roll_lotus_blackout.jpg" },
            { name: "?ì½”?Œë ›", desc: "ì¹œí™˜ê²??Œì¬ë¥??¬ìš©??ê±´ê°•??ë¸”ë¼?¸ë“œ", image: "/1/images/roll-blinds/roll_ecoflat.jpg" },
            { name: "?¬ìŠ¤?¬ë¦° 4TW ë°©ì—¼", desc: "?¸ìœŒ ì¡°ì§?¼ë¡œ ?´êµ¬?±ì´ ?°ì–´???¬ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_sunscreen_tw_fr.jpg" },
            { name: "?¬ìŠ¤?¬ë¦° 4DP ë°©ì—¼", desc: "?…íŠ¹??ì¡°ì§ê°ì˜ ê³ ê¸°?¥ì„± ë°©ì—¼ ?¬ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_sunscreen_dp_fr.jpg" },
            { name: "?”í‹°??9 ë°©ì—¼", desc: "?„ë‘???œì??˜ë¼ë¦¬ì‚¬??ëª…í’ˆ ?ë‹¨ (Soltis 99)", image: "/1/images/roll-blinds/roll_soltis99_fr.jpg" },
            { name: "?”í‹°??9 ë°©ì—¼-Alu", desc: "?Œë£¨ë¯¸ëŠ„ ì½”íŒ…?¼ë¡œ ??ì°¨ë‹¨ ?¨ìœ¨ ê·¹ë???, image: "/1/images/roll-blinds/roll_soltis99_alu_fr.jpg" },
            { name: "?¬ìŠ¤?¬ë¦° 3N-1% ë°©ì—¼", desc: "ì´˜ì´˜??1% ê°œë°©ë¥ ë¡œ ?„ë¼?´ë²„??ë³´í˜¸ ê°•í™”", image: "/1/images/roll-blinds/roll_sunscreen_3n1_fr.jpg" },
            { name: "?¬ìŠ¤?¬ë¦° 3N-3% ë©”íƒˆ ë°©ì—¼", desc: "ë©”íƒˆë¦?•œ ë§ˆê°?¼ë¡œ ?¸ë ¨ë¯¸ì? ê¸°ëŠ¥??ê²¸ë¹„", image: "/1/images/roll-blinds/roll_sunscreen_3n3_metal_fr.jpg" },
            { name: "?¬ìŠ¤?¬ë¦° 3N-3% ë°©ì—¼", desc: "?œì??ì¸ 3% ê°œë°©ë¥ ì˜ ë² ìŠ¤?¸ì????¬ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_sunscreen_3n3_fr.jpg" },
            { name: "?„ë²¨ ?”ë§‰/ë°©ì—¼", desc: "ë¶€?œëŸ¬???°ì¹˜ê°ì˜ ê³ ê¸‰ ë°©ì—¼ ?”ë§‰", image: "/1/images/roll-blinds/roll_nouvelle_blackout_fr.jpg" },
            { name: "?‘ì? ?”ë§‰/ë°©ì—¼", desc: "?©ë¦¬?ì¸ ê°€ê²©ì˜ ê³ ê¸°?¥ì„± ?”ë§‰/ë°©ì—¼ ?œí’ˆ", image: "/1/images/roll-blinds/roll_excel_blackout_fr.jpg" },
            { name: "?ì½”?¤í¬ë¦?ë°©ì—¼", desc: "?˜ê²½???ê°?˜ëŠ” ì¹œí™˜ê²?ë°©ì—¼ ?ë‹¨", image: "/1/images/roll-blinds/roll_ecoscreen_fr.jpg" },
            { name: "?ì½”?¤í¬ë¦????”ë§‰/ë°©ì—¼", desc: "??ì½”íŒ…?¼ë¡œ ?”ë§‰ ?¨ê³¼ë¥??’ì¸ ?ì½” ?¤í¬ë¦?, image: "/1/images/roll-blinds/roll_ecoscreen_foam_blackout_fr.jpg" },
            { name: "?ŒìŠ¤??ë°©ì—¼", desc: "?”ì‚¬???ŒìŠ¤???¤ì˜ ë°©ì—¼ ë¡¤ìŠ¤?¬ë¦°", image: "/1/images/roll-blinds/roll_pastel_fr.jpg" },
            { name: "ë§ˆì¼??, desc: "?€?€?˜ê³  ë¶€?œëŸ¬??ì»¬ëŸ¬???¤í…Œ?”ì???, image: "/1/images/roll-blinds/roll_mild.jpg" },
            { name: "ë¹„ë¹„??, desc: "?ë™ê°??˜ì¹˜???ìƒ‰ ì»¬ëŸ¬ ?¬ì¸??, image: "/1/images/roll-blinds/roll_vivid.jpg" },
            { name: "? ë”” ë°©ì—¼", desc: "?„ë??ì¸ ê°ê°???¨í„´ ë°©ì—¼ ë¸”ë¼?¸ë“œ", image: "/1/images/roll-blinds/roll_cindy_fr.jpg" }
        ],
        recommendedFor: ["?¬ë¬´??, "?™êµ", "ë² ë???, "?œë ˆ?¤ë£¸"]
    },
    "combi": {
        id: "combi",
        title: "ì½¤ë¹„ ë¸”ë¼?¸ë“œ",
        subtitle: "Combi Blind",
        description: "?ë‹¨ê³?ë§ì‚¬ê°€ ê·œì¹™?ìœ¼ë¡?ë°˜ë³µ?˜ëŠ” ?´ì¤‘ êµ¬ì¡°??ë¸”ë¼?¸ë“œ?…ë‹ˆ?? ???ë‹¨??êµì°¨?œì¼œ ì±„ê´‘ê³??µí’???ìœ ë¡?²Œ ì¡°ì ˆ?????ˆì–´ ?¤ìš©?±ê³¼ ?”ì?¸ì„ ëª¨ë‘ ê°–ì¶˜ ë² ìŠ¤?¸ì???ëª¨ë¸?…ë‹ˆ?? ?«í??ˆì„ ?Œë„ ?µë‹µ?˜ì? ?Šê³  ?€?€??ì±„ê´‘ ?¨ê³¼ë¥??„ë¦´ ???ˆìŠµ?ˆë‹¤.",
        features: [
            "?¬ì„¸??ì±„ê´‘ ì¡°ì ˆ: ?ë‹¨ êµì°¨ ë°©ì‹?¼ë¡œ ë¹›ì˜ ? ì…??ë¯¸ì„¸ ì¡°ì ˆ",
            "?ì›”???µí’?? ë§ì‚¬ ë¶€ë¶„ì„ ?µí•´ ë°”ëŒ?????µí•˜??êµ¬ì¡°",
            "?„ë¼?´ë²„??ë³´í˜¸: ?¸ë? ?œì„  ì°¨ë‹¨ê³??™ì‹œ???œì•¼ ?•ë³´ ê°€??,
            "?¤ì±„ë¡œìš´ ?”ì?? ?¤ì–‘???ìŠ¤ì²˜ì? ì»¬ëŸ¬ ?¼ì¸??ë³´ìœ "
        ],
        specs: [
            { label: "?Œì¬", value: "Polyester 100%" },
            { label: "?‘ë™ë°©ì‹", value: "One Code System" },
            { label: "?”ë§‰ë¥?, value: "50% ~ 99% (?œí’ˆë³??ì´)" },
            { label: "ê´€ë¦¬ë²•", value: "ë¨¼ì??¨ì´ ?¬ìš© ê¶Œì¥" }
        ],
        subTypes: [
            { name: "?„ë¸???”ë§‰/ë°©ì—¼", desc: "?”ë§‰ ê¸°ëŠ¥ê³?ë°©ì—¼ ê¸°ëŠ¥???™ì‹œ??ê°–ì¶˜ ê¸°ëŠ¥??ë¸”ë¼?¸ë“œ", image: "/1/images/placeholder_combi_adela.jpg" },
            { name: "?¸ë¡œ???”ë§‰", desc: "?¸ë ¨???ìŠ¤ì²˜ì? ?°ì–´??ë¹?ì°¨ë‹¨ ?¨ê³¼", image: "/1/images/placeholder_combi_delos.jpg" },
            { name: "ì¹´ë¦¬ë§??”ë§‰", desc: "ëª¨ë˜??ì»¬ëŸ¬ê°ì˜ ê³ ê¸‰ ?”ë§‰ ì½¤ë¹„", image: "/1/images/placeholder_combi_kariman.jpg" },
            { name: "?¸ì” ?”ë§‰", desc: "?€?€???¬í†¤ ì»¬ëŸ¬ê°€ ?‹ë³´?´ëŠ” ?”ë§‰ ?œí’ˆ", image: "/1/images/placeholder_combi_cezanne.jpg" },
            { name: "ì¹´ë????”ë§‰/ë°©ì—¼", desc: "?”ì¬ ?ˆì „ê³??™ë©´???„í•œ ìµœì ??? íƒ", image: "/1/images/placeholder_combi_camilla.jpg" },
            { name: "?Œë¥´ë§??”ë§‰(?¼ë?ë°©ì—¼)", desc: "ê³ ê¸‰?¤ëŸ¬???ë‹¨ê°ì˜ ?„ë¦¬ë¯¸ì—„ ?”ë§‰ ë¸”ë¼?¸ë“œ", image: "/1/images/placeholder_combi_parma.jpg" },
            { name: "?°ì´ì§€ ?”ë§‰", desc: "?°ëœ»???ë‚Œ??ì£¼ëŠ” ?”ë§‰ ì½¤ë¹„", image: "/1/images/placeholder_combi_daisy.jpg" },
            { name: "?Œí†  ?”ë§‰", desc: "ì°¨ë¶„?˜ê³  ?„ëŠ‘??ë¶„ìœ„ê¸°ë? ?°ì¶œ?˜ëŠ” ?”ë§‰", image: "/1/images/placeholder_combi_lento.jpg" },
            { name: "?¬ë¦¬ë¸?, desc: "?ì—°?¤ëŸ¬??ì»¬ëŸ¬ê°ì˜ ë² ì´ì§?ì½¤ë¹„", image: "/1/images/placeholder_combi_olive.jpg" },
            { name: "ë£¨ì´??, desc: "ê¹”ë”?˜ê³  ?¬í”Œ???”ì?¸ì˜ ?¸ê¸° ëª¨ë¸", image: "/1/images/placeholder_combi_louis.jpg" },
            { name: "ë¦°ë„¨ ì§€ë¸Œë¼", desc: "ë¦°ë„¨ ë£©ì˜ ?´ì¶”?´í•œ ì§ˆê°???¹ì§•", image: "/1/images/placeholder_combi_linen.jpg" },
            { name: "ë² ì¼ë¦?, desc: "ë¶€?œëŸ¬???‰ê°?¼ë¡œ ê³µê°„???”ì‚¬?˜ê²Œ", image: "/1/images/placeholder_combi_bailey.jpg" },
            { name: "?€ë²„ë£© ë·?, desc: "?°ë“œ ?ìŠ¤ì²˜ë? ?´ë ¤ ?”ìš± ê³ ê¸‰?¤ëŸ¬???ë‚Œ", image: "/1/images/placeholder_combi_timber_view.jpg" },
            { name: "?€ë²„ë£©", desc: "?˜ë­‡ê²?ë¬´ëŠ¬ê°€ ?´ì•„?ˆëŠ” ?¤í…Œ?”ì???, image: "/1/images/placeholder_combi_timber.jpg" },
            { name: "ëª¨ë‹", desc: "?„ì¹¨ ?‡ì‚´ ê°™ì? ë¶€?œëŸ¬??ì±„ê´‘ ?¨ê³¼", image: "/1/images/placeholder_combi_morning.jpg" },
            { name: "?¤íŒŒ??, desc: "?€?€???„ê°??ê³µê°„???¬ì¸?¸ë? ì£¼ëŠ” ?œí’ˆ", image: "/1/images/placeholder_combi_sparkle.jpg" },
            { name: "?°ë²„", desc: "?°ëœ»?˜ê³  ?ˆì •ê°??ˆëŠ” ì»¬ëŸ¬ êµ¬ì„±", image: "/1/images/placeholder_combi_amber.jpg" },
            { name: "ë©”íƒˆ", desc: "?¸ë ¨?˜ê³  ?„ì‹œ?ì¸ ê°ê°??ë©”íƒˆ ë£?, image: "/1/images/placeholder_combi_metal.jpg" }
        ],
        recommendedFor: ["ê±°ì‹¤", "?„ì´ë°?, "ì¹¨ì‹¤", "?ë£¸"]
    },
    "wood": {
        id: "wood",
        title: "?°ë“œ ë¸”ë¼?¸ë“œ",
        subtitle: "Wood Blind",
        description: "ì²œì—° ?ëª©??ì¤‘í›„?¨ê³¼ ?´ì¶”?´í•œ ê°ì„±???´ì? ?„ë¦¬ë¯¸ì—„ ë¸”ë¼?¸ë“œ?…ë‹ˆ?? ?¬ë«??ê°ë„ë¥?ì¡°ì ˆ?˜ì—¬ ?‡ì‚´???‘ì„ ?¸ë??˜ê²Œ ì»¨íŠ¸ë¡¤í•  ???ˆìœ¼ë©? ?°ì–´????ì°¨ë‹¨ ?¨ê³¼?€ ?¨ê»˜ ê³µê°„???ˆê²©???œì¸µ ?’ì—¬ì¤ë‹ˆ??",
        features: [
            "?„ë¦¬ë¯¸ì—„ ?Œì¬: ìµœìƒê¸??¤ë™?˜ë¬´ë¥??¬ìš©?˜ì—¬ ê°€ë³ê³  ?¤í?ë¦¼ì´ ?ìŒ",
            "?„ë²½??ë¹?ì¡°ì ˆ: ?¬ë« ?Œì „(Tilting)?¼ë¡œ ì±„ê´‘ ë°??œì•¼ ?ìœ  ì¡°ì ˆ",
            "?ˆì „??ê°•í™”: ëª¨ì„œë¦??¼ìš´??ì²˜ë¦¬ë¡??„ì´?¤ì´ ?ˆëŠ” ì§‘ì—?œë„ ?ˆì‹¬",
            "?¤ì–‘??ì»¬ëŸ¬: ?”ì´?? ?´ì¶”?? ?”ë„› ???¸í…Œë¦¬ì–´ ë§ì¶¤ ì»¬ëŸ¬"
        ],
        specs: [
            { label: "?Œì¬", value: "?¤ë™?˜ë¬´(Paulownia), ?Œë‚˜ë¬? ?€?˜ë¬´ ?? },
            { label: "?¬ë«?¬ê¸°", value: "50mm, 63mm" },
            { label: "?‘ë™ë°©ì‹", value: "One Code System (Easy Lift)" },
            { label: "ë¶€ê°€ê¸°ëŠ¥", value: "UV ì½”íŒ…, ë°©ì—¼ ì²˜ë¦¬ ê°€?? }
        ],
        subTypes: [
            { name: "?”í‹±?ì½”?¤ë™?˜ë¬´", desc: "ê³ í’?¤ëŸ¬???”í‹± ?¤í??¼ì˜ ì¹œí™˜ê²??¤ë™?˜ë¬´", image: "/1/images/placeholder_wood_antique_eco.jpg" },
            { name: "ë°©ì—¼ ?”í‹±?¤ë™?˜ë¬´", desc: "?”ì¬ ?ˆì „?±ì„ ?”í•œ ?”í‹± ?¤í????¤ë™?˜ë¬´", image: "/1/images/placeholder_wood_fire_antique.jpg" },
            { name: "ë°©ì—¼?¤ë™?˜ë¬´", desc: "ê¸°ë³¸ ?¤ë™?˜ë¬´??ë°©ì—¼ ê¸°ëŠ¥??ì¶”ê????œí’ˆ", image: "/1/images/placeholder_wood_fire.jpg" },
            { name: "ì²œì—°?°ë“œ(?Œë‚˜ë¬?", desc: "?ì—° ê·¸ë?ë¡œì˜ ì§ˆê°???´ë¦° ?Œë‚˜ë¬?ë¸”ë¼?¸ë“œ", image: "/1/images/placeholder_wood_pine_natural.jpg" },
            { name: "?¤ë™?˜ë¬´ 25mm", desc: "?¬ë¦¼??25mm ?¬ë«???¤ë™?˜ë¬´ ë¸”ë¼?¸ë“œ", image: "/1/images/placeholder_wood_paul_25.jpg" },
            { name: "?Œë ˆ?¸ì˜¤?™ë‚˜ë¬?35mm", desc: "ê¹”ë”???œë©´ ì²˜ë¦¬??35mm ?¤ë™?˜ë¬´", image: "/1/images/placeholder_wood_plain_35.jpg" },
            { name: "?Œë ˆ?¸ì˜¤?™ë‚˜ë¬?, desc: "ê°€???€ì¤‘ì ???¤íƒ ?¤ë“œ ?¤ë™?˜ë¬´ ëª¨ë¸", image: "/1/images/placeholder_wood_plain.jpg" },
            { name: "?ì½”?¤ë™?˜ë¬´", desc: "ê°€?±ë¹„ê°€ ì¢‹ì? ì¹œí™˜ê²??¤ë™?˜ë¬´ ?œí’ˆ", image: "/1/images/placeholder_wood_eco.jpg" },
            { name: "?´ì§ˆ?œë“œ?Œë‚˜ë¬?, desc: "?´ì§ˆ?œë“œ??ë§‘ì? ?Œë‚˜ë¬??ëª© ?¬ìš©", image: "/1/images/placeholder_wood_nz_pine.jpg" },
            { name: "ë°”ìŠ¤?°ë“œ", desc: "?œë©´??ë§¤ë„?½ê³  ê· ì¼??ìµœê³ ê¸??¼ë‚˜ë¬?, image: "/1/images/placeholder_wood_basswood.jpg" },
            { name: "?€?˜ë¬´", desc: "?€?˜ë¬´ ?¹ìœ ???ì—°?¤ëŸ¬??ì§ˆê°ê³??´êµ¬??, image: "/1/images/placeholder_wood_bamboo.jpg" },
            { name: "ë§ˆë£¨??50mm", desc: "?¨ë???ë§ˆë£¨???ëª©???¬ìš©???„ë¦¬ë¯¸ì—„ ?¼ì¸ (50mm)", image: "/1/images/placeholder_wood_marupa_50.jpg" },
            { name: "ë§ˆë£¨??63mm", desc: "???“ì? 63mm ?¬ë«?¼ë¡œ ?…ì¥??ê³µê°„ ?°ì¶œ", image: "/1/images/placeholder_wood_marupa_63.jpg" }
        ],
        recommendedFor: ["ê±°ì‹¤", "?œì¬", "?ˆë°©", "ê³ ê¸‰ ?ì—…ê³µê°„"]
    },
    "triple": { // Maps to Innowin/Triple Shade conceptually
        id: "triple",
        title: "?¸ë¦¬???´ë…¸???ì´??,
        subtitle: "Triple / Innowin Shade",
        description: "ë¸”ë¼?¸ë“œ??ê¸°ëŠ¥?±ê³¼ ì»¤íŠ¼??ë¶€?œëŸ¬?€???„ë²½?˜ê²Œ ê²°í•©??3ì¤?êµ¬ì¡° ?ì´?œì…?ˆë‹¤. ?…ì²´?ì¸ ë² ì¸(Vane)??ë¹›ì„ ?°ë??œì¼œ ê°•í•œ ?ì™¸? ì? ì°¨ë‹¨?˜ê³  ?¤ë‚´ë¥?ë¶€?œëŸ½ê³??„ëŠ‘??ë¹›ìœ¼ë¡?ì±„ì›Œì¤ë‹ˆ?? ì°½ê????°ì•„?¨ì„ ?”í•´ì£¼ëŠ” ê³ ê¸‰?¤ëŸ¬??? íƒ?…ë‹ˆ??",
        features: [
            "?°ì•„??ì±„ê´‘: ë¹›ì„ ë¶€?œëŸ½ê²?ë¨¸ê¸ˆ??ê°ì„±?ì¸ ë¶„ìœ„ê¸??°ì¶œ",
            "?…ì²´??êµ¬ì¡°: 3ì¤??ë‹¨ êµ¬ì¡°ë¡??¨ì—´ ë°?ë°©ìŒ ?¨ê³¼ ?°ìˆ˜",
            "ë·?ê°ìƒ ìµœì ?? ë² ì¸???´ì—ˆ????? ëª…???¸ë? ì¡°ë§ ê°€??,
            "?ì™¸??ì°¨ë‹¨: ê°€êµ?ë°??¸í…Œë¦¬ì–´ ë³€??ë°©ì? ?¨ê³¼"
        ],
        specs: [
            { label: "?Œì¬", value: "Polyester 100% (Sheer + Solid + Back)" },
            { label: "ë² ì¸?¬ê¸°", value: "55mm, 75mm" },
            { label: "?‘ë™ë°©ì‹", value: "Code System" },
        ],
        subTypes: [
            { name: "?¹ê·¸ë¦´ë¼ ?”ë§‰ 75mm", desc: "?°ì•„??ë³¼ë¥¨ê°ê³¼ ?”ë§‰ ê¸°ëŠ¥??ì¡°í™”", image: "/1/images/placeholder_triple_shangrila_blackout.jpg" },
            { name: "?¹ê·¸ë¦´ë¼ ?”ë¦¬??75mm", desc: "ë¹›ì„ ë¶€?œëŸ½ê²??°ë??œí‚¤??ê³ ê¸‰ ?ì´??, image: "/1/images/placeholder_triple_shangrila_solid.jpg" },
            { name: "?´ë…¸?¼ìŠ¤ 75mm", desc: "?¬ëª…???¬ì–´?€ ë² ì¸???„ë²½??ê²°í•©", image: "/1/images/placeholder_triple_innosense.jpg" },
            { name: "?´ë…¸?¼ìŠ¤ AT 75mm", desc: "?”ìš± ?¬ì„¸???œì§ê³?ê¸°ëŠ¥??ê°–ì¶˜ ëª¨ë¸", image: "/1/images/placeholder_triple_innosense_at.jpg" }
        ],
        recommendedFor: ["ê±°ì‹¤", "?ˆë°©", "?¸í…” ?¼ìš´ì§€"]
    },
    // Adding mappings for other types to generic placeholder data but preserving IDs
    "aluminum": {
        id: "aluminum",
        title: "?Œë£¨ë¯¸ëŠ„ ë¸”ë¼?¸ë“œ",
        subtitle: "Aluminum Blind",
        description: "?µê¸°??ê°•í•œ ?Œë£¨ë¯¸ëŠ„ ?Œì¬ë¡??œì‘?˜ì–´ ?•ì‹¤?´ë‚˜ ì£¼ë°© ??ë¬??¬ìš©??ë§ì? ê³µê°„??ìµœì ?…ë‹ˆ?? ?¬ë¦¼???¬ë«??ì£¼ëŠ” ëª¨ë˜?˜ê³  ?„ì‹œ?ì¸ ?ë‚Œ?¼ë¡œ ?¤í”¼???¸í…Œë¦¬ì–´ë¡œë„ ê°ê´‘ë°›ê³  ?ˆìŠµ?ˆë‹¤.",
        features: [
            "?ì›”???´êµ¬?? ?µê¸° ë°??´ì— ê°•í•´ ë³€?•ì´ ?†ìŒ",
            "?¸ë¦¬??ê´€ë¦? ë¬¼ì²­??ë°??¤ì—¼ ?œê±°ê°€ ë§¤ìš° ?©ì´",
            "?¤ì–‘???”ì?? ?”ë¦¬?? ?€ê³? ?? ?°ë“œ ë£????¤ì–‘???œë©´ ì²˜ë¦¬",
            "?•êµ???‘ë™: ?ì½”???œìŠ¤?œìœ¼ë¡?ê°€ë³ê³  ë¶€?œëŸ¬???‘ë™ê°?
        ],
        specs: [
            { label: "?Œì¬", value: "Aluminum Alloy 100%" },
            { label: "?¬ë«?¬ê¸°", value: "25mm, 50mm" },
            { label: "ê¸°ëŠ¥", value: "ë°©ìˆ˜, ?œì—°, ì°¨ì—´" }
        ],
        subTypes: [
            { name: "?Œë£¨ë¯¸ëŠ„ 25mm ?”ë¦¬??, desc: "ê¹”ë”?˜ê³  ?¬í”Œ??ê¸°ë³¸???Œë£¨ë¯¸ëŠ„ ë¸”ë¼?¸ë“œ", image: "/1/images/placeholder_alu_25_solid.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 25mm ??, desc: "?€?€???„ê°?¼ë¡œ ?¸ë ¨??ë¶„ìœ„ê¸??°ì¶œ", image: "/1/images/placeholder_alu_25_pearl.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 25mm ë©”íƒˆ", desc: "?„ì‹œ?ì´ê³??œí¬??ê°ê°??ë©”íƒˆ ë£?, image: "/1/images/placeholder_alu_25_metal.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 25mm ?€?€ê³?, desc: "?„ì²´ ?€ê³µìœ¼ë¡?ê°œë°©ê°ê³¼ ?œì›???µê¸°??, image: "/1/images/placeholder_alu_25_fullperf.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 35mm ?”ë¦¬??, desc: "?ë‹¹???ˆë¹„???¬ë«?¼ë¡œ ?ˆì •ê°??ˆëŠ” ?”ì??, image: "/1/images/placeholder_alu_35_solid.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 35mm ë©”íƒˆ", desc: "ëª¨ë˜???¸í…Œë¦¬ì–´???´ìš¸ë¦¬ëŠ” ë©”íƒˆë¦?ì»¬ëŸ¬", image: "/1/images/placeholder_alu_35_metal.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 35mm ?€?€ê³?, desc: "?€?€??ë¹??¬ê³¼?€ ?¸ë? ?œì•¼ ?•ë³´", image: "/1/images/placeholder_alu_35_fullperf.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 50mm ?”ë¦¬??, desc: "?“ì? ?¬ë«?¼ë¡œ ?´ë˜?í•˜ê³?ì¤‘í›„??ë©?, image: "/1/images/placeholder_alu_50_solid.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 50mm ë©”íƒˆ", desc: "ê°•ë ¬?˜ê³  ?„íŒ©???ˆëŠ” ë©”íƒˆ ?¤í???, image: "/1/images/placeholder_alu_50_metal.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 50mm ?¬ë¼??, desc: "??ì¤„ì˜ ?¬ì¸???¼ì¸?¼ë¡œ ?…ì°½?ì¸ ?”ì??, image: "/1/images/placeholder_alu_50_twoline.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 50mm ?€?€ê³?, desc: "?€??ì°½í˜¸???í•©???œì›??ê°œë°©ê°?, image: "/1/images/placeholder_alu_50_fullperf.jpg" },
            { name: "?Œë£¨ë¯¸ëŠ„ 50mm ??, desc: "?“ì? ?¬ë«???„ì„ ?…í? ê³ ê¸‰?¤ëŸ¬??ê³µê°„ ?°ì¶œ", image: "/1/images/placeholder_alu_50_pearl.jpg" }
        ],
        recommendedFor: ["?•ì‹¤", "ì£¼ë°©", "?¬ë¬´??, "?¤í—˜??]
    },
    "honeycomb": {
        id: "honeycomb",
        title: "?ˆë‹ˆì½??ì´??,
        subtitle: "Honeycomb Shade",
        description: "?¡ê°?•ì˜ ë²Œì§‘(Honeycomb) êµ¬ì¡°ê°€ ê³µê¸°ì¸µì„ ?•ì„±?˜ì—¬ ?¨ì—´ ë°?ë³´ì˜¨ ?¨ê³¼ê°€ ë§¤ìš° ?°ì–´???ë„ˆì§€ ?ˆì•½??ë¸”ë¼?¸ë“œ?…ë‹ˆ?? ì¢…ì´?‘ê¸° ê°™ì? ?…íŠ¹??ì£¼ë¦„ê³??ŒìŠ¤?”í†¤???€?€???‰ê°??ê³µê°„???°ëœ»?˜ê³  ê°ì„±?ìœ¼ë¡?ë§Œë“¤?´ì¤?ˆë‹¤.",
        features: [
            "?ë„ˆì§€ ?¨ìœ¨ 1?±ê¸‰: ?‰ë‚œë°©ë¹„ ?ˆê° ?¨ê³¼ ?ì›”",
            "?¡ìŒ ?¨ê³¼: ?¡ê° ?€ êµ¬ì¡°ê°€ ?ŒìŒ???¡ìˆ˜?˜ì—¬ ì¡°ìš©???¤ë‚´ ì¡°ì„±",
            "?¤ì–‘???œìŠ¤?? ?‘ë‹¤??ë°”í??? ?¬í”Œë¦¬ì‹œ?????¹ìˆ˜ ?‘ë™ ê°€??,
            "?œìŠ¤??ì°½í˜¸ ?¸í™˜: ?¬ë¦¼???¤ë“œ?ˆì¼ë¡??¸íŠ¸?¤í„´ ì°½í˜¸???í•©"
        ],
        specs: [
            { label: "?Œì¬", value: "Non-woven Fabric (ë¶€ì§í¬ ??" },
            { label: "?€?¬ê¸°", value: "25mm, 26mm, 38mm Duotone/Fulltone" },
            { label: "?‘ë™", value: "Cord, Cordless, Motorized" }
        ],
        subTypes: [
            { name: "?¤í˜??25mm", desc: "?…íŠ¹??ì§ˆê°ê³??¨í„´???¤í˜???¼ì¸", image: "/1/images/placeholder_honey_special_25.jpg" },
            { name: "?¬ì–´ 38mm", desc: "?€?€??ë¹??¬ê³¼ë¡?ê°ì„±?ì¸ ë¶„ìœ„ê¸??°ì¶œ (38mm)", image: "/1/images/placeholder_honey_sheer_38.jpg" },
            { name: "?¬ì–´ 25mm", desc: "ë¶€?œëŸ¬???¬ì–´ ?Œì¬??25mm ?ˆë‹ˆì½?, image: "/1/images/placeholder_honey_sheer_25.jpg" },
            { name: "?¤í¬?”ë§‰ 25mm", desc: "ê³ ê¸‰ ?¤í¬ ê°ì´‰???”ë§‰ ê¸°ëŠ¥???”í•œ ?œí’ˆ", image: "/1/images/placeholder_honey_silk_blackout_25.jpg" },
            { name: "?¤í¬?¨í„´ 25mm", desc: "?¸ë ¨???¨í„´??ê°€ë¯¸ëœ ?¤í¬ ?ˆë‹ˆì½?, image: "/1/images/placeholder_honey_silk_pattern_25.jpg" },
            { name: "?”ë§‰ 25mm", desc: "?„ë²½??ë¹?ì°¨ë‹¨ê³??¨ì—´ ?¨ê³¼", image: "/1/images/placeholder_honey_blackout_25.jpg" },
            { name: "?¤í¬ 25mm", desc: "?¤í¬ì²˜ëŸ¼ ë¶€?œëŸ½ê³??°ì•„??ê´‘íƒ", image: "/1/images/placeholder_honey_silk_25.jpg" },
            { name: "?œì? 25mm", desc: "?„í†µ ?œì???ë©‹ì„ ?´ë¦° ?œêµ­???”ì??, image: "/1/images/placeholder_honey_hanji_25.jpg" },
            { name: "?´ë¼ë¦¬ìŠ¤ 25mm", desc: "? ëª…??ì»¬ëŸ¬ê°ê³¼ ?´êµ¬?±ì´ ?°ì–´??ëª¨ë¸", image: "/1/images/placeholder_honey_polaris_25.jpg" },
            { name: "?ŒìŠ¤?”ë¼ 25mm", desc: "ë¶€?œëŸ¬???ŒìŠ¤???¤ì˜ ?¤í…Œ?”ì???, image: "/1/images/placeholder_honey_pastella_25.jpg" },
            { name: "?´ë¼ë¦¬ìŠ¤ 38mm", desc: "?€?´ë“œ???€ ?¬ê¸°ë¡?ê³µê¸°ì¸??¨ìœ¨ ê·¹ë???, image: "/1/images/placeholder_honey_polaris_38.jpg" },
            { name: "?€?¤í†¤ 25mm", desc: "?ë’¤ê°€ ?¤ë¥¸ ?¤ìœ¼ë¡??…ì²´?ì¸ ?‰ê° ?°ì¶œ", image: "/1/images/placeholder_honey_duotone_25.jpg" },
            { name: "?€??25mm", desc: "?ë’·ë©´ì´ ?™ì¼???‰ìƒ?¼ë¡œ ê¹Šì´ ?ˆëŠ” ì»¬ëŸ¬ê°?, image: "/1/images/placeholder_honey_fulltone_25.jpg" },
            { name: "?€?¤í†¤ ?”ë§‰ ë°©ì—¼ 25mm", desc: "?”ë§‰ê³?ë°©ì—¼ ê¸°ëŠ¥???™ì‹œ??ê°–ì¶˜ ?€?¤í†¤", image: "/1/images/placeholder_honey_duo_blackout_fr_25.jpg" },
            { name: "?€?¤í†¤ ë°©ì—¼ 38mm", desc: "38mm ?€ ?¬ê¸°??ë°©ì—¼ ?€?¤í†¤", image: "/1/images/placeholder_honey_duo_fr_38.jpg" },
            { name: "?€?¤í†¤ ë°©ì—¼ 25mm", desc: "?”ì¬ ?ˆì „?±ì„ ?’ì¸ 25mm ë°©ì—¼ ?ˆë‹ˆì½?, image: "/1/images/placeholder_honey_duo_fr_25.jpg" }
        ],
        recommendedFor: ["?œìŠ¤?œì°½??, "?„ì´ë°?, "ì£¼íƒ ?¬ë£¸"]
    },
    "inowin": { // Alias for Triple/Innowin if specifically requested separately. 
        id: "inowin",
        title: "?´ë…¸???ì´??,
        subtitle: "Innowin Shade",
        description: "ë¸”ë¼?¸ë“œ??ê¸°ëŠ¥?±ê³¼ ì»¤íŠ¼??ë¶€?œëŸ¬?€??ê²°í•©??3ì¤?êµ¬ì¡° ?ì´?œì…?ˆë‹¤. ë² ì¸(Vane)??ê°ë„ë¥?ì¡°ì ˆ?˜ì—¬ ë¹›ì„ ë¶€?œëŸ½ê²??¬ê³¼?œí‚¤ë©? ?°ì•„?˜ê³  ?„ëŠ‘???¤ë‚´ ë¶„ìœ„ê¸°ë? ?°ì¶œ?©ë‹ˆ??",
        features: [
            "ë¶€?œëŸ¬??ë¹??°ë? ?¨ê³¼: ?°ìŠ¤??ì±„ê´‘ ?°ì¶œ",
            "?ì™¸??ì°¨ë‹¨: ?¤ë‚´ ê°€êµ?ë³´í˜¸",
            "ê³ ê¸‰?¤ëŸ¬???”ì?? ?¸í…” ê°™ì? ë¶„ìœ„ê¸?
        ],
        specs: [
            { label: "?Œì¬", value: "Polyester" },
            { label: "?€??, value: "3D Shade" }
        ],
        recommendedFor: ["ê±°ì‹¤", "ì¹¨ì‹¤"],
        subTypes: [
            { name: "?¹ê·¸ë¦´ë¼ ?”ë§‰ 75mm", desc: "?°ì•„??ë³¼ë¥¨ê°ê³¼ ?”ë§‰ ê¸°ëŠ¥??ì¡°í™”", image: "/1/images/placeholder_triple_shangrila_blackout.jpg" },
            { name: "?¹ê·¸ë¦´ë¼ ?”ë¦¬??75mm", desc: "ë¹›ì„ ë¶€?œëŸ½ê²??°ë??œí‚¤??ê³ ê¸‰ ?ì´??, image: "/1/images/placeholder_triple_shangrila_solid.jpg" },
            { name: "?´ë…¸?¼ìŠ¤ 75mm", desc: "?¬ëª…???¬ì–´?€ ë² ì¸???„ë²½??ê²°í•©", image: "/1/images/placeholder_triple_innosense.jpg" },
            { name: "?´ë…¸?¼ìŠ¤ AT 75mm", desc: "?”ìš± ?¬ì„¸???œì§ê³?ê¸°ëŠ¥??ê°–ì¶˜ ëª¨ë¸", image: "/1/images/placeholder_triple_innosense_at.jpg" }
        ]
    },
    "charlet": {
        id: "charlet",
        title: "?¬ë › ?ì´??,
        subtitle: "Charlet Shade",
        description: "ë¡œë§Œ ?ì´?œì˜ ?°ì•„?¨ê³¼ ë¸”ë¼?¸ë“œ???¸ë¦¬?¨ì„ ê²°í•©???œí’ˆ?…ë‹ˆ?? ?ë‹¨???‘íˆë©´ì„œ ?¬ë¼ê°€???ì„±??ë³¼ë¥¨ê°ì´ ê³µê°„???”ìš± ?…ì²´?ì´ê³?ë¡œë§¨?±í•˜ê²??°ì¶œ?´ì¤?ˆë‹¤.",
        features: ["ë¡œë§Œ ?¤í??¼ì˜ ë³¼ë¥¨ê°?, "ë¶€?œëŸ¬???ë‹¨ ?ìŠ¤ì²?, "?´ë˜?í•œ ë¶„ìœ„ê¸?],
        specs: [{ label: "?Œì¬", value: "Fabric" }],
        recommendedFor: ["ì¹¨ì‹¤", "ê±°ì‹¤"],
        subTypes: [
            { name: "?¼ë°˜???¬ë ›", desc: "ë² ì´ì§í•œ ?ë‹¨?¼ë¡œ ê¹”ë”??ë¡œë§Œ ?¤í????°ì¶œ", image: "/1/images/placeholder_charlet_basic.jpg" }
        ]
    },
    "natural": {
        id: "natural",
        title: "?´ì¸„???ì´??,
        subtitle: "Natural Shade",
        description: "?€?˜ë¬´, ì¢…ì´, ë§????ì—° ì¹œí™”?ì¸ ?Œì¬??ì§ˆê°??ê·¸ë?ë¡??´ë ¤ ?œì‘?ˆìŠµ?ˆë‹¤. ?¸ê³µ?ì´ì§€ ?Šì? ?ì—°?¤ëŸ¬??ë©‹ê³¼ ?€?€???¥ê¸°, ?¸ì•ˆ??ì±„ê´‘???ë§ ê³µê°„???„ì„±?©ë‹ˆ??",
        features: ["ì¹œí™˜ê²?ì²œì—° ?Œì¬", "?µê¸°???°ìˆ˜", "?™ì–‘?ì¸ ë¯¸í•™"],
        specs: [{ label: "?Œì¬", value: "Bamboo, Jute, Paper" }],
        recommendedFor: ["?„ì›ì£¼íƒ", "?¤ë„??, "?œì˜¥"],
        subTypes: [
            { name: "?€?˜ë¬´ ?ì´??, desc: "?€?˜ë¬´ ?´ì„ ??–´ ë§Œë“  ?œì›?˜ê³  ?´ì¶”?´í•œ ?ì´??, image: "/1/images/placeholder_natural_bamboo.jpg" },
            { name: "ì¢…ì´/ë§??ì´??, desc: "?œì???ë§??Œì¬ ?ë‚Œ?¼ë¡œ ?™ì–‘?ì¸ ë¶„ìœ„ê¸?ê·¹ë???, image: "/1/images/placeholder_natural_paper.jpg" }
        ]
    },
    "vertical": {
        id: "vertical",
        title: "ë²„í‹°ì»?ë¸”ë¼?¸ë“œ",
        subtitle: "Vertical Blind",
        description: "?¸ë¡œ??? ê°œ(Louver)ê°€ ì¢Œìš°ë¡??€ì§ì´ë©??Œì „?˜ëŠ” ë°©ì‹??ë¸”ë¼?¸ë“œ?…ë‹ˆ?? ì¸µê³ ê°€ ?’ì? ì°½ì´???„ë©´ ?µìœ ë¦¬ì°½, ê³¡ë©´ ì°½ì—???¤ì¹˜ê°€ ?©ì´?˜ë©° ?œì›??ê°œë°©ê°ì„ ? ì‚¬?©ë‹ˆ??",
        features: ["180???Œì „ ë£¨ë²„", "ì¢Œìš° ê°œí ë°©ì‹", "?€??ì°½í˜¸???í•©"],
        specs: [{ label: "ë£¨ë²„??, value: "89mm, 127mm" }],
        recommendedFor: ["?¬ë¬´??, "ë°œì½”??, "?€?•ì°½"],
        subTypes: [
            { name: "TC ë²„í‹°ì»?, desc: "ê°€???€ì¤‘ì ??ì§ë¬¼ ?Œì¬??ë²„í‹°ì»?, image: "/1/images/placeholder_vert_tc.jpg" },
            { name: "?”ë§‰ ë²„í‹°ì»?, desc: "ë¹?ì°¨ë‹¨ ê¸°ëŠ¥???”í•œ ë²„í‹°ì»?ë¸”ë¼?¸ë“œ", image: "/1/images/placeholder_vert_blackout.jpg" }
        ]
    },
    "klimt": {
        id: "klimt",
        title: "?´ë¦¼???ì´??,
        subtitle: "Klimt Shade",
        description: "?ˆìˆ ?ì¸ ?ìˆ˜?€ ?…ì²´?ì¸ ?¨í„´???‹ë³´?´ëŠ” ?˜ì´?”ë“œ ?ì´?œì…?ˆë‹¤. ë¹›ì´ ?¬ê³¼?????œëŸ¬?˜ëŠ” ?…ì°½?ì¸ ë¬¸ì–‘?€ ?ˆë„???°ì´?©ì„ ?˜ì–´ ?˜ë‚˜???ˆìˆ  ?‘í’ˆê³?ê°™ì? ?¸í…Œë¦¬ì–´ ?¨ê³¼ë¥?ì¤ë‹ˆ??",
        features: ["?…ì°½?ì¸ ?”ì???¨í„´", "ê³ ê¸‰ ?ìˆ˜ ?”í…Œ??, "?ˆìˆ ???¤ë¸Œ????• "],
        specs: [{ label: "?¤í???, value: "Artistic Shade" }],
        recommendedFor: ["ê°¤ëŸ¬ë¦?, "ê³ ê¸‰ ?¼ìš´ì§€", "?¬ì¸??ê³µê°„"],
        subTypes: [
            { name: "?´í´ë¦¼íŠ¸", desc: "?ˆë¡œ???¨í„´?¼ë¡œ ?¬í•´?ëœ ?´ë¦¼???ì´??, image: "/1/images/placeholder_klimt_new.jpg" }
        ]
    },
    "uni-glide": {
        id: "uni-glide",
        title: "? ë‹ˆ ê¸€?¼ì´??,
        subtitle: "Uni-Glide",
        description: "ë²„í‹°ì»¬ì˜ ê¸°ëŠ¥?±ê³¼ ì»¤íŠ¼???¬ì–´?¨ì„ ê²°í•©??? ê°œ???¤ë§ˆ???ì´?œì…?ˆë‹¤. ê°ê°??ë² ì¸???…ë¦½?ìœ¼ë¡??€ì§ì—¬ ?µí–‰???ìœ ë¡?³ , ê°œë³„ êµì²´ê°€ ê°€?¥í•˜??? ì?ë³´ìˆ˜ê°€ ë§¤ìš° ?¸ë¦¬?©ë‹ˆ??",
        features: ["?…ë¦½??ë² ì¸ êµ¬ì¡°", "?¸ë¦¬???µí–‰ (Walk-through)", "ë¶€ë¶?êµì²´ ê°€??],
        specs: [{ label: "?‘ë™", value: "Wand Control" }],
        recommendedFor: ["ê±°ì‹¤ ë² ë??¤ì°½", "?œìŠ¤???„ì–´"],
        subTypes: [
            { name: "? ë‹ˆê¸€?¼ì´???¤í†¤", desc: "?ì—°?ì˜ ì§ˆê°??ëª¨í‹°ë¸Œë¡œ ???”ì??, image: "/1/images/placeholder_uniglide_stone.jpg" },
            { name: "? ë‹ˆê¸€?¼ì´???œí´", desc: "?¸ë ¨???í˜• ?¨í„´?¼ë¡œ ê³µê°„???¨ë™ê°?ë¶€??, image: "/1/images/placeholder_uniglide_circle.jpg" },
            { name: "? ë‹ˆê¸€?¼ì´??ì½”ë„", desc: "?°í˜¸ì´ˆë? ?°ìƒ?œí‚¤??ë¶€?œëŸ¬???ìŠ¤ì²?, image: "/1/images/placeholder_uniglide_coral.jpg" },
            { name: "? ë‹ˆê¸€?¼ì´??ë¦¬í”„", desc: "?˜ë­‡???¨í„´?¼ë¡œ ?´ì¶”?´í•œ ê°ì„± ?°ì¶œ", image: "/1/images/placeholder_uniglide_leaf.jpg" },
            { name: "? ë‹ˆê¸€?¼ì´???Œë ˆ??, desc: "êµ°ë”?”ê¸° ?†ëŠ” ê¹”ë”???”ë¦¬??ì»¬ëŸ¬ ëª¨ë¸", image: "/1/images/placeholder_uniglide_plain.jpg" }
        ]
    },
    "honey-glide": {
        id: "honey-glide",
        title: "?ˆë‹ˆ ê¸€?¼ì´??,
        subtitle: "Honey-Glide",
        description: "?ˆë‹ˆì½??ì´?œì˜ ?°ìˆ˜???¨ì—´ ê¸°ëŠ¥???˜ì§(Vertical) ?•íƒœë¡?êµ¬í˜„???œí’ˆ?…ë‹ˆ?? ì¢Œìš°ë¡?ë¶€?œëŸ½ê²??¬ë¼?´ë”©?˜ì–´ ?´ê³  ?«ê¸°ê°€ ê°„í¸?˜ë©°, ?“ì? ì°½ì´??ê³µê°„ ë¶„ë¦¬?©ìœ¼ë¡??ì›”?©ë‹ˆ??",
        features: ["?˜ì§???ˆë‹ˆì½?êµ¬ì¡°", "?¬ë¼?´ë”© ê°œí", "ê³µê°„ ë¶„ë¦¬ ?Œí‹°???œìš©"],
        specs: [{ label: "êµ¬ë™", value: "Sliding System" }],
        recommendedFor: ["?´ë”©?„ì–´", "ì¤‘ë¬¸ ?€??, "?“ì? ì°?],
        subTypes: [
            { name: "?¬ì–´ 45mm", desc: "ë¶€?œëŸ¬???¬ì–´ ?ë‹¨???ˆë‹ˆ ê¸€?¼ì´??, image: "/1/images/placeholder_honeyglide_sheer_45.jpg" },
            { name: "?€??50mm", desc: "? ëª…??ì»¬ëŸ¬ê°ì˜ 50mm ?€??ëª¨ë¸", image: "/1/images/placeholder_honeyglide_fulltone_50.jpg" },
            { name: "?€??ë°©ì—¼ 50mm", desc: "?”ì¬ ?ˆì „?±ì„ ê°–ì¶˜ ?€??ë°©ì—¼ ?œí’ˆ", image: "/1/images/placeholder_honeyglide_fulltone_fr_50.jpg" },
            { name: "?€?¤í†¤ 50mm", desc: "?…ì²´?ì¸ ?‰ê°??50mm ?€?¤í†¤ ëª¨ë¸", image: "/1/images/placeholder_honeyglide_duotone_50.jpg" }
        ]
    }
};
