
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
        title: "롤 블라인드",
        subtitle: "Roll Screen",
        mainImage: "/images/롤블라인드/roll_blind_main.jpg",
        description: "가장 기본적이고 심플한 창호 가림막으로, 상하로 작동하며 빛을 부드럽게 여과하거나 완벽하게 차단합니다. 군더더기 없는 디자인으로 어느 공간에나 자연스럽게 어우러지며, 경제적인 가격과 실용성을 동시에 갖춘 스테디셀러 제품입니다.",
        features: [
            "빛 조절 및 사생활 보호: 원단에 따라 채광량을 자유롭게 선택 가능",
            "에너지 효율: 여름철 열기 차단 및 겨울철 단열 효과",
            "공간 활용: 롤 말림 방식으로 좁은 공간에서도 효율적 사용",
            "다양한 원단: 일반, 암막, 방염, 썬스크린 등 폭넓은 선택지"
        ],
        specs: [
            { label: "소재", value: "Polyester 100%, PVC, Fiberglass 등" },
            { label: "작동방식", value: "Code Lock, One Code, Motorized" },
            { label: "기능성", value: "암막, 방염, 항균, 발수" },
            { label: "최대제작", value: "가로 300cm x 세로 450cm (원단별 상이)" }
        ],
        subTypes: [
            { name: "트렌솔", desc: "심플하고 모던한 디자인의 기본 롤스크린", image: "/images/롤블라인드/roll_trensoll.png" },
            { name: "카프리", desc: "고급스러운 텍스처와 은은한 광택감", image: "/images/롤블라인드/roll_capri.png" },
            { name: "라데나", desc: "자연스러운 직조감이 돋보이는 제품", image: "/images/롤블라인드/roll_radena.png" },
            { name: "퓨로룩스RR 1% 방염", desc: "강력한 자외선 차단과 방염 기능 (1%)", image: "/images/롤블라인드/roll_purolux_1_fr.jpg" },
            { name: "퓨로룩스RR 3% 방염", desc: "적절한 시야 확보와 차열 효과 (3%)", image: "/images/롤블라인드/roll_purolux_3_fr.jpg" },
            { name: "카멜레온 3% 방염", desc: "보는 각도에 따라 색감이 변하는 투톤 효과 (3%)", image: "/images/롤블라인드/roll_chameleon_3_fr.jpg" },
            { name: "카멜레온 1% 방염", desc: "고급스러운 펄감이 가미된 기능성 원단 (1%)", image: "/images/롤블라인드/roll_chameleon_1_fr.jpg" },
            { name: "썬스크린AT 3% 방염", desc: "효율적인 열 차단과 쾌적한 실내 환경 조성", image: "/images/롤블라인드/roll_sunscreen_at_3_fr.jpg" },
            { name: "썬스크린AT 1% 방염", desc: "눈부심 방지와 프라이버시 보호에 최적화", image: "/images/롤블라인드/roll_sunscreen_at_1_fr.jpg" },
            { name: "아카디아 암막", desc: "부드러운 컬러감의 고기능성 암막 스크린", image: "/images/롤블라인드/roll_arcadia_blackout.jpg" },
            { name: "메스티아", desc: "독특한 패턴과 질감으로 포인트가 되는 디자인", image: "/images/롤블라인드/roll_mestia.jpg" },
            { name: "솔트레이크 암막/방염", desc: "암막과 방염 기능을 동시에 갖춘 프리미엄 제품", image: "/images/롤블라인드/roll_saltlake_blackout_fr.jpg" },
            { name: "타히티", desc: "휴양지의 자연을 닮은 내추럴 텍스처", image: "/images/롤블라인드/roll_tahiti.jpg" },
            { name: "체로키 암막", desc: "차분하고 안정적인 분위기의 암막 롤스크린", image: "/images/롤블라인드/roll_cherokee_blackout.jpg" },
            { name: "마칼루 암막", desc: "깊이감 있는 컬러와 뛰어난 빛 차단력", image: "/images/롤블라인드/roll_makalu_blackout.jpg" },
            { name: "트레비", desc: "세련된 도시적 감성의 모던 스타일", image: "/images/롤블라인드/roll_trevi.jpg" },
            { name: "모레아", desc: "섬세한 패턴이 돋보이는 고급 원단", image: "/images/롤블라인드/roll_moray.jpg" },
            { name: "토리노 암막/방염", desc: "안전과 휴식을 위한 방염 암막 솔루션", image: "/images/롤블라인드/roll_torino_blackout_fr.jpg" },
            { name: "레인", desc: "비 내리는 듯한 감성적인 패턴", image: "/images/롤블라인드/roll_rain.jpg" },
            { name: "글리터", desc: "은은하게 반짝이는 펄이 매력적인 제품", image: "/images/롤블라인드/roll_glitter.jpg" },
            { name: "레놀라 암막/방염", desc: "고급 암막 원단에 방염 처리를 더한 안심 블라인드", image: "/images/롤블라인드/roll_lenola_blackout_fr.jpg" },
            { name: "레놀라 암막", desc: "완벽한 암막 효과로 수면 환경 개선", image: "/images/롤블라인드/roll_lenola_blackout.jpg" },
            { name: "엘바스", desc: "깔끔하고 단정한 느낌의 베이직 롤스크린", image: "/images/롤블라인드/roll_elbas.jpg" },
            { name: "체로키 암막/방염", desc: "체로키 암막의 고급스러움에 방염 기능 추가", image: "/images/롤블라인드/roll_cherokee_blackout_fr.jpg" },
            { name: "밀레 퍼펙트 암막/방염", desc: "최고 수준의 빛 차단율을 자랑하는 기능성 제품", image: "/images/롤블라인드/roll_millet_perfect_blackout_fr.jpg" },
            { name: "썬플렛 방염", desc: "화재 안전성을 높인 실용적인 방염 스크린", image: "/images/롤블라인드/roll_sunflat_fr.jpg" },
            { name: "로터스 암막", desc: "연꽃처럼 우아하고 부드러운 컬러감", image: "/images/롤블라인드/roll_lotus_blackout.jpg" },
            { name: "에코플렛", desc: "친환경 소재를 사용한 건강한 블라인드", image: "/images/롤블라인드/roll_ecoflat.jpg" },
            { name: "썬스크린 4TW 방염", desc: "트윌 조직으로 내구성이 뛰어난 썬스크린", image: "/images/롤블라인드/roll_sunscreen_tw_fr.jpg" },
            { name: "썬스크린 4DP 방염", desc: "독특한 조직감의 고기능성 방염 썬스크린", image: "/images/롤블라인드/roll_sunscreen_dp_fr.jpg" },
            { name: "솔티스99 방염", desc: "프랑스 서지페라리사의 명품 원단 (Soltis 99)", image: "/images/롤블라인드/roll_soltis99_fr.jpg" },
            { name: "솔티스99 방염-Alu", desc: "알루미늄 코팅으로 열 차단 효율 극대화", image: "/images/롤블라인드/roll_soltis99_alu_fr.jpg" },
            { name: "썬스크린 3N-1% 방염", desc: "촘촘한 1% 개방률로 프라이버시 보호 강화", image: "/images/롤블라인드/roll_sunscreen_3n1_fr.jpg" },
            { name: "썬스크린 3N-3% 메탈 방염", desc: "메탈릭한 마감으로 세련미와 기능성 겸비", image: "/images/롤블라인드/roll_sunscreen_3n3_metal_fr.jpg" },
            { name: "썬스크린 3N-3% 방염", desc: "표준적인 3% 개방률의 베스트셀러 썬스크린", image: "/images/롤블라인드/roll_sunscreen_3n3_fr.jpg" },
            { name: "누벨 암막/방염", desc: "부드러운 터치감의 고급 방염 암막", image: "/images/롤블라인드/roll_nouvelle_blackout_fr.jpg" },
            { name: "엑셀 암막/방염", desc: "합리적인 가격의 고기능성 암막/방염 제품", image: "/images/롤블라인드/roll_excel_blackout_fr.jpg" },
            { name: "에코스크린 방염", desc: "환경을 생각하는 친환경 방염 원단", image: "/images/롤블라인드/roll_ecoscreen_fr.jpg" },
            { name: "에코스크린 폼 암막/방염", desc: "폼 코팅으로 암막 효과를 높인 에코 스크린", image: "/images/롤블라인드/roll_ecoscreen_foam_blackout_fr.jpg" },
            { name: "파스텔 방염", desc: "화사한 파스텔 톤의 방염 롤스크린", image: "/images/롤블라인드/roll_pastel_fr.jpg" },
            { name: "마일드", desc: "은은하고 부드러운 컬러의 스테디셀러", image: "/images/롤블라인드/roll_mild.jpg" },
            { name: "비비드", desc: "생동감 넘치는 원색 컬러 포인트", image: "/images/롤블라인드/roll_vivid.jpg" },
            { name: "신디 방염", desc: "현대적인 감각의 패턴 방염 블라인드", image: "/images/롤블라인드/roll_cindy_fr.jpg" }
        ],
        recommendedFor: ["사무실", "학교", "베란다", "드레스룸"]
    },
    "combi": {
        id: "combi",
        title: "콤비 블라인드",
        subtitle: "Combi Blind",
        description: "원단과 망사가 규칙적으로 반복되는 이중 구조의 블라인드입니다. 두 원단을 교차시켜 채광과 통풍을 자유롭게 조절할 수 있어 실용성과 디자인을 모두 갖춘 베스트셀러 모델입니다. 닫혀있을 때도 답답하지 않고 은은한 채광 효과를 누릴 수 있습니다.",
        features: [
            "섬세한 채광 조절: 원단 교차 방식으로 빛의 유입량 미세 조절",
            "탁월한 통풍성: 망사 부분을 통해 바람이 잘 통하는 구조",
            "프라이버시 보호: 외부 시선 차단과 동시에 시야 확보 가능",
            "다채로운 디자인: 다양한 텍스처와 컬러 라인업 보유"
        ],
        specs: [
            { label: "소재", value: "Polyester 100%" },
            { label: "작동방식", value: "One Code System" },
            { label: "암막률", value: "50% ~ 99% (제품별 상이)" },
            { label: "관리법", value: "먼지떨이 사용 권장" }
        ],
        subTypes: [
            { name: "아델라 암막/방염", desc: "암막 기능과 방염 기능을 동시에 갖춘 기능성 블라인드", image: "/images/placeholder_combi_adela.jpg" },
            { name: "델로스 암막", desc: "세련된 텍스처와 뛰어난 빛 차단 효과", image: "/images/placeholder_combi_delos.jpg" },
            { name: "카리만 암막", desc: "모던한 컬러감의 고급 암막 콤비", image: "/images/placeholder_combi_kariman.jpg" },
            { name: "세잔 암막", desc: "은은한 투톤 컬러가 돋보이는 암막 제품", image: "/images/placeholder_combi_cezanne.jpg" },
            { name: "카밀라 암막/방염", desc: "화재 안전과 숙면을 위한 최적의 선택", image: "/images/placeholder_combi_camilla.jpg" },
            { name: "파르마 암막(일부방염)", desc: "고급스러운 원단감의 프리미엄 암막 블라인드", image: "/images/placeholder_combi_parma.jpg" },
            { name: "데이지 암막", desc: "산뜻한 느낌을 주는 암막 콤비", image: "/images/placeholder_combi_daisy.jpg" },
            { name: "렌토 암막", desc: "차분하고 아늑한 분위기를 연출하는 암막", image: "/images/placeholder_combi_lento.jpg" },
            { name: "올리브", desc: "자연스러운 컬러감의 베이직 콤비", image: "/images/placeholder_combi_olive.jpg" },
            { name: "루이스", desc: "깔끔하고 심플한 디자인의 인기 모델", image: "/images/placeholder_combi_louis.jpg" },
            { name: "린넨 지브라", desc: "린넨 룩의 내추럴한 질감이 특징", image: "/images/placeholder_combi_linen.jpg" },
            { name: "베일리", desc: "부드러운 색감으로 공간을 화사하게", image: "/images/placeholder_combi_bailey.jpg" },
            { name: "팀버룩 뷰", desc: "우드 텍스처를 살려 더욱 고급스러운 느낌", image: "/images/placeholder_combi_timber_view.jpg" },
            { name: "팀버룩", desc: "나뭇결 무늬가 살아있는 스테디셀러", image: "/images/placeholder_combi_timber.jpg" },
            { name: "모닝", desc: "아침 햇살 같은 부드러운 채광 효과", image: "/images/placeholder_combi_morning.jpg" },
            { name: "스파클", desc: "은은한 펄감이 공간에 포인트를 주는 제품", image: "/images/placeholder_combi_sparkle.jpg" },
            { name: "앰버", desc: "따뜻하고 안정감 있는 컬러 구성", image: "/images/placeholder_combi_amber.jpg" },
            { name: "메탈", desc: "세련되고 도시적인 감각의 메탈 룩", image: "/images/placeholder_combi_metal.jpg" }
        ],
        recommendedFor: ["거실", "아이방", "침실", "원룸"]
    },
    "wood": {
        id: "wood",
        title: "우드 블라인드",
        subtitle: "Wood Blind",
        description: "천연 원목의 중후함과 내추럴한 감성을 담은 프리미엄 블라인드입니다. 슬랫의 각도를 조절하여 햇살의 양을 세밀하게 컨트롤할 수 있으며, 뛰어난 열 차단 효과와 함께 공간의 품격을 한층 높여줍니다.",
        features: [
            "프리미엄 소재: 최상급 오동나무를 사용하여 가볍고 뒤틀림이 적음",
            "완벽한 빛 조절: 슬랫 회전(Tilting)으로 채광 및 시야 자유 조절",
            "안전성 강화: 모서리 라운딩 처리로 아이들이 있는 집에서도 안심",
            "다양한 컬러: 화이트, 내추럴, 월넛 등 인테리어 맞춤 컬러"
        ],
        specs: [
            { label: "소재", value: "오동나무(Paulownia), 소나무, 대나무 등" },
            { label: "슬랫크기", value: "50mm, 63mm" },
            { label: "작동방식", value: "One Code System (Easy Lift)" },
            { label: "부가기능", value: "UV 코팅, 방염 처리 가능" }
        ],
        subTypes: [
            { name: "엔틱에코오동나무", desc: "고풍스러운 엔틱 스타일의 친환경 오동나무", image: "/images/placeholder_wood_antique_eco.jpg" },
            { name: "방염 엔틱오동나무", desc: "화재 안전성을 더한 엔틱 스타일 오동나무", image: "/images/placeholder_wood_fire_antique.jpg" },
            { name: "방염오동나무", desc: "기본 오동나무에 방염 기능을 추가한 제품", image: "/images/placeholder_wood_fire.jpg" },
            { name: "천연우드(소나무)", desc: "자연 그대로의 질감을 살린 소나무 블라인드", image: "/images/placeholder_wood_pine_natural.jpg" },
            { name: "오동나무 25mm", desc: "슬림한 25mm 슬랫의 오동나무 블라인드", image: "/images/placeholder_wood_paul_25.jpg" },
            { name: "플레인오동나무 35mm", desc: "깔끔한 표면 처리의 35mm 오동나무", image: "/images/placeholder_wood_plain_35.jpg" },
            { name: "플레인오동나무", desc: "가장 대중적인 스탠다드 오동나무 모델", image: "/images/placeholder_wood_plain.jpg" },
            { name: "에코오동나무", desc: "가성비가 좋은 친환경 오동나무 제품", image: "/images/placeholder_wood_eco.jpg" },
            { name: "뉴질랜드소나무", desc: "뉴질랜드산 맑은 소나무 원목 사용", image: "/images/placeholder_wood_nz_pine.jpg" },
            { name: "바스우드", desc: "표면이 매끄럽고 균일한 최고급 피나무", image: "/images/placeholder_wood_basswood.jpg" },
            { name: "대나무", desc: "대나무 특유의 자연스러운 질감과 내구성", image: "/images/placeholder_wood_bamboo.jpg" },
            { name: "마루파 50mm", desc: "남미산 마루파 원목을 사용한 프리미엄 라인 (50mm)", image: "/images/placeholder_wood_marupa_50.jpg" },
            { name: "마루파 63mm", desc: "더 넓은 63mm 슬랫으로 웅장한 공간 연출", image: "/images/placeholder_wood_marupa_63.jpg" }
        ],
        recommendedFor: ["거실", "서재", "안방", "고급 상업공간"]
    },
    "triple": { // Maps to Innowin/Triple Shade conceptually
        id: "triple",
        title: "트리플/이노윈 쉐이드",
        subtitle: "Triple / Innowin Shade",
        description: "블라인드의 기능성과 커튼의 부드러움을 완벽하게 결합한 3중 구조 쉐이드입니다. 입체적인 베인(Vane)이 빛을 산란시켜 강한 자외선은 차단하고 실내를 부드럽고 아늑한 빛으로 채워줍니다. 창가에 우아함을 더해주는 고급스러운 선택입니다.",
        features: [
            "우아한 채광: 빛을 부드럽게 머금어 감성적인 분위기 연출",
            "입체적 구조: 3중 원단 구조로 단열 및 방음 효과 우수",
            "뷰 감상 최적화: 베인을 열었을 때 선명한 외부 조망 가능",
            "자외선 차단: 가구 및 인테리어 변색 방지 효과"
        ],
        specs: [
            { label: "소재", value: "Polyester 100% (Sheer + Solid + Back)" },
            { label: "베인크기", value: "55mm, 75mm" },
            { label: "작동방식", value: "Code System" },
        ],
        subTypes: [
            { name: "샹그릴라 암막 75mm", desc: "우아한 볼륨감과 암막 기능의 조화", image: "/images/placeholder_triple_shangrila_blackout.jpg" },
            { name: "샹그릴라 솔리드 75mm", desc: "빛을 부드럽게 산란시키는 고급 쉐이드", image: "/images/placeholder_triple_shangrila_solid.jpg" },
            { name: "이노센스 75mm", desc: "투명한 쉬어와 베인의 완벽한 결합", image: "/images/placeholder_triple_innosense.jpg" },
            { name: "이노센스 AT 75mm", desc: "더욱 섬세한 제직과 기능을 갖춘 모델", image: "/images/placeholder_triple_innosense_at.jpg" }
        ],
        recommendedFor: ["거실", "안방", "호텔 라운지"]
    },
    // Adding mappings for other types to generic placeholder data but preserving IDs
    "aluminum": {
        id: "aluminum",
        title: "알루미늄 블라인드",
        subtitle: "Aluminum Blind",
        description: "습기에 강한 알루미늄 소재로 제작되어 욕실이나 주방 등 물 사용이 많은 공간에 최적입니다. 슬림한 슬랫이 주는 모던하고 도시적인 느낌으로 오피스 인테리어로도 각광받고 있습니다.",
        features: [
            "탁월한 내구성: 습기 및 열에 강해 변형이 없음",
            "편리한 관리: 물청소 및 오염 제거가 매우 용이",
            "다양한 디자인: 솔리드, 타공, 펄, 우드 룩 등 다양한 표면 처리",
            "정교한 작동: 원코드 시스템으로 가볍고 부드러운 작동감"
        ],
        specs: [
            { label: "소재", value: "Aluminum Alloy 100%" },
            { label: "슬랫크기", value: "25mm, 50mm" },
            { label: "기능", value: "방수, 난연, 차열" }
        ],
        subTypes: [
            { name: "알루미늄 25mm 솔리드", desc: "깔끔하고 심플한 기본형 알루미늄 블라인드", image: "/images/placeholder_alu_25_solid.jpg" },
            { name: "알루미늄 25mm 펄", desc: "은은한 펄감으로 세련된 분위기 연출", image: "/images/placeholder_alu_25_pearl.jpg" },
            { name: "알루미늄 25mm 메탈", desc: "도시적이고 시크한 감각의 메탈 룩", image: "/images/placeholder_alu_25_metal.jpg" },
            { name: "알루미늄 25mm 풀타공", desc: "전체 타공으로 개방감과 시원한 통기성", image: "/images/placeholder_alu_25_fullperf.jpg" },
            { name: "알루미늄 35mm 솔리드", desc: "적당한 너비의 슬랫으로 안정감 있는 디자인", image: "/images/placeholder_alu_35_solid.jpg" },
            { name: "알루미늄 35mm 메탈", desc: "모던한 인테리어에 어울리는 메탈릭 컬러", image: "/images/placeholder_alu_35_metal.jpg" },
            { name: "알루미늄 35mm 풀타공", desc: "은은한 빛 투과와 외부 시야 확보", image: "/images/placeholder_alu_35_fullperf.jpg" },
            { name: "알루미늄 50mm 솔리드", desc: "넓은 슬랫으로 클래식하고 중후한 멋", image: "/images/placeholder_alu_50_solid.jpg" },
            { name: "알루미늄 50mm 메탈", desc: "강렬하고 임팩트 있는 메탈 스타일", image: "/images/placeholder_alu_50_metal.jpg" },
            { name: "알루미늄 50mm 투라인", desc: "두 줄의 포인트 라인으로 독창적인 디자인", image: "/images/placeholder_alu_50_twoline.jpg" },
            { name: "알루미늄 50mm 풀타공", desc: "대형 창호에 적합한 시원한 개방감", image: "/images/placeholder_alu_50_fullperf.jpg" },
            { name: "알루미늄 50mm 펄", desc: "넓은 슬랫에 펄을 입혀 고급스러운 공간 연출", image: "/images/placeholder_alu_50_pearl.jpg" }
        ],
        recommendedFor: ["욕실", "주방", "사무실", "실험실"]
    },
    "honeycomb": {
        id: "honeycomb",
        title: "허니콤 쉐이드",
        subtitle: "Honeycomb Shade",
        description: "육각형의 벌집(Honeycomb) 구조가 공기층을 형성하여 단열 및 보온 효과가 매우 뛰어난 에너지 절약형 블라인드입니다. 종이접기 같은 독특한 주름과 파스텔톤의 은은한 색감이 공간을 따뜻하고 감성적으로 만들어줍니다.",
        features: [
            "에너지 효율 1등급: 냉난방비 절감 효과 탁월",
            "흡음 효과: 육각 셀 구조가 소음을 흡수하여 조용한 실내 조성",
            "다양한 시스템: 탑다운-바텀업, 심플리시티 등 특수 작동 가능",
            "시스템 창호 호환: 슬림한 헤드레일로 틸트앤턴 창호에 적합"
        ],
        specs: [
            { label: "소재", value: "Non-woven Fabric (부직포 등)" },
            { label: "셀크기", value: "25mm, 26mm, 38mm Duotone/Fulltone" },
            { label: "작동", value: "Cord, Cordless, Motorized" }
        ],
        subTypes: [
            { name: "스페셜 25mm", desc: "독특한 질감과 패턴의 스페셜 라인", image: "/images/placeholder_honey_special_25.jpg" },
            { name: "쉬어 38mm", desc: "은은한 빛 투과로 감성적인 분위기 연출 (38mm)", image: "/images/placeholder_honey_sheer_38.jpg" },
            { name: "쉬어 25mm", desc: "부드러운 쉬어 소재의 25mm 허니콤", image: "/images/placeholder_honey_sheer_25.jpg" },
            { name: "실크암막 25mm", desc: "고급 실크 감촉에 암막 기능을 더한 제품", image: "/images/placeholder_honey_silk_blackout_25.jpg" },
            { name: "실크패턴 25mm", desc: "세련된 패턴이 가미된 실크 허니콤", image: "/images/placeholder_honey_silk_pattern_25.jpg" },
            { name: "암막 25mm", desc: "완벽한 빛 차단과 단열 효과", image: "/images/placeholder_honey_blackout_25.jpg" },
            { name: "실크 25mm", desc: "실크처럼 부드럽고 우아한 광택", image: "/images/placeholder_honey_silk_25.jpg" },
            { name: "한지 25mm", desc: "전통 한지의 멋을 살린 한국적 디자인", image: "/images/placeholder_honey_hanji_25.jpg" },
            { name: "폴라리스 25mm", desc: "선명한 컬러감과 내구성이 뛰어난 모델", image: "/images/placeholder_honey_polaris_25.jpg" },
            { name: "파스텔라 25mm", desc: "부드러운 파스텔 톤의 스테디셀러", image: "/images/placeholder_honey_pastella_25.jpg" },
            { name: "폴라리스 38mm", desc: "와이드한 셀 크기로 공기층 효율 극대화", image: "/images/placeholder_honey_polaris_38.jpg" },
            { name: "듀오톤 25mm", desc: "앞뒤가 다른 톤으로 입체적인 색감 연출", image: "/images/placeholder_honey_duotone_25.jpg" },
            { name: "풀톤 25mm", desc: "앞뒷면이 동일한 색상으로 깊이 있는 컬러감", image: "/images/placeholder_honey_fulltone_25.jpg" },
            { name: "듀오톤 암막 방염 25mm", desc: "암막과 방염 기능을 동시에 갖춘 듀오톤", image: "/images/placeholder_honey_duo_blackout_fr_25.jpg" },
            { name: "듀오톤 방염 38mm", desc: "38mm 셀 크기의 방염 듀오톤", image: "/images/placeholder_honey_duo_fr_38.jpg" },
            { name: "듀오톤 방염 25mm", desc: "화재 안전성을 높인 25mm 방염 허니콤", image: "/images/placeholder_honey_duo_fr_25.jpg" }
        ],
        recommendedFor: ["시스템창호", "아이방", "주택 썬룸"]
    },
    "inowin": { // Alias for Triple/Innowin if specifically requested separately. 
        id: "inowin",
        title: "이노윈 쉐이드",
        subtitle: "Innowin Shade",
        description: "블라인드의 기능성과 커튼의 부드러움을 결합한 3중 구조 쉐이드입니다. 베인(Vane)의 각도를 조절하여 빛을 부드럽게 여과시키며, 우아하고 아늑한 실내 분위기를 연출합니다.",
        features: [
            "부드러운 빛 산란 효과: 따스한 채광 연출",
            "자외선 차단: 실내 가구 보호",
            "고급스러운 디자인: 호텔 같은 분위기"
        ],
        specs: [
            { label: "소재", value: "Polyester" },
            { label: "타입", value: "3D Shade" }
        ],
        recommendedFor: ["거실", "침실"],
        subTypes: [
            { name: "샹그릴라 암막 75mm", desc: "우아한 볼륨감과 암막 기능의 조화", image: "/images/placeholder_triple_shangrila_blackout.jpg" },
            { name: "샹그릴라 솔리드 75mm", desc: "빛을 부드럽게 산란시키는 고급 쉐이드", image: "/images/placeholder_triple_shangrila_solid.jpg" },
            { name: "이노센스 75mm", desc: "투명한 쉬어와 베인의 완벽한 결합", image: "/images/placeholder_triple_innosense.jpg" },
            { name: "이노센스 AT 75mm", desc: "더욱 섬세한 제직과 기능을 갖춘 모델", image: "/images/placeholder_triple_innosense_at.jpg" }
        ]
    },
    "charlet": {
        id: "charlet",
        title: "샬렛 쉐이드",
        subtitle: "Charlet Shade",
        description: "로만 쉐이드의 우아함과 블라인드의 편리함을 결합한 제품입니다. 원단이 접히면서 올라가는 풍성한 볼륨감이 공간을 더욱 입체적이고 로맨틱하게 연출해줍니다.",
        features: ["로만 스타일의 볼륨감", "부드러운 원단 텍스처", "클래식한 분위기"],
        specs: [{ label: "소재", value: "Fabric" }],
        recommendedFor: ["침실", "거실"],
        subTypes: [
            { name: "일반형 샬렛", desc: "베이직한 원단으로 깔끔한 로만 스타일 연출", image: "/images/placeholder_charlet_basic.jpg" }
        ]
    },
    "natural": {
        id: "natural",
        title: "내츄럴 쉐이드",
        subtitle: "Natural Shade",
        description: "대나무, 종이, 마 등 자연 친화적인 소재의 질감을 그대로 살려 제작했습니다. 인공적이지 않은 자연스러운 멋과 은은한 향기, 편안한 채광이 힐링 공간을 완성합니다.",
        features: ["친환경 천연 소재", "통기성 우수", "동양적인 미학"],
        specs: [{ label: "소재", value: "Bamboo, Jute, Paper" }],
        recommendedFor: ["전원주택", "다도실", "한옥"],
        subTypes: [
            { name: "대나무 쉐이드", desc: "대나무 살을 엮어 만든 시원하고 내추럴한 쉐이드", image: "/images/placeholder_natural_bamboo.jpg" },
            { name: "종이/마 쉐이드", desc: "한지나 마 소재 느낌으로 동양적인 분위기 극대화", image: "/images/placeholder_natural_paper.jpg" }
        ]
    },
    "vertical": {
        id: "vertical",
        title: "버티컬 블라인드",
        subtitle: "Vertical Blind",
        description: "세로형 날개(Louver)가 좌우로 움직이며 회전하는 방식의 블라인드입니다. 층고가 높은 창이나 전면 통유리창, 곡면 창에도 설치가 용이하며 시원한 개방감을 선사합니다.",
        features: ["180도 회전 루버", "좌우 개폐 방식", "대형 창호에 적합"],
        specs: [{ label: "루버폭", value: "89mm, 127mm" }],
        recommendedFor: ["사무실", "발코니", "대형창"],
        subTypes: [
            { name: "TC 버티컬", desc: "가장 대중적인 직물 소재의 버티컬", image: "/images/placeholder_vert_tc.jpg" },
            { name: "암막 버티컬", desc: "빛 차단 기능을 더한 버티컬 블라인드", image: "/images/placeholder_vert_blackout.jpg" }
        ]
    },
    "klimt": {
        id: "klimt",
        title: "클림트 쉐이드",
        subtitle: "Klimt Shade",
        description: "예술적인 자수와 입체적인 패턴이 돋보이는 하이엔드 쉐이드입니다. 빛이 투과될 때 드러나는 독창적인 문양은 윈도우 셰이딩을 넘어 하나의 예술 작품과 같은 인테리어 효과를 줍니다.",
        features: ["독창적인 디자인 패턴", "고급 자수 디테일", "예술적 오브제 역할"],
        specs: [{ label: "스타일", value: "Artistic Shade" }],
        recommendedFor: ["갤러리", "고급 라운지", "포인트 공간"],
        subTypes: [
            { name: "뉴클림트", desc: "새로운 패턴으로 재해석된 클림트 쉐이드", image: "/images/placeholder_klimt_new.jpg" }
        ]
    },
    "uni-glide": {
        id: "uni-glide",
        title: "유니 글라이드",
        subtitle: "Uni-Glide",
        description: "버티컬의 기능성과 커튼의 쉬어함을 결합한 신개념 스마트 쉐이드입니다. 각각의 베인이 독립적으로 움직여 통행이 자유롭고, 개별 교체가 가능하여 유지보수가 매우 편리합니다.",
        features: ["독립된 베인 구조", "편리한 통행 (Walk-through)", "부분 교체 가능"],
        specs: [{ label: "작동", value: "Wand Control" }],
        recommendedFor: ["거실 베란다창", "시스템 도어"],
        subTypes: [
            { name: "유니글라이드 스톤", desc: "자연석의 질감을 모티브로 한 디자인", image: "/images/placeholder_uniglide_stone.jpg" },
            { name: "유니글라이드 서클", desc: "세련된 원형 패턴으로 공간의 율동감 부여", image: "/images/placeholder_uniglide_circle.jpg" },
            { name: "유니글라이드 코랄", desc: "산호초를 연상시키는 부드러운 텍스처", image: "/images/placeholder_uniglide_coral.jpg" },
            { name: "유니글라이드 리프", desc: "나뭇잎 패턴으로 내추럴한 감성 연출", image: "/images/placeholder_uniglide_leaf.jpg" },
            { name: "유니글라이드 플레인", desc: "군더더기 없는 깔끔한 솔리드 컬러 모델", image: "/images/placeholder_uniglide_plain.jpg" }
        ]
    },
    "honey-glide": {
        id: "honey-glide",
        title: "허니 글라이드",
        subtitle: "Honey-Glide",
        description: "허니콤 쉐이드의 우수한 단열 기능을 수직(Vertical) 형태로 구현한 제품입니다. 좌우로 부드럽게 슬라이딩되어 열고 닫기가 간편하며, 넓은 창이나 공간 분리용으로 탁월합니다.",
        features: ["수직형 허니콤 구조", "슬라이딩 개폐", "공간 분리 파티션 활용"],
        specs: [{ label: "구동", value: "Sliding System" }],
        recommendedFor: ["폴딩도어", "중문 대용", "넓은 창"],
        subTypes: [
            { name: "쉬어 45mm", desc: "부드러운 쉬어 원단의 허니 글라이드", image: "/images/placeholder_honeyglide_sheer_45.jpg" },
            { name: "풀톤 50mm", desc: "선명한 컬러감의 50mm 풀톤 모델", image: "/images/placeholder_honeyglide_fulltone_50.jpg" },
            { name: "풀톤 방염 50mm", desc: "화재 안전성을 갖춘 풀톤 방염 제품", image: "/images/placeholder_honeyglide_fulltone_fr_50.jpg" },
            { name: "듀오톤 50mm", desc: "입체적인 색감의 50mm 듀오톤 모델", image: "/images/placeholder_honeyglide_duotone_50.jpg" }
        ]
    }
};
