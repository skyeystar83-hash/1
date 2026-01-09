"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpecialProjectSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".special-item", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Placeholder data
    const apecItems = [1, 2, 3, 4];
    const schoolItems = [1];
    const hospitalItems = [1, 2];
    const dentalItems = [1];
    const pensionItems = [1, 2];
    const restaurantItems = [1];

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#f9f9f9] overflow-hidden">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Special Projects</span>
                <h2 className="text-3xl md:text-5xl font-bold text-deep-charcoal">Í¥ÄÍ≥µÏÑú,?ôÍµê,Î≥ëÏõê ?πÌåê?úÍ≥µ</h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                {/* APEC Section (Mixed Showcase) */}
                <div>
                    <div className="border-l-4 border-accent-gold pl-4 mb-8">
                        <h3 className="text-2xl font-bold text-deep-charcoal">APEC ?àÏà†???ÑÎãπ</h3>
                        <p className="text-gray-500 mt-1">Special Project Showcase</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* 1. APEC Stage */}
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <Image
                                src="/images/apec-1.jpg"
                                alt="APEC Project 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                        {/* 2. Curtain Detail */}
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <h3 className="text-2xl font-bold text-deep-charcoal">APEC ?àÏà†???ÑÎãπ</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/apec-1.jpg"
                                        alt="APEC Project 1"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/apec-2.jpg"
                                        alt="APEC Project 2"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/apec-3.jpg"
                                        alt="APEC Project 3"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/apec-4.jpg"
                                        alt="APEC Project 4"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Proj 2: School (Video) */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">EDUCATION</span>
                                <h3 className="text-2xl font-bold text-deep-charcoal">?ôÍµê</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2].map((item) => (
                                    <div key={item} className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                                        <video className="w-full h-full object-cover" controls muted loop>
                                            <source src={`/1/videos/school-${item}.mp4`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-gray-500 text-sm">?ôÏÉù?§Ïùò ?úÎ†• Î≥¥Ìò∏?Ä ?ôÏäµ ?•Î•† ?•ÏÉÅ???ÑÌïú ?àÎ???Î∞©Ï? ?îÎßâ Î°§Ïä§?¨Î¶∞ ?úÍ≥µ</p>
                        </div>

                        {/* Proj 3: Hospital */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">MEDICAL</span>
                                <h3 className="text-2xl font-bold text-deep-charcoal">Î≥ëÏõê</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/hospital-1.jpg"
                                        alt="Hospital Project 1"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/hospital-2.jpg"
                                        alt="Hospital Project 2"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                            <p className="mt-4 text-gray-500 text-sm">?òÏûê?§Ïùò ?àÏ†ï???ÑÌïú Î∞©Ïóº ??∑† Î∏îÎùº?∏Îìú Î∞?Î≥ëÏã§ Í∞??åÌã∞???úÍ≥µ</p>
                        </div>

                        {/* Proj 4: Dental (Video) */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-xs font-bold">CLINIC</span>
                                <h3 className="text-2xl font-bold text-deep-charcoal">ÏπòÍ≥º</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1].map((item) => (
                                    <div key={item} className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                                        <video className="w-full h-full object-cover" controls muted loop>
                                            <source src={`/1/videos/dental-${item}.mp4`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Proj 5: Pension */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">RESORT</span>
                                <h3 className="text-2xl font-bold text-deep-charcoal">?úÏÖò</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                                    <video className="w-full h-full object-cover" controls muted loop>
                                        <source src="/1/videos/pension-1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/pension-2.jpg"
                                        alt="Pension Project 2"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Proj 6: Restaurant */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">COMMERCIAL</span>
                                <h3 className="text-2xl font-bold text-deep-charcoal">?ùÎãπ</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                                    <video className="w-full h-full object-cover" controls muted loop>
                                        <source src="/1/videos/restaurant-1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group">
                                    <Image
                                        src="/images/restaurant-3.jpg"
                                        alt="Restaurant Project 3"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>    {/* Pension 2 (Image) */}
                            <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                <Image
                                    src="/images/?úÏÖò2.jpg"
                                    alt="Pension Project 2"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="border-l-4 border-accent-gold pl-4 mb-8">
                        <h3 className="text-2xl font-bold text-deep-charcoal">?ùÎãπ</h3>
                        <p className="text-gray-500 mt-1">Restaurants & Cafes</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <video
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/videos/?ùÎãπ1.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <Image
                                src="/images/restaurant-3.jpg"
                                alt="Restaurant Project 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
