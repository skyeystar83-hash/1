import React from "react";
import Image from "next/image";
import ConsultationButton from "@/components/ui/ConsultationButton";

export default function AboutPage() {
    return (
        <div className="w-full bg-white text-deep-charcoal">
            {/* Header / Intro Section */}
            <section className="relative py-24 px-6 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-accent-gold font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-6 block">
                        KICCOMPANY
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        공간??가치�? ?�이??br />
                        ?�리미엄 ?��??�링
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                        ?�비창커?��? ?�행??쫓기보다<br />
                        ?�래?�록 머물�??��? ?�안??공간??만듭?�다.
                    </p>
                </div>

                {/* Main Image */}
                <div className="max-w-6xl mx-auto mb-24 relative aspect-video md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl">
                    <Image
                        src="/images/about_main.jpg"
                        alt="KICCOMPANY Premium Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white text-right">
                        <p className="font-light tracking-widest text-sm opacity-80">PREMIUM FABRIC & BLINDS</p>
                        <p className="font-bold text-2xl">NAVICHANG</p>
                    </div>
                </div>

                {/* Core Competency & Dexter Blind */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-3xl font-bold mb-8">
                        ?�비창커?�의 기�??� <span className="text-accent-gold">?�질</span>?�니??
                    </h2>
                    <p className="text-gray-600 leading-8 text-lg mb-10">
                        ?�비창커?��? <span className="font-bold text-deep-charcoal">?�랑?? ?�르키?�산 최고�??�입 ?�단</span>�?br className="hidden md:block" />
                        <span className="font-bold text-deep-charcoal">?�리미엄 �?�� ?�단</span>??주력?�로 ?�용?�여 ?�공?�니??<br /><br />
                        ?�한, �?�� 1??블라?�드 브랜?�인<br />
                        <span className="font-bold text-deep-charcoal">?�스??블라?�드 (DEXTER Blind)</span> ?�품만을 취급?�여<br />
                        최상???�구?�과 ?�자?�을 보장?�니??
                    </p>

                    {/* Dexter Logo Placeholder Area */}
                    <div className="flex justify-center items-center py-8">
                        <div className="px-10 py-4 border-2 border-gray-200 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            {/* Text Logo Representation for Dexter */}
                            <span className="text-3xl font-black tracking-tighter text-gray-800 font-sans">
                                DEXTER <span className="font-light">Blind</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">DIFFERENTIATION</span>
                        <h3 className="text-3xl md:text-4xl font-bold">?�비창만??차별??/h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Point 1 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">빛샘 ?�는 ?�수 ?�일 ?�공</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                ?�막 ?�능?� ?�단�??�니???�일�??�공 ?�테?�에??결정?�니??
                                ?�비창커?��? 빛샘??최소?�한 ?�수 ?�일�??��? ?�공?�로 ?�성??차이�?만듭?�다.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">무�?�??�공 ?�문</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                �??�상 ?�이 깔끔?�게 ?�성?�는 무�?�??�공?�로 ?�축, ?�주, ?�세, ?�파????
                                ?�양??주거 ?�경???�정?�으�??�용?�니??
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">공간 맞춤 ?�안</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                거실, ?�방, ?��?�???공간�??�도?� 채광??분석??
                                ?�막커튼, ?�폰, ?�입 ?��?, ?�드·?�루미늄 ?�스??블라?�드까�? 가???�합??조합???�안?�니??
                            </p>
                        </div>

                        {/* Point 4 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">?�사??중심 부가 ?�비??/h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                <span className="font-bold text-accent-gold">"?�뻐??커튼?�다"</span><br />
                                ?��? ?�현?�기 ?�해 ?�하?�다�?거실??<span className="font-bold">LED 줄조�?무상 ?�공</span> ?�비?��? ?�행?�고 ?�습?�다.
                            </p>
                        </div>

                        {/* Point 5 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold lg:col-span-2">
                            <h4 className="text-xl font-bold mb-4">직접 ?�담 · 직접 ?�공</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                ?�주 ?�는 100% 직접 ?�공 ?�칙?�로 ?�담 ?�용�??�공 결과??차이�?최소?�하�?
                                ?�공 ?�까지 책임지???�실???�후관리�? ?�공?�니??
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">?�리???�속</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h5 className="font-bold text-lg mb-2">?�명??견적</h5>
                            <p className="text-gray-500 text-sm">?�명 그�?�?진행?�는<br />?�직??가�?/p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                            </div>
                            <h5 className="font-bold text-lg mb-2">?��? ?�공 ?�성??/h5>
                            <p className="text-gray-500 text-sm">?�진보다 만족?�러??br />?�테?�의 차이</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h5 className="font-bold text-lg mb-2">?�실???�후관�?/h5>
                            <p className="text-gray-500 text-sm">?�치 ?�에???�뢰?????�는<br />지??관�??�스??/p>
                        </div>
                    </div>

                    <div className="bg-deep-charcoal text-white p-10 md:p-16 rounded-sm">
                        <p className="text-lg md:text-2xl leading-relaxed font-light mb-8">
                            "?�비창커?��? ?�려?�보??<span className="font-bold text-accent-gold">?�성??/span>�?<br />
                            말보??<span className="font-bold text-accent-gold">결과</span>�??�뢰�??�아갑니??"
                        </p>
                        <p className="text-gray-400 mb-8">공간??가?????�울리는 �? ?�비창커?�이 ?�께 고�??�겠?�니??</p>
                        <ConsultationButton className="inline-block px-8 py-3 bg-white text-deep-charcoal font-bold hover:bg-accent-gold hover:text-white transition-colors" text="무료 ?�담 ?�청?�기" />
                    </div>
                </div>
            </section>
        </div>
    );
}
