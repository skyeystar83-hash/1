"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Star, Shield, Sun, Moon, Wind, Check, Info, X, ChevronRight, Home, Thermometer, Maximize2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { BLIND_PRODUCTS } from "./blind-data";
import { CURTAIN_PRODUCTS } from "./curtain-data";

type Category = "CURTAIN" | "BLIND";

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ProductsContent />
        </Suspense>
    );
}

function ProductsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Determine initial category based on URL
    const typeParam = searchParams.get('type');
    const categoryParam = searchParams.get('category');

    const [activeCategory, setActiveCategory] = useState<Category>("CURTAIN");



    // Derived view state - Check both Blind and Curtain products
    const [showSeasonPopup, setShowSeasonPopup] = useState(false);
    const [activeSeason, setActiveSeason] = useState<string | null>(null);

    const openSeasonPopup = (season: string) => {
        setActiveSeason(season);
        setShowSeasonPopup(true);
    };

    const activeProduct = (typeParam && BLIND_PRODUCTS[typeParam])
        ? BLIND_PRODUCTS[typeParam]
        : (typeParam && CURTAIN_PRODUCTS[typeParam])
            ? CURTAIN_PRODUCTS[typeParam]
            : null;

    useEffect(() => {
        if (categoryParam === 'blind' || (typeParam && BLIND_PRODUCTS[typeParam])) {
            setActiveCategory("BLIND");
        } else if (categoryParam === 'curtain' || (typeParam && CURTAIN_PRODUCTS[typeParam])) {
            setActiveCategory("CURTAIN");
        }
    }, [categoryParam, typeParam]);

    return (
        <div className="w-full bg-white text-deep-charcoal">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Navichang Products"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white p-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        나비창 프리미엄 컬렉션
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto mb-8">
                        공간의 품격을 높이는 최고의 선택, 나비창의 다양한 제품을 만나보세요.
                    </p>

                    {/* Category Switcher */}
                    <div className="inline-flex bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
                        <button
                            onClick={() => {
                                setActiveCategory("CURTAIN");
                                router.push('/products?category=curtain');
                            }}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${activeCategory === "CURTAIN"
                                ? "bg-white text-deep-charcoal shadow-lg transform scale-105"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            CURTAINS
                        </button>
                        <button
                            onClick={() => {
                                setActiveCategory("BLIND");
                                router.push('/products?category=blind');
                            }}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${activeCategory === "BLIND"
                                ? "bg-white text-deep-charcoal shadow-lg transform scale-105"
                                : "text-white hover:bg-white/10"
                                }`}
                        >
                            BLINDS
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb for Detail View */}
            {activeProduct && (
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-gray-500 border-b border-gray-100">
                    <Link href={`/products?category=${activeCategory === 'BLIND' ? 'blind' : 'curtain'}`} className="hover:text-accent-gold transition-colors">
                        {activeCategory === 'BLIND' ? 'Blinds' : 'Curtains'}
                    </Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-deep-charcoal">{activeProduct.title}</span>
                </div>
            )}

            {/* Main Content Area */}
            {activeCategory === "CURTAIN" ? (
                activeProduct ? (
                    <ProductDetailView product={activeProduct} />
                ) : (
                    <CurtainContent openSeasonPopup={openSeasonPopup} />
                )
            ) : (
                activeProduct ? (
                    <ProductDetailView product={activeProduct} />
                ) : (
                    <BlindContent />
                )
            )}

            {/* Season Popup Modal (Global) */}
            {showSeasonPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setShowSeasonPopup(false)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative h-48 bg-gray-200">
                            <Image
                                src="/1/images/hero-bg.jpg"
                                alt="Season Detail"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-3xl font-bold text-white">{activeSeason} Special</h3>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {activeSeason === "Spring & Summer"
                                    ? "봄과 여름에는 가벼운 소재와 밝은 컬러로 공간을 화사하게 만들어보세요. 자외선은 차단하면서도 바람은 잘 통하는 쉬폰 커튼이 베스트 셀러입니다."
                                    : "가을과 겨울에는 두께감 있는 암막 커튼으로 난방 효율을 높이세요. 포근한 텍스처와 웜톤 컬러가 집안의 온기를 지켜줍니다."
                                }
                            </p>

                            <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">Recommended Products</h4>
                            <ul className="space-y-3">
                                {[1, 2, 3].map((item) => (
                                    <li key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                        <div className="w-12 h-12 bg-gray-300 rounded overflow-hidden relative">
                                            <Image src="/1/images/premium_fabric.png" alt="Product" fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">추천 상품 {item}</div>
                                            <div className="text-xs text-gray-500">더 알아보기 &rarr;</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setShowSeasonPopup(false)}
                                className="w-full mt-8 py-3 bg-deep-charcoal text-white rounded-lg font-bold hover:bg-black transition-colors"
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function CurtainContent({ openSeasonPopup }: { openSeasonPopup: (season: string) => void }) {
    const router = useRouter();
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Product Introduction Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-accent-gold uppercase tracking-widest text-sm font-semibold">Curtain Collection</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">나비창 커튼 라인업</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        고객님의 라이프스타일과 공간에 완벽하게 어울리는 맞춤형 커튼을 제안합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Product 1: Chiffon/Sheer */}
                    <BlindCard
                        title="속지/차르르 커튼"
                        subtitle="Sheer & Chiffon"
                        description="호텔같은 우아함과 부드러운 채광을 선사하는 시그니처 시폰 커튼입니다. 하늘하늘한 드레이프성이 공간을 더욱 감성적으로 만들어줍니다."
                        rating={4.9}
                        tags={["호텔식", "차르르", "감성"]}
                        features={["고밀도 프리미엄 시폰", "이음선 없는 광폭 원단", "나비주름 완벽 가공"]}
                        onClick={() => router.push('/products?category=curtain&type=sheer')}
                    />

                    {/* Product 2: Blackout */}
                    <BlindCard
                        title="100% 암막 커튼"
                        subtitle="Perfect Blackout"
                        description="빛을 완벽하게 차단하여 숙면과 영화 감상에 최적화된 고기능성 암막 커튼입니다. 방풍과 단열 효과가 매우 뛰어나 냉난방비를 절감해줍니다."
                        rating={5.0}
                        tags={["완전암막", "단열효과", "숙면"]}
                        features={["빛 차단율 100%", "특수 코팅 방한 효과", "호텔식 무게감"]}
                        onClick={() => router.push('/products?category=curtain&type=perfect-blackout')}
                    />

                    {/* Product 3: Four Seasons */}
                    <BlindCard
                        title="사계절 커튼"
                        subtitle="Four Seasons Curtain"
                        description="적당한 두께감으로 사계절 내내 사용하기 좋은 데일리 커튼입니다. 겉커튼 하나만으로도 충분한 생활 암막과 방한 효과를 누릴 수 있습니다."
                        rating={4.8}
                        tags={["사계절", "생활암막", "실용성"]}
                        features={["항균/먼지없는 원단", "형상기억 가공 기본", "다양한 컬러 팔레트"]}
                        onClick={() => router.push('/products?category=curtain&type=four-seasons')}
                    />
                </div>
            </section>

            {/* Special Feature: Four Seasons Curtain */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1/images/premium_fabric.png"
                                alt="Four Seasons Curtain Detail"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-accent-gold flex items-center gap-2">
                                <Star className="w-4 h-4 fill-current" />
                                BEST SELLER
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <div>
                                <h3 className="text-Accent-gold text-sm font-bold tracking-widest uppercase mb-2 text-yellow-600">Special Edition</h3>
                                <h2 className="text-4xl font-bold mb-4">왜 '사계절 커튼'인가?</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    어떤 날씨에도, 어떤 공간에도 완벽하게 어우러지는 나비창의 사계절 커튼은
                                    기능성과 심미성을 동시에 만족시키는 최고의 선택입니다.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FeatureItem
                                    icon={<Sun className="w-6 h-6 text-orange-500" />}
                                    title="적절한 채광 조절"
                                    desc="강한 햇살은 부드럽게 막아주고, 실내는 환하게 밝혀줍니다."
                                />
                                <FeatureItem
                                    icon={<Wind className="w-6 h-6 text-blue-500" />}
                                    title="우수한 통기성"
                                    desc="답답하지 않은 소재로 쾌적한 공기 순환을 돕습니다."
                                />
                                <FeatureItem
                                    icon={<Shield className="w-6 h-6 text-green-500" />}
                                    title="생활 오염 방지"
                                    desc="특수 발수 코팅으로 일상적인 오염에 강합니다."
                                />
                                <FeatureItem
                                    icon={<Moon className="w-6 h-6 text-indigo-500" />}
                                    title="적당한 암막 효과"
                                    desc="생활 암막 기능으로 편안한 휴식을 보장합니다."
                                />
                            </div>

                            <div className="pt-4">
                                <button className="px-8 py-4 bg-deep-charcoal text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
                                    사계절 커튼 자세히 보기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">한눈에 보는 제품 비교</h2>
                    <p className="text-gray-500">나에게 딱 맞는 커튼을 찾아보세요</p>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-700">
                                <th className="p-6 font-bold border-b">구분</th>
                                <th className="p-6 font-bold border-b text-center">차르르 커튼</th>
                                <th className="p-6 font-bold border-b text-center bg-blue-50/50">사계절 커튼 (추천)</th>
                                <th className="p-6 font-bold border-b text-center">암막 커튼</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { label: "소재", val1: "폴리/시폰", val2: "린넨 룩 폴리", val3: "3중직 암막지" },
                                { label: "암막률", val1: "0 ~ 10%", val2: "50 ~ 70%", val3: "90 ~ 100%" },
                                { label: "두께감", val1: "얇음", val2: "중간/적당함", val3: "도톰함" },
                                { label: "분위기", val1: "화사함, 감성적", val2: "내추럴, 편안함", val3: "차분함, 아늑함" },
                                { label: "추천 공간", val1: "거실, 카페", val2: "거실, 침실, 아이방", val3: "침실, 시청각실" },
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 pl-6 font-medium text-gray-900 border-r bg-gray-50/30">{row.label}</td>
                                    <td className="p-4 text-center text-gray-600 border-r">{row.val1}</td>
                                    <td className="p-4 text-center text-blue-800 font-medium bg-blue-50/30 border-r">{row.val2}</td>
                                    <td className="p-4 text-center text-gray-600">{row.val3}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Seasonal Recommendations - Only relevant for Curtains usually, or can be adapted */}
            <section className="py-20 bg-deep-charcoal text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{ backgroundImage: "url('/1/images/hero-bg.jpg')" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-accent-gold/20 text-accent-gold px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                            Season Pick
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">계절별 맞춤 추천</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            지금 계절에 가장 필요한 기능을 담은 나비창의 추천 아이템을 확인하세요.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SeasonCard
                            season="Spring & Summer"
                            title="가볍고 화사한 스타일링"
                            items={["차르르 시폰 커튼", "린넨 룩 커튼", "알루미늄 블라인드"]}
                            desc="강해지는 햇살을 부드럽게 바꾸고, 시원한 바람은 통하게 하세요."
                            color="from-pink-500/20 to-orange-500/20"
                            onClick={() => openSeasonPopup("Spring & Summer")}
                        />
                        <SeasonCard
                            season="Fall & Winter"
                            title="아늑하고 따뜻한 공간"
                            items={["형상기억 암막 커튼", "두툼한 암막 콤비", "허니콤 블라인드"]}
                            desc="찬바람을 막아주는 방한 효과와 포근한 시각적 온기를 더하세요."
                            color="from-blue-500/20 to-purple-500/20"
                            onClick={() => openSeasonPopup("Fall & Winter")}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function BlindContent() {
    const router = useRouter();
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Blind Intro */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-accent-gold uppercase tracking-widest text-sm font-semibold">Blind Collection</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">나비창 블라인드 컬렉션</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        다양한 기능과 디자인을 갖춘 나비창의 프리미엄 블라인드 라인업을 소개합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {/* 1. Roll Screen */}
                    <BlindCard
                        title="롤 블라인드"
                        subtitle="Roll Screen"
                        image="/images/롤블라인드/롤블라인드.jpg"
                        description="가장 기본적이고 심플한 창호 가림막입니다. 한 장의 원단이 상하로 움직이며 빛을 조절합니다. 가성비가 뛰어나고 깔끔한 공간 연출에 적합하여 상업 공간과 주거 공간 어디에나 잘 어울립니다."
                        rating={4.8}
                        tags={["심플", "가성비", "다목적"]}
                        features={["간편한 작동 방식", "다양한 원단 및 컬러", "난연 및 암막 옵션"]}
                        onClick={() => router.push('/products?category=blind&type=roll')}
                    />

                    {/* 2. Combi Blind */}
                    <BlindCard
                        title="콤비 블라인드"
                        subtitle="Combi Blind"
                        description="원단과 망사가 교차되는 이중 구조로, 채광과 통풍을 자유롭게 조절할 수 있습니다. 프라이버시 보호와 시야 확보가 동시에 가능하며, 가장 대중적으로 사랑받는 베스트셀러입니다."
                        rating={4.9}
                        tags={["국민블라인드", "채광조절", "실용성"]}
                        features={["빛과 바람의 자유로운 조절", "환기에 탁월한 구조", "다양한 디자인 패턴"]}
                    />

                    {/* 3. Innowin Shade */}
                    <BlindCard
                        title="이노윈 쉐이드"
                        subtitle="Innowin Shade"
                        description="블라인드의 기능성과 커튼의 부드러움을 결합한 3중 구조 쉐이드입니다. 베인(Vane)의 각도를 조절하여 빛을 부드럽게 여과시키며, 우아하고 아늑한 실내 분위기를 연출합니다."
                        rating={4.9}
                        tags={["호텔식", "우아함", "3중구조"]}
                        features={["부드러운 빛 산란 효과", "자외선 차단 및 사생활 보호", "고급스러운 인테리어 효과"]}
                    />

                    {/* 4. Wood Blind */}
                    <BlindCard
                        title="우드 블라인드"
                        subtitle="Wood Blind"
                        description="천연 원목의 중후함과 내추럴한 감성을 담았습니다. 슬랫의 각도 조절로 채광과 통풍을 정교하게 컨트롤할 수 있으며, 공간의 품격을 한층 높여주는 프리미엄 제품입니다."
                        rating={4.9}
                        tags={["천연원목", "프리미엄", "친환경"]}
                        features={["최상급 오동나무 사용", "뛰어난 빛 차단력", "모서리 라운딩 안전 가공"]}
                    />

                    {/* 5. Aluminum Blind */}
                    <BlindCard
                        title="알루미늄 블라인드"
                        subtitle="Aluminum Blind"
                        description="습기에 강한 알루미늄 소재로 제작되어 욕실이나 주방에 최적화된 제품입니다. 슬림하고 모던한 디자인으로 오피스나 상업 공간에서도 세련된 연출이 가능합니다."
                        rating={4.7}
                        tags={["방수", "모던", "내구성"]}
                        features={["녹슬지 않는 내구성", "간편한 물청소", "타공/펄 등 다양한 슬랫"]}
                    />

                    {/* 6. Honeycomb Shade */}
                    <BlindCard
                        title="허니콤 쉐이드"
                        subtitle="Honeycomb Shade"
                        description="육각형의 벌집 구조가 공기층을 형성하여 단열 및 보온 효과가 뛰어난 기능성 블라인드입니다. 파스텔톤의 다양한 색감으로 감성적인 공간 연출이 가능합니다."
                        rating={4.8}
                        tags={["에너지절약", "시스템창호", "방음"]}
                        features={["냉난방비 절감 효과", "탑다운-바텀업 시스템 가능", "소음 흡수 효과"]}
                    />

                    {/* 7. Charlet Shade (Roman Style) */}
                    <BlindCard
                        title="샬렛 쉐이드"
                        subtitle="Charlet Shade"
                        description="원단이 접히며 올라가는 로만쉐이드 스타일을 현대적으로 재해석했습니다. 풍성한 볼륨감과 부드러운 텍스처가 돋보이며, 클래식하고 로맨틱한 분위기를 자아냅니다."
                        rating={4.6}
                        tags={["로만스타일", "클래식", "볼륨감"]}
                        features={["우아한 주름 디자인", "포근한 패브릭 질감", "이중 원단 작동 방식"]}
                    />

                    {/* 8. Natural Shade */}
                    <BlindCard
                        title="내츄럴 쉐이드"
                        subtitle="Natural Shade"
                        description="종이, 대나무 등 자연 친화적인 소재의 질감을 살려 제작되었습니다. 은은하게 투과되는 빛이 편안하고 서정적인 공간을 만들어주며, 힐링이 필요한 공간에 추천합니다."
                        rating={4.7}
                        tags={["자연소재", "힐링", "서정적"]}
                        features={["친환경 텍스처", "은은한 채광 효과", "동양적인 미학"]}
                    />

                    {/* 9. Vertical Blind */}
                    <BlindCard
                        title="버티컬 블라인드"
                        subtitle="Vertical Blind"
                        description="세로형 날개가 좌우로 움직이는 블라인드입니다. 빛의 각도를 좌우로 조절할 수 있으며, 층고가 높은 창이나 넓은 통창에 설치했을 때 시원한 개방감을 줍니다."
                        rating={4.5}
                        tags={["통창추천", "개방감", "오피스"]}
                        features={["좌우 작동 방식", "넓은 시야 확보", "곡면 창 설치 용이"]}
                    />

                    {/* 10. Klimt (Premium/Artistic Triple) */}
                    <BlindCard
                        title="클림트"
                        subtitle="Klimt"
                        description="섬세한 자수와 입체적인 패턴이 돋보이는 최고급 쉐이드입니다. 빛을 받았을 때 드러나는 고유의 문양이 마치 예술 작품과 같은 심미적인 아름다움을 선사합니다."
                        rating={5.0}
                        tags={["하이엔드", "예술적", "입체패턴"]}
                        features={["디테일한 자수/패턴", "고급스러운 원단감", "차별화된 인테리어 포인트"]}
                    />

                    {/* 11. Uni Glide (Vertical Sheer) */}
                    <BlindCard
                        title="유니 글라이드"
                        subtitle="Uni-Glide"
                        description="커튼의 부드러움과 버티컬의 기능을 합친 프리미엄 제품입니다. 원단 사이의 베인을 조절하여 사생활 보호와 외부 조망을 동시에 만족시키는 스마트한 쉐이드입니다."
                        rating={4.9}
                        tags={["스마트쉐이드", "커튼+블라인드", "편리함"]}
                        features={["개별 베인 조절 가능", "걸림 없는 부드러운 주행", "고급스러운 쉬어 룩"]}
                    />

                    {/* 12. Honey Glide (Vertical Honeycomb) */}
                    <BlindCard
                        title="허니 글라이드"
                        subtitle="Honey-Glide"
                        description="허니콤 쉐이드의 벌집 구조를 세로형(버티컬)으로 적용한 제품입니다. 넓은 거실 창이나 시스템 도어에 적합하며, 단열 성능과 편리한 슬라이딩 구동을 동시에 갖췄습니다."
                        rating={4.8}
                        tags={["단열효과", "슬라이딩", "시스템도어"]}
                        features={["좌우 슬라이딩 개폐", "탁월한 에너지 효율", "시스템 창호 맞춤"]}
                    />
                </div>
            </section>

            {/* Blind Feature Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">블라인드를 선택해야 하는 이유</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="p-4 bg-orange-50 text-orange-500 rounded-full mb-6">
                                <Sun className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">정교한 빛 조절</h3>
                            <p className="text-gray-500">슬랫의 각도를 조절하여 들어오는 빛의 양과 방향을 자유롭게 컨트롤할 수 있습니다.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="p-4 bg-blue-50 text-blue-500 rounded-full mb-6">
                                <Wind className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">깔끔한 공간 연출</h3>
                            <p className="text-gray-500">창틀 안에 매립하거나 딱 맞게 설치하여 군더더기 없는 모던하고 심플한 인테리어를 완성합니다.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="p-4 bg-green-50 text-green-500 rounded-full mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">관리의 편의성</h3>
                            <p className="text-gray-500">먼지를 털어내기 쉽고, 알루미늄 등 일부 소재는 물걸레 청소가 가능하여 관리가 용이합니다.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Used for both now, or we can make a generic Card. 
// Adding onClick to allow navigation
function BlindCard({ title, subtitle, description, rating, tags, features, onClick, image }: any) {
    return (
        <div
            onClick={onClick}
            className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full ${onClick ? 'cursor-pointer' : ''}`}>
            <div className="relative h-64 bg-gray-100 overflow-hidden flex items-center justify-center">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <span className="text-gray-300 text-4xl font-thin opacity-50 select-none">IMAGE</span>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {rating}
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-3 flex-wrap">
                    {tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                            #{tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-xl font-bold mb-0 group-hover:text-amber-600 transition-colors">{title}</h3>
                {subtitle && <p className="text-xs text-gray-400 font-light uppercase tracking-widest mb-3">{subtitle}</p>}

                <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed break-keep">{description}</p>

                <div className="space-y-2 mb-6">
                    {features.map((feat: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full py-3 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-2">
                    상세보기 <Info className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}



function FeatureItem({ icon, title, desc }: any) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-gray-50 rounded-full shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                <p className="text-sm text-gray-500 leading-snug">{desc}</p>
            </div>
        </div>
    );
}


function SeasonCard({ season, title, items, desc, color, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${color} hover:bg-white/5 transition-colors relative overflow-hidden group`}>
            <div className="relative z-10">
                <div className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-2">{season}</div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300 mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                    {items.map((item: string, i: number) => (
                        <span key={i} className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm text-white border border-white/20">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
        </div>
    );
}

// --- Detail View Component ---
function ProductDetailView({ product }: { product: any }) {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-2 block">{product.subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-deep-charcoal">{product.title}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed break-keep">
                    {product.description}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Image Placeholder */}
                <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-sm">
                    {product.mainImage ? (
                        <Image
                            src={product.mainImage}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    ) : (
                        <span className="text-gray-300 text-5xl font-thin select-none tracking-widest">제품 대표 이미지</span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Right: Specs & Features */}
                <div className="flex flex-col gap-10">

                    {/* Key Features List */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">주요 특징</h3>
                        <ul className="space-y-4">
                            {product.features.map((feat: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-accent-gold/10 rounded-full text-accent-gold">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical Specs Table */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">제품 사양</h3>
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <table className="w-full text-sm text-left">
                                <tbody className="divide-y divide-gray-200/50">
                                    {product.specs?.map((spec: any, i: number) => (
                                        <tr key={i}>
                                            <th className="py-3 pr-4 font-semibold text-gray-900 w-1/3">{spec.label}</th>
                                            <td className="py-3 text-gray-600">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recommended For Chips */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">추천 공간</h3>
                        <div className="flex gap-2 flex-wrap">
                            {product.recommendedFor?.map((place: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                    {place}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* SubTypes Section (Full Width) */}
            {product.subTypes && (
                <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-gray-100 pt-16">
                    <div className="text-center mb-12">
                        <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-2 block">Product Lineup</span>
                        <h3 className="text-3xl font-bold text-deep-charcoal">상세 모델 안내</h3>
                        <p className="text-gray-500 mt-2">공간과 용도에 맞는 다양한 라인업을 확인해보세요.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {product.subTypes.map((type: any, i: number) => (
                            <div key={i} className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-accent-gold hover:shadow-lg transition-all duration-300">
                                {/* Image Slot */}
                                <div className="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden border-b border-gray-100">
                                    {type.image ? (
                                        <Image
                                            src={type.image}
                                            alt={type.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                    ) : (
                                        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">이미지 영역</span>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                </div>
                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col items-center text-center">
                                    <strong className="block text-gray-900 text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors">{type.name}</strong>
                                    <p className="text-sm text-gray-500 leading-relaxed break-keep">{type.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bottom: Contact / CTA */}
            <div className="max-w-4xl mx-auto text-center mt-24 px-6">
                <div className="p-10 bg-deep-charcoal text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-2">이 제품으로 시공을 원하시나요?</h3>
                        <p className="text-gray-400">전문가가 직접 방문하여 정확한 실측과 상담을 도와드립니다.</p>
                    </div>
                    <Link href="/" className="px-8 py-4 bg-accent-gold text-white rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-600/20 whitespace-nowrap">
                        무료 견적/상담 신청하기
                    </Link>
                </div>
            </div>
        </div>
    );
}
