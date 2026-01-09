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
                        ?òÎπÑÏ∞??ÑÎ¶¨ÎØ∏ÏóÑ Ïª¨Î†â??
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto mb-8">
                        Í≥µÍ∞Ñ???àÍ≤©???íÏù¥??ÏµúÍ≥†???†ÌÉù, ?òÎπÑÏ∞ΩÏùò ?§Ïñë???úÌíà??ÎßåÎÇòÎ≥¥ÏÑ∏??
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
                                src="/images/hero-bg.jpg"
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
                                    ? "Î¥ÑÍ≥º ?¨Î¶Ñ?êÎäî Í∞ÄÎ≤ºÏö¥ ?åÏû¨?Ä Î∞ùÏ? Ïª¨Îü¨Î°?Í≥µÍ∞Ñ???îÏÇ¨?òÍ≤å ÎßåÎì§?¥Î≥¥?∏Ïöî. ?êÏô∏?†Ï? Ï∞®Îã®?òÎ©¥?úÎèÑ Î∞îÎûå?Ä ???µÌïò???¨Ìè∞ Ïª§Ìäº??Î≤†Ïä§???Ä?¨ÏûÖ?àÎã§."
                                    : "Í∞Ä?ÑÍ≥º Í≤®Ïö∏?êÎäî ?êÍªòÍ∞??àÎäî ?îÎßâ Ïª§Ìäº?ºÎ°ú ?úÎ∞© ?®Ïú®???íÏù¥?∏Ïöî. ?¨Í∑º???çÏä§Ï≤òÏ? ?úÌÜ§ Ïª¨Îü¨Í∞Ä ÏßëÏïà???®Í∏∞Î•?ÏßÄÏºúÏ§ç?àÎã§."
                                }
                            </p>

                            <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">Recommended Products</h4>
                            <ul className="space-y-3">
                                {[1, 2, 3].map((item) => (
                                    <li key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                        <div className="w-12 h-12 bg-gray-300 rounded overflow-hidden relative">
                                            <Image src="/images/premium_fabric.png" alt="Product" fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Ï∂îÏ≤ú ?ÅÌíà {item}</div>
                                            <div className="text-xs text-gray-500">???åÏïÑÎ≥¥Í∏∞ &rarr;</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setShowSeasonPopup(false)}
                                className="w-full mt-8 py-3 bg-deep-charcoal text-white rounded-lg font-bold hover:bg-black transition-colors"
                            >
                                ?´Í∏∞
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
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">?òÎπÑÏ∞?Ïª§Ìäº ?ºÏù∏??/h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Í≥†Í∞ù?òÏùò ?ºÏù¥?ÑÏä§?Ä?ºÍ≥º Í≥µÍ∞Ñ???ÑÎ≤Ω?òÍ≤å ?¥Ïö∏Î¶¨Îäî ÎßûÏ∂§??Ïª§Ìäº???úÏïà?©Îãà??
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Product 1: Chiffon/Sheer */}
                    <BlindCard
                        title="?çÏ?/Ï∞®Î•¥Î•?Ïª§Ìäº"
                        subtitle="Sheer & Chiffon"
                        description="?∏ÌÖîÍ∞ôÏ? ?∞ÏïÑ?®Í≥º Î∂Ä?úÎü¨??Ï±ÑÍ¥ë???†ÏÇ¨?òÎäî ?úÍ∑∏?àÏ≤ò ?úÌè∞ Ïª§Ìäº?ÖÎãà?? ?òÎäò?òÎäò???úÎ†à?¥ÌîÑ?±Ïù¥ Í≥µÍ∞Ñ???îÏö± Í∞êÏÑ±?ÅÏúºÎ°?ÎßåÎì§?¥Ï§ç?àÎã§."
                        rating={4.9}
                        tags={["?∏ÌÖî??, "Ï∞®Î•¥Î•?, "Í∞êÏÑ±"]}
                        features={["Í≥†Î????ÑÎ¶¨ÎØ∏ÏóÑ ?úÌè∞", "?¥Ïùå???ÜÎäî Í¥ëÌè≠ ?êÎã®", "?òÎπÑÏ£ºÎ¶Ñ ?ÑÎ≤Ω Í∞ÄÍ≥?]}
                        onClick={() => router.push('/products?category=curtain&type=sheer')}
                    />

                    {/* Product 2: Blackout */}
                    <BlindCard
                        title="100% ?îÎßâ Ïª§Ìäº"
                        subtitle="Perfect Blackout"
                        description="ÎπõÏùÑ ?ÑÎ≤Ω?òÍ≤å Ï∞®Îã®?òÏó¨ ?ôÎ©¥Í≥??ÅÌôî Í∞êÏÉÅ??ÏµúÏ†Å?îÎêú Í≥†Í∏∞?•ÏÑ± ?îÎßâ Ïª§Ìäº?ÖÎãà?? Î∞©ÌíçÍ≥??®Ïó¥ ?®Í≥ºÍ∞Ä Îß§Ïö∞ ?∞Ïñ¥???âÎÇúÎ∞©ÎπÑÎ•??àÍ∞ê?¥Ï§ç?àÎã§."
                        rating={5.0}
                        tags={["?ÑÏ†Ñ?îÎßâ", "?®Ïó¥?®Í≥º", "?ôÎ©¥"]}
                        features={["Îπ?Ï∞®Îã®??100%", "?πÏàò ÏΩîÌåÖ Î∞©Ìïú ?®Í≥º", "?∏ÌÖî??Î¨¥Í≤åÍ∞?]}
                        onClick={() => router.push('/products?category=curtain&type=perfect-blackout')}
                    />

                    {/* Product 3: Four Seasons */}
                    <BlindCard
                        title="?¨Í≥Ñ??Ïª§Ìäº"
                        subtitle="Four Seasons Curtain"
                        description="?ÅÎãπ???êÍªòÍ∞êÏúºÎ°??¨Í≥Ñ???¥ÎÇ¥ ?¨Ïö©?òÍ∏∞ Ï¢ãÏ? ?∞ÏùºÎ¶?Ïª§Ìäº?ÖÎãà?? Í≤âÏª§???òÎÇòÎßåÏúºÎ°úÎèÑ Ï∂©Î∂Ñ???ùÌôú ?îÎßâÍ≥?Î∞©Ìïú ?®Í≥ºÎ•??ÑÎ¶¥ ???àÏäµ?àÎã§."
                        rating={4.8}
                        tags={["?¨Í≥Ñ??, "?ùÌôú?îÎßâ", "?§Ïö©??]}
                        features={["??∑†/Î®ºÏ??ÜÎäî ?êÎã®", "?ïÏÉÅÍ∏∞Ïñµ Í∞ÄÍ≥?Í∏∞Î≥∏", "?§Ïñë??Ïª¨Îü¨ ?îÎ†à??]}
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
                                src="/images/premium_fabric.png"
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
                                <h2 className="text-4xl font-bold mb-4">??'?¨Í≥Ñ??Ïª§Ìäº'?∏Í??</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    ?¥Îñ§ ?†Ïî®?êÎèÑ, ?¥Îñ§ Í≥µÍ∞Ñ?êÎèÑ ?ÑÎ≤Ω?òÍ≤å ?¥Ïö∞?¨Ï????òÎπÑÏ∞ΩÏùò ?¨Í≥Ñ??Ïª§Ìäº?Ä
                                    Í∏∞Îä•?±Í≥º ?¨Î??±ÏùÑ ?ôÏãú??ÎßåÏ°±?úÌÇ§??ÏµúÍ≥†???†ÌÉù?ÖÎãà??
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FeatureItem
                                    icon={<Sun className="w-6 h-6 text-orange-500" />}
                                    title="?ÅÏ†à??Ï±ÑÍ¥ë Ï°∞Ï†à"
                                    desc="Í∞ïÌïú ?áÏÇ¥?Ä Î∂Ä?úÎüΩÍ≤?ÎßâÏïÑÏ£ºÍ≥†, ?§ÎÇ¥???òÌïòÍ≤?Î∞ùÌ?Ï§çÎãà??"
                                />
                                <FeatureItem
                                    icon={<Wind className="w-6 h-6 text-blue-500" />}
                                    title="?∞Ïàò???µÍ∏∞??
                                    desc="?µÎãµ?òÏ? ?äÏ? ?åÏû¨Î°?ÏæåÏ†Å??Í≥µÍ∏∞ ?úÌôò???ïÏäµ?àÎã§."
                                />
                                <FeatureItem
                                    icon={<Shield className="w-6 h-6 text-green-500" />}
                                    title="?ùÌôú ?§Ïóº Î∞©Ï?"
                                    desc="?πÏàò Î∞úÏàò ÏΩîÌåÖ?ºÎ°ú ?ºÏÉÅ?ÅÏù∏ ?§Ïóº??Í∞ïÌï©?àÎã§."
                                />
                                <FeatureItem
                                    icon={<Moon className="w-6 h-6 text-indigo-500" />}
                                    title="?ÅÎãπ???îÎßâ ?®Í≥º"
                                    desc="?ùÌôú ?îÎßâ Í∏∞Îä•?ºÎ°ú ?∏Ïïà???¥Ïãù??Î≥¥Ïû•?©Îãà??"
                                />
                            </div>

                            <div className="pt-4">
                                <button className="px-8 py-4 bg-deep-charcoal text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
                                    ?¨Í≥Ñ??Ïª§Ìäº ?êÏÑ∏??Î≥¥Í∏∞
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">?úÎàà??Î≥¥Îäî ?úÌíà ÎπÑÍµê</h2>
                    <p className="text-gray-500">?òÏóêÍ≤???ÎßûÎäî Ïª§Ìäº??Ï∞æÏïÑÎ≥¥ÏÑ∏??/p>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-700">
                                <th className="p-6 font-bold border-b">Íµ¨Î∂Ñ</th>
                                <th className="p-6 font-bold border-b text-center">Ï∞®Î•¥Î•?Ïª§Ìäº</th>
                                <th className="p-6 font-bold border-b text-center bg-blue-50/50">?¨Í≥Ñ??Ïª§Ìäº (Ï∂îÏ≤ú)</th>
                                <th className="p-6 font-bold border-b text-center">?îÎßâ Ïª§Ìäº</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { label: "?åÏû¨", val1: "?¥Î¶¨/?úÌè∞", val2: "Î¶∞ÎÑ® Î£??¥Î¶¨", val3: "3Ï§ëÏßÅ ?îÎßâÏßÄ" },
                                { label: "?îÎßâÎ•?, val1: "0 ~ 10%", val2: "50 ~ 70%", val3: "90 ~ 100%" },
                                { label: "?êÍªòÍ∞?, val1: "?áÏùå", val2: "Ï§ëÍ∞Ñ/?ÅÎãπ??, val3: "?ÑÌÜ∞?? },
                                { label: "Î∂ÑÏúÑÍ∏?, val1: "?îÏÇ¨?? Í∞êÏÑ±??, val2: "?¥Ï∂î?? ?∏Ïïà??, val3: "Ï∞®Î∂Ñ?? ?ÑÎäë?? },
                                { label: "Ï∂îÏ≤ú Í≥µÍ∞Ñ", val1: "Í±∞Ïã§, Ïπ¥Ìéò", val2: "Í±∞Ïã§, Ïπ®Ïã§, ?ÑÏù¥Î∞?, val3: "Ïπ®Ïã§, ?úÏ≤≠Í∞ÅÏã§" },
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
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-accent-gold/20 text-accent-gold px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                            Season Pick
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Í≥ÑÏ†àÎ≥?ÎßûÏ∂§ Ï∂îÏ≤ú</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            ÏßÄÍ∏?Í≥ÑÏ†à??Í∞Ä???ÑÏöî??Í∏∞Îä•???¥Ï? ?òÎπÑÏ∞ΩÏùò Ï∂îÏ≤ú ?ÑÏù¥?úÏùÑ ?ïÏù∏?òÏÑ∏??
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SeasonCard
                            season="Spring & Summer"
                            title="Í∞ÄÎ≥çÍ≥† ?îÏÇ¨???§Ì??ºÎßÅ"
                            items={["Ï∞®Î•¥Î•??úÌè∞ Ïª§Ìäº", "Î¶∞ÎÑ® Î£?Ïª§Ìäº", "?åÎ£®ÎØ∏ÎäÑ Î∏îÎùº?∏Îìú"]}
                            desc="Í∞ïÌï¥ÏßÄ???áÏÇ¥??Î∂Ä?úÎüΩÍ≤?Î∞îÍæ∏Í≥? ?úÏõê??Î∞îÎûå?Ä ?µÌïòÍ≤??òÏÑ∏??"
                            color="from-pink-500/20 to-orange-500/20"
                            onClick={() => openSeasonPopup("Spring & Summer")}
                        />
                        <SeasonCard
                            season="Fall & Winter"
                            title="?ÑÎäë?òÍ≥† ?∞Îúª??Í≥µÍ∞Ñ"
                            items={["?ïÏÉÅÍ∏∞Ïñµ ?îÎßâ Ïª§Ìäº", "?êÌàº???îÎßâ ÏΩ§ÎπÑ", "?àÎãàÏΩ?Î∏îÎùº?∏Îìú"]}
                            desc="Ï∞¨Î∞î?åÏùÑ ÎßâÏïÑÏ£ºÎäî Î∞©Ìïú ?®Í≥º?Ä ?¨Í∑º???úÍ∞Å???®Í∏∞Î•??îÌïò?∏Ïöî."
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
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">?òÎπÑÏ∞?Î∏îÎùº?∏Îìú Ïª¨Î†â??/h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        ?§Ïñë??Í∏∞Îä•Í≥??îÏûê?∏ÏùÑ Í∞ñÏ∂ò ?òÎπÑÏ∞ΩÏùò ?ÑÎ¶¨ÎØ∏ÏóÑ Î∏îÎùº?∏Îìú ?ºÏù∏?ÖÏùÑ ?åÍ∞ú?©Îãà??
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {/* 1. Roll Screen */}
                    <BlindCard
                        title="Î°?Î∏îÎùº?∏Îìú"
                        subtitle="Roll Screen"
                        image="/images/Î°§Î∏î?ºÏù∏??Î°§Î∏î?ºÏù∏??jpg"
                        description="Í∞Ä??Í∏∞Î≥∏?ÅÏù¥Í≥??¨Ìîå??Ï∞ΩÌò∏ Í∞ÄÎ¶ºÎßâ?ÖÎãà?? ???•Ïùò ?êÎã®???ÅÌïòÎ°??ÄÏßÅÏù¥Î©?ÎπõÏùÑ Ï°∞Ï†à?©Îãà?? Í∞Ä?±ÎπÑÍ∞Ä ?∞Ïñ¥?òÍ≥† ÍπîÎÅî??Í≥µÍ∞Ñ ?∞Ï∂ú???ÅÌï©?òÏó¨ ?ÅÏóÖ Í≥µÍ∞ÑÍ≥?Ï£ºÍ±∞ Í≥µÍ∞Ñ ?¥Îîî?êÎÇò ???¥Ïö∏Î¶ΩÎãà??"
                        rating={4.8}
                        tags={["?¨Ìîå", "Í∞Ä?±ÎπÑ", "?§Î™©??]}
                        features={["Í∞ÑÌé∏???ëÎèô Î∞©Ïãù", "?§Ïñë???êÎã® Î∞?Ïª¨Îü¨", "?úÏó∞ Î∞??îÎßâ ?µÏÖò"]}
                        onClick={() => router.push('/products?category=blind&type=roll')}
                    />

                    {/* 2. Combi Blind */}
                    <BlindCard
                        title="ÏΩ§ÎπÑ Î∏îÎùº?∏Îìú"
                        subtitle="Combi Blind"
                        description="?êÎã®Í≥?ÎßùÏÇ¨Í∞Ä ÍµêÏ∞®?òÎäî ?¥Ï§ë Íµ¨Ï°∞Î°? Ï±ÑÍ¥ëÍ≥??µÌíç???êÏú†Î°?≤å Ï°∞Ï†à?????àÏäµ?àÎã§. ?ÑÎùº?¥Î≤Ñ??Î≥¥Ìò∏?Ä ?úÏïº ?ïÎ≥¥Í∞Ä ?ôÏãú??Í∞Ä?•ÌïòÎ©? Í∞Ä???ÄÏ§ëÏ†Å?ºÎ°ú ?¨ÎûëÎ∞õÎäî Î≤†Ïä§?∏Ï??¨ÏûÖ?àÎã§."
                        rating={4.9}
                        tags={["Íµ??Î∏îÎùº?∏Îìú", "Ï±ÑÍ¥ëÏ°∞Ï†à", "?§Ïö©??]}
                        features={["ÎπõÍ≥º Î∞îÎûå???êÏú†Î°úÏö¥ Ï°∞Ï†à", "?òÍ∏∞???ÅÏõî??Íµ¨Ï°∞", "?§Ïñë???îÏûê???®ÌÑ¥"]}
                    />

                    {/* 3. Innowin Shade */}
                    <BlindCard
                        title="?¥ÎÖ∏???êÏù¥??
                        subtitle="Innowin Shade"
                        description="Î∏îÎùº?∏Îìú??Í∏∞Îä•?±Í≥º Ïª§Ìäº??Î∂Ä?úÎü¨?Ä??Í≤∞Ìï©??3Ï§?Íµ¨Ï°∞ ?êÏù¥?úÏûÖ?àÎã§. Î≤†Ïù∏(Vane)??Í∞ÅÎèÑÎ•?Ï°∞Ï†à?òÏó¨ ÎπõÏùÑ Î∂Ä?úÎüΩÍ≤??¨Í≥º?úÌÇ§Î©? ?∞ÏïÑ?òÍ≥† ?ÑÎäë???§ÎÇ¥ Î∂ÑÏúÑÍ∏∞Î? ?∞Ï∂ú?©Îãà??"
                        rating={4.9}
                        tags={["?∏ÌÖî??, "?∞ÏïÑ??, "3Ï§ëÍµ¨Ï°?]}
                        features={["Î∂Ä?úÎü¨??Îπ??∞Î? ?®Í≥º", "?êÏô∏??Ï∞®Îã® Î∞??¨ÏÉù??Î≥¥Ìò∏", "Í≥†Í∏â?§Îü¨???∏ÌÖåÎ¶¨Ïñ¥ ?®Í≥º"]}
                    />

                    {/* 4. Wood Blind */}
                    <BlindCard
                        title="?∞Îìú Î∏îÎùº?∏Îìú"
                        subtitle="Wood Blind"
                        description="Ï≤úÏó∞ ?êÎ™©??Ï§ëÌõÑ?®Í≥º ?¥Ï∂î?¥Ìïú Í∞êÏÑ±???¥Ïïò?µÎãà?? ?¨Îû´??Í∞ÅÎèÑ Ï°∞Ï†àÎ°?Ï±ÑÍ¥ëÍ≥??µÌíç???ïÍµê?òÍ≤å Ïª®Ìä∏Î°§Ìï† ???àÏúºÎ©? Í≥µÍ∞Ñ???àÍ≤©???úÏ∏µ ?íÏó¨Ï£ºÎäî ?ÑÎ¶¨ÎØ∏ÏóÑ ?úÌíà?ÖÎãà??"
                        rating={4.9}
                        tags={["Ï≤úÏó∞?êÎ™©", "?ÑÎ¶¨ÎØ∏ÏóÑ", "ÏπúÌôòÍ≤?]}
                        features={["ÏµúÏÉÅÍ∏??§Îèô?òÎ¨¥ ?¨Ïö©", "?∞Ïñ¥??Îπ?Ï∞®Îã®??, "Î™®ÏÑúÎ¶??ºÏö¥???àÏ†Ñ Í∞ÄÍ≥?]}
                    />

                    {/* 5. Aluminum Blind */}
                    <BlindCard
                        title="?åÎ£®ÎØ∏ÎäÑ Î∏îÎùº?∏Îìú"
                        subtitle="Aluminum Blind"
                        description="?µÍ∏∞??Í∞ïÌïú ?åÎ£®ÎØ∏ÎäÑ ?åÏû¨Î°??úÏûë?òÏñ¥ ?ïÏã§?¥ÎÇò Ï£ºÎ∞©??ÏµúÏ†Å?îÎêú ?úÌíà?ÖÎãà?? ?¨Î¶º?òÍ≥† Î™®Îçò???îÏûê?∏ÏúºÎ°??§Ìîº?§ÎÇò ?ÅÏóÖ Í≥µÍ∞Ñ?êÏÑú???∏Î†®???∞Ï∂ú??Í∞Ä?•Ìï©?àÎã§."
                        rating={4.7}
                        tags={["Î∞©Ïàò", "Î™®Îçò", "?¥Íµ¨??]}
                        features={["?πÏä¨ÏßÄ ?äÎäî ?¥Íµ¨??, "Í∞ÑÌé∏??Î¨ºÏ≤≠??, "?ÄÍ≥??????§Ïñë???¨Îû´"]}
                    />

                    {/* 6. Honeycomb Shade */}
                    <BlindCard
                        title="?àÎãàÏΩ??êÏù¥??
                        subtitle="Honeycomb Shade"
                        description="?°Í∞Å?ïÏùò Î≤åÏßë Íµ¨Ï°∞Í∞Ä Í≥µÍ∏∞Ï∏µÏùÑ ?ïÏÑ±?òÏó¨ ?®Ïó¥ Î∞?Î≥¥Ïò® ?®Í≥ºÍ∞Ä ?∞Ïñ¥??Í∏∞Îä•??Î∏îÎùº?∏Îìú?ÖÎãà?? ?åÏä§?îÌÜ§???§Ïñë???âÍ∞ê?ºÎ°ú Í∞êÏÑ±?ÅÏù∏ Í≥µÍ∞Ñ ?∞Ï∂ú??Í∞Ä?•Ìï©?àÎã§."
                        rating={4.8}
                        tags={["?êÎÑàÏßÄ?àÏïΩ", "?úÏä§?úÏ∞Ω??, "Î∞©Ïùå"]}
                        features={["?âÎÇúÎ∞©ÎπÑ ?àÍ∞ê ?®Í≥º", "?ëÎã§??Î∞îÌ????úÏä§??Í∞Ä??, "?åÏùå ?°Ïàò ?®Í≥º"]}
                    />

                    {/* 7. Charlet Shade (Roman Style) */}
                    <BlindCard
                        title="?¨Î†õ ?êÏù¥??
                        subtitle="Charlet Shade"
                        description="?êÎã®???ëÌûàÎ©??¨ÎùºÍ∞Ä??Î°úÎßå?êÏù¥???§Ì??ºÏùÑ ?ÑÎ??ÅÏúºÎ°??¨Ìï¥?ùÌñà?µÎãà?? ?çÏÑ±??Î≥ºÎ•®Í∞êÍ≥º Î∂Ä?úÎü¨???çÏä§Ï≤òÍ? ?ãÎ≥¥?¥Î©∞, ?¥Îûò?ùÌïòÍ≥?Î°úÎß®?±Ìïú Î∂ÑÏúÑÍ∏∞Î? ?êÏïÑ?ÖÎãà??"
                        rating={4.6}
                        tags={["Î°úÎßå?§Ì???, "?¥Îûò??, "Î≥ºÎ•®Í∞?]}
                        features={["?∞ÏïÑ??Ï£ºÎ¶Ñ ?îÏûê??, "?¨Í∑º???®Î∏åÎ¶?ÏßàÍ∞ê", "?¥Ï§ë ?êÎã® ?ëÎèô Î∞©Ïãù"]}
                    />

                    {/* 8. Natural Shade */}
                    <BlindCard
                        title="?¥Ï∏Ñ???êÏù¥??
                        subtitle="Natural Shade"
                        description="Ï¢ÖÏù¥, ?Ä?òÎ¨¥ ???êÏó∞ ÏπúÌôî?ÅÏù∏ ?åÏû¨??ÏßàÍ∞ê???¥Î†§ ?úÏûë?òÏóà?µÎãà?? ?Ä?Ä?òÍ≤å ?¨Í≥º?òÎäî ÎπõÏù¥ ?∏Ïïà?òÍ≥† ?úÏ†ï?ÅÏù∏ Í≥µÍ∞Ñ??ÎßåÎì§?¥Ï£ºÎ©? ?êÎßÅ???ÑÏöî??Í≥µÍ∞Ñ??Ï∂îÏ≤ú?©Îãà??"
                        rating={4.7}
                        tags={["?êÏó∞?åÏû¨", "?êÎßÅ", "?úÏ†ï??]}
                        features={["ÏπúÌôòÍ≤??çÏä§Ï≤?, "?Ä?Ä??Ï±ÑÍ¥ë ?®Í≥º", "?ôÏñë?ÅÏù∏ ÎØ∏Ìïô"]}
                    />

                    {/* 9. Vertical Blind */}
                    <BlindCard
                        title="Î≤ÑÌã∞Ïª?Î∏îÎùº?∏Îìú"
                        subtitle="Vertical Blind"
                        description="?∏Î°ú???†Í∞úÍ∞Ä Ï¢åÏö∞Î°??ÄÏßÅÏù¥??Î∏îÎùº?∏Îìú?ÖÎãà?? ÎπõÏùò Í∞ÅÎèÑÎ•?Ï¢åÏö∞Î°?Ï°∞Ï†à?????àÏúºÎ©? Ï∏µÍ≥†Í∞Ä ?íÏ? Ï∞ΩÏù¥???ìÏ? ?µÏ∞Ω???§Ïπò?àÏùÑ ???úÏõê??Í∞úÎ∞©Í∞êÏùÑ Ï§çÎãà??"
                        rating={4.5}
                        tags={["?µÏ∞ΩÏ∂îÏ≤ú", "Í∞úÎ∞©Í∞?, "?§Ìîº??]}
                        features={["Ï¢åÏö∞ ?ëÎèô Î∞©Ïãù", "?ìÏ? ?úÏïº ?ïÎ≥¥", "Í≥°Î©¥ Ï∞??§Ïπò ?©Ïù¥"]}
                    />

                    {/* 10. Klimt (Premium/Artistic Triple) */}
                    <BlindCard
                        title="?¥Î¶º??
                        subtitle="Klimt"
                        description="?¨ÏÑ∏???êÏàò?Ä ?ÖÏ≤¥?ÅÏù∏ ?®ÌÑ¥???ãÎ≥¥?¥Îäî ÏµúÍ≥†Í∏??êÏù¥?úÏûÖ?àÎã§. ÎπõÏùÑ Î∞õÏïò?????úÎü¨?òÎäî Í≥†Ïú†??Î¨∏Ïñë??ÎßàÏπò ?àÏà† ?ëÌíàÍ≥?Í∞ôÏ? ?¨Î??ÅÏù∏ ?ÑÎ¶Ñ?§Ï????†ÏÇ¨?©Îãà??"
                        rating={5.0}
                        tags={["?òÏù¥?îÎìú", "?àÏà†??, "?ÖÏ≤¥?®ÌÑ¥"]}
                        features={["?îÌÖå?ºÌïú ?êÏàò/?®ÌÑ¥", "Í≥†Í∏â?§Îü¨???êÎã®Í∞?, "Ï∞®Î≥Ñ?îÎêú ?∏ÌÖåÎ¶¨Ïñ¥ ?¨Ïù∏??]}
                    />

                    {/* 11. Uni Glide (Vertical Sheer) */}
                    <BlindCard
                        title="?†Îãà Í∏Ä?ºÏù¥??
                        subtitle="Uni-Glide"
                        description="Ïª§Ìäº??Î∂Ä?úÎü¨?ÄÍ≥?Î≤ÑÌã∞Ïª¨Ïùò Í∏∞Îä•???©Ïπú ?ÑÎ¶¨ÎØ∏ÏóÑ ?úÌíà?ÖÎãà?? ?êÎã® ?¨Ïù¥??Î≤†Ïù∏??Ï°∞Ï†à?òÏó¨ ?¨ÏÉù??Î≥¥Ìò∏?Ä ?∏Î? Ï°∞Îßù???ôÏãú??ÎßåÏ°±?úÌÇ§???§Îßà?∏Ìïú ?êÏù¥?úÏûÖ?àÎã§."
                        rating={4.9}
                        tags={["?§Îßà?∏Ïâê?¥Îìú", "Ïª§Ìäº+Î∏îÎùº?∏Îìú", "?∏Î¶¨??]}
                        features={["Í∞úÎ≥Ñ Î≤†Ïù∏ Ï°∞Ï†à Í∞Ä??, "Í±∏Î¶º ?ÜÎäî Î∂Ä?úÎü¨??Ï£ºÌñâ", "Í≥†Í∏â?§Îü¨???¨Ïñ¥ Î£?]}
                    />

                    {/* 12. Honey Glide (Vertical Honeycomb) */}
                    <BlindCard
                        title="?àÎãà Í∏Ä?ºÏù¥??
                        subtitle="Honey-Glide"
                        description="?àÎãàÏΩ??êÏù¥?úÏùò Î≤åÏßë Íµ¨Ï°∞Î•??∏Î°ú??Î≤ÑÌã∞Ïª??ºÎ°ú ?ÅÏö©???úÌíà?ÖÎãà?? ?ìÏ? Í±∞Ïã§ Ï∞ΩÏù¥???úÏä§???ÑÏñ¥???ÅÌï©?òÎ©∞, ?®Ïó¥ ?±Îä•Í≥??∏Î¶¨???¨Îùº?¥Îî© Íµ¨Îèô???ôÏãú??Í∞ñÏ∑Ñ?µÎãà??"
                        rating={4.8}
                        tags={["?®Ïó¥?®Í≥º", "?¨Îùº?¥Îî©", "?úÏä§?úÎèÑ??]}
                        features={["Ï¢åÏö∞ ?¨Îùº?¥Îî© Í∞úÌèê", "?ÅÏõî???êÎÑàÏßÄ ?®Ïú®", "?úÏä§??Ï∞ΩÌò∏ ÎßûÏ∂§"]}
                    />
                </div>
            </section>

            {/* Blind Feature Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Î∏îÎùº?∏ÎìúÎ•??†ÌÉù?¥Ïïº ?òÎäî ?¥Ïú†</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="p-4 bg-orange-50 text-orange-500 rounded-full mb-6">
                                <Sun className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">?ïÍµê??Îπ?Ï°∞Ï†à</h3>
                            <p className="text-gray-500">?¨Îû´??Í∞ÅÎèÑÎ•?Ï°∞Ï†à?òÏó¨ ?§Ïñ¥?§Îäî ÎπõÏùò ?ëÍ≥º Î∞©Ìñ•???êÏú†Î°?≤å Ïª®Ìä∏Î°§Ìï† ???àÏäµ?àÎã§.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="p-4 bg-blue-50 text-blue-500 rounded-full mb-6">
                                <Wind className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">ÍπîÎÅî??Í≥µÍ∞Ñ ?∞Ï∂ú</h3>
                            <p className="text-gray-500">Ï∞ΩÌ? ?àÏóê Îß§Î¶Ω?òÍ±∞????ÎßûÍ≤å ?§Ïπò?òÏó¨ Íµ∞Îçî?îÍ∏∞ ?ÜÎäî Î™®Îçò?òÍ≥† ?¨Ìîå???∏ÌÖåÎ¶¨Ïñ¥Î•??ÑÏÑ±?©Îãà??</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="p-4 bg-green-50 text-green-500 rounded-full mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Í¥ÄÎ¶¨Ïùò ?∏Ïùò??/h3>
                            <p className="text-gray-500">Î®ºÏ?Î•??∏Ïñ¥?¥Í∏∞ ?ΩÍ≥†, ?åÎ£®ÎØ∏ÎäÑ ???ºÎ? ?åÏû¨??Î¨ºÍ±∏??Ï≤?ÜåÍ∞Ä Í∞Ä?•Ìïò??Í¥ÄÎ¶¨Í? ?©Ïù¥?©Îãà??</p>
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
                    ?ÅÏÑ∏Î≥¥Í∏∞ <Info className="w-4 h-4" />
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
                        <span className="text-gray-300 text-5xl font-thin select-none tracking-widest">?úÌíà ?Ä???¥Î?ÏßÄ</span>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Right: Specs & Features */}
                <div className="flex flex-col gap-10">

                    {/* Key Features List */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Ï£ºÏöî ?πÏßï</h3>
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
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">?úÌíà ?¨Ïñë</h3>
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
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Ï∂îÏ≤ú Í≥µÍ∞Ñ</h3>
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
                        <h3 className="text-3xl font-bold text-deep-charcoal">?ÅÏÑ∏ Î™®Îç∏ ?àÎÇ¥</h3>
                        <p className="text-gray-500 mt-2">Í≥µÍ∞ÑÍ≥??©ÎèÑ??ÎßûÎäî ?§Ïñë???ºÏù∏?ÖÏùÑ ?ïÏù∏?¥Î≥¥?∏Ïöî.</p>
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
                                        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">?¥Î?ÏßÄ ?ÅÏó≠</span>
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
                        <h3 className="text-2xl font-bold mb-2">???úÌíà?ºÎ°ú ?úÍ≥µ???êÌïò?úÎÇò??</h3>
                        <p className="text-gray-400">?ÑÎ¨∏Í∞ÄÍ∞Ä ÏßÅÏ†ë Î∞©Î¨∏?òÏó¨ ?ïÌôï???§Ï∏°Í≥??ÅÎã¥???ÑÏ??úÎ¶Ω?àÎã§.</p>
                    </div>
                    <Link href="/" className="px-8 py-4 bg-accent-gold text-white rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-600/20 whitespace-nowrap">
                        Î¨¥Î£å Í≤¨Ï†Å/?ÅÎã¥ ?†Ï≤≠?òÍ∏∞
                    </Link>
                </div>
            </div>
        </div>
    );
}
