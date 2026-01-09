
export interface CurtainProduct {
    id: string; // e.g., 'four-seasons', 'blackout'
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    subTypes?: { name: string; desc: string }[];
    recommendedFor: string[];
}

export const CURTAIN_PRODUCTS: Record<string, CurtainProduct> = {
    "four-seasons": {
        id: "four-seasons",
        title: "사계절 커튼",
        subtitle: "Four Seasons Curtain",
        description: "사계절 내내 사용하기 좋은 적당한 두께감과 자연스러운 드레이프가 특징인 나비창의 시그니처 커튼입니다. 생활 암막 기능과 방한, 방풍 효과를 동시에 누릴 수 있어 실용적이며, 세균 번식을 억제하는 항균 가공으로 우리 가족 건강까지 생각했습니다.",
        features: [
            "적당한 두께감: 봄부터 겨울까지 사계절 내내 쾌적한 사용",
            "생활 암막: 일상 생활에 방해되지 않는 편안한 70% 암막률",
            "형상 기억 가공: 세탁 후에도 유지되는 완벽한 호텔식 주름",
            "항균 & 먼지 없는 원단: 아토피나 비염 걱정 없는 안심 소재"
        ],
        specs: [
            { label: "소재", value: "Premium Polyester 100%" },
            { label: "암막률", value: "약 60~70% (생활암막)" },
            { label: "주름방식", value: "형상기억 평주름 / 나비주름" },
            { label: "관리법", value: "울코스 세탁 / 건조기 사용 금지" }
        ],
        subTypes: [
            { name: "항균 안심 커튼", desc: "먼지와 진드기를 차단하는 알러지 케어 원단" },
            { name: "데일리 사계절", desc: "가장 베이직하고 유행을 타지 않는 스테디셀러" },
            { name: "호텔식 린넨룩", desc: "린넨의 내추럴한 질감은 살리고 구김은 줄인 제품" }
        ],
        recommendedFor: ["거실", "아이방", "신혼집", "침실"]
    },
    "blackout": {
        id: "blackout",
        title: "암막 커튼",
        subtitle: "Blackout Curtain",
        description: "빛을 90% 이상 차단하여 숙면을 돕고, 냉난방 효율을 높여주는 고기능성 커튼입니다. 3중직 원단으로 제작되어 도톰하고 포근하며, 외부 소음을 줄여주는 방음 효과까지 갖췄습니다. 호텔처럼 깊은 휴식을 원하는 분들께 추천합니다.",
        features: [
            "탁월한 빛 차단: 아침 햇살로부터 방해받지 않는 꿀잠 보장",
            "냉난방 에너지 절약: 겨울철 외풍 차단 및 여름철 열기 차단",
            "방음 효과: 도톰한 두께감으로 외부 소음 및 층간 소음 완화",
            "고급스러운 텍스처: 밋밋하지 않은 고급 원사 짜임"
        ],
        specs: [
            { label: "소재", value: "3중직 암막 원단 (Polyester 100%)" },
            { label: "암막률", value: "약 90~95%" },
            { label: "두께감", value: "도톰함 (겨울철 방한 효과 우수)" },
            { label: "기능", value: "방풍, 방한, 자외선 차단" }
        ],
        recommendedFor: ["침실", "서재", "홈시어터룸", "남향집"]
    },
    "perfect-blackout": {
        id: "perfect-blackout",
        title: "100% 암막 커튼",
        subtitle: "100% Perfect Blackout",
        description: "뒷면에 특수 암막 코팅 처리를 하여 빛을 100% 완벽하게 차단하는 최고 사양의 암막 커튼입니다. 낮에도 밤처럼 어두운 환경을 만들어주어 교대 근무자나 예민한 분들의 숙면에 필수적이며, 빔프로젝터 사용 시 완벽한 암실을 구현합니다.",
        features: [
            "완벽한 암실 효과: 빛 투과율 0%의 강력한 차단력",
            "최고의 단열 성능: 코팅막이 열과 냉기를 완벽히 차단",
            "깔끔한 핏: 특수 코팅 원단 특유의 힘 있는 주름 라인",
            "오염 방지: 생활 방수 기능으로 오염 관리가 용이"
        ],
        specs: [
            { label: "소재", value: "전면 디자인원단 + 후면 특수 암막코팅" },
            { label: "암막률", value: "100% (완전 차단)" },
            { label: "비고", value: "강한 햇빛에도 변색 없음" }
        ],
        recommendedFor: ["교대근무자 침실", "영화감상실", "회의실"]
    },
    "sheer": {
        id: "sheer",
        title: "속지/차르르 커튼",
        subtitle: "Sheer & Chiffon",
        description: "햇살을 머금어 공간을 화사하고 감성적으로 만들어주는 시폰/속지 커튼입니다. 하늘하늘한 드레이프성이 돋보이는 '차르르 커튼'은 단독으로도 훌륭한 인테리어가 되며, 겉커튼과 함께 레이어링하면 더욱 풍성하고 아늑한 분위기를 연출할 수 있습니다.",
        features: [
            "감성적인 채광: 직사광선은 막고 부드러운 산란광으로 변환",
            "프라이버시 보호: 밖에서는 안이 잘 보이지 않는 도톰한 시폰",
            "이음선 없는 제작: 광폭 원단을 사용하여 깔끔한 완성도",
            "부드러운 촉감: 실크처럼 매끄럽고 찰랑거리는 터치감"
        ],
        specs: [
            { label: "소재", value: "High-density Chiffon / Linen Sheer" },
            { label: "비침정도", value: "비침 적음 (헤비시폰) / 비침 있음 (린넨)" },
            { label: "제작방식", value: "이음선 없는 광폭 제작" },
            { label: "주름", value: "나비 주름 (2배 주름) 권장" }
        ],
        subTypes: [
            { name: "헤비 시폰(도톰)", desc: "비침이 거의 없어 단독 사용이 가능한 인기 No.1" },
            { name: "린넨 속지", desc: "내추럴한 조직감이 살아있는 고급 속지" },
            { name: "자수 속지", desc: "은은한 자수 포인트로 우아함을 더한 스타일" }
        ],
        recommendedFor: ["거실", "카페", "신혼집 거실", "모든 창 레이어드"]
    }
};
