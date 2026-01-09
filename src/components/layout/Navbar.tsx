"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";

import { useConsultation } from "@/context/ConsultationContext";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const megaMenuRef = useRef<HTMLDivElement>(null);
    const menuOverlayRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const { openModal } = useConsultation();

    // Mega Menu Data Structure
    const megaMenuData: { [key: string]: { title: string, href: string }[] } = {
        "커튼": [
            { title: "사계절커튼", href: "/products?category=curtain&type=four-seasons" },
            { title: "암막커튼", href: "/products?category=curtain&type=blackout" },
            { title: "100% 암막커튼", href: "/products?category=curtain&type=perfect-blackout" },
            { title: "속지커튼", href: "/products?category=curtain&type=sheer" },
        ],
        "블라인드": [
            { title: "롤 블라인드", href: "/products?category=blind&type=roll" },
            { title: "콤비 블라인드", href: "/products?category=blind&type=combi" },
            { title: "이노윈 쉐이드", href: "/products?category=blind&type=inowin" },
            { title: "우드 블라인드", href: "/products?category=blind&type=wood" },
            { title: "알루미늄 블라인드", href: "/products?category=blind&type=aluminum" },
            { title: "허니콤 쉐이드", href: "/products?category=blind&type=honeycomb" },
            { title: "샬렛 쉐이드", href: "/products?category=blind&type=charlet" },
            { title: "내츄럴 쉐이드", href: "/products?category=blind&type=natural" },
            { title: "버티컬 블라인드", href: "/products?category=blind&type=vertical" },
            { title: "클림트", href: "/products?category=blind&type=klimt" },
            { title: "유니 글라이드", href: "/products?category=blind&type=uni-glide" },
            { title: "허니 글라이드", href: "/products?category=blind&type=honey-glide" },
        ],
    };

    const simpleLinks = [
        { name: "회사소개", href: "/about" },
        { name: "시스템", href: "/electric" }, // Assuming System maps to Electric or similar
        { name: "포트폴리오", href: "/projects" },
        { name: "고객후기", href: "/reviews" },
    ];

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sticky Navbar animation
    useEffect(() => {
        if (navRef.current) {
            if (isScrolled || activeSubMenu) { // White bg when scrolled OR submenu open
                gsap.to(navRef.current, {
                    backgroundColor: "#ffffff",
                    color: "#1a1a1a",
                    borderBottom: "1px solid #e5e5e5",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                gsap.to(navRef.current, {
                    backgroundColor: "transparent",
                    color: "#1a1a1a", // Always use dark text for visibility in this design iteration or switch to white if on dark hero
                    borderBottom: "1px solid transparent",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    }, [isScrolled, activeSubMenu]);

    // Mega Menu Hover Logic
    const handleMouseEnter = (menuName: string) => {
        setActiveSubMenu(menuName);
    };

    const handleMouseLeave = () => {
        setActiveSubMenu(null);
    };


    return (
        <header
            onMouseLeave={handleMouseLeave}
            className="fixed top-0 left-0 w-full z-50 transition-all font-medium text-sm"
        >
            {/* Main Nav Bar */}
            <nav
                ref={navRef}
                className="w-full flex items-center justify-between px-6 md:px-12 bg-white/0 transition-colors duration-300"
            >
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-2xl font-bold tracking-tighter z-50" onClick={() => setIsMenuOpen(false)}>
                        NAVICHANG
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 relative items-center h-full">
                        <Link href="/about" className="hover:text-accent-gold transition-colors py-4">회사소개</Link>

                        {/* Mega Menu Triggers */}
                        {["커튼", "블라인드"].map((menu) => (
                            <button
                                key={menu}
                                onMouseEnter={() => handleMouseEnter(menu)}
                                className={`py-4 hover:text-accent-gold transition-colors flex items-center gap-1 ${activeSubMenu === menu ? "text-accent-gold" : ""}`}
                            >
                                {menu}
                                {/* <ChevronDown size={14} /> */}
                            </button>
                        ))}

                        <Link href="/electric" className="hover:text-accent-gold transition-colors py-4">시스템</Link>
                        <Link href="/projects" className="hover:text-accent-gold transition-colors py-4">포트폴리오</Link>
                        <Link href="/reviews" className="hover:text-accent-gold transition-colors py-4">고객후기</Link>
                        <button
                            onClick={openModal}
                            className="hover:text-accent-gold transition-colors text-left py-4"
                        >
                            상담문의
                        </button>
                    </div>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mega Menu Content (Desktop) */}
            <div
                ref={megaMenuRef}
                className={`hidden md:block absolute top-[100%] left-0 w-full bg-white border-b border-gray-100 shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${activeSubMenu ? "max-h-[400px] py-10 opacity-100" : "max-h-0 py-0 opacity-0"}`}
                onMouseEnter={() => { }} // Keep menu open when hovering the content
            >
                <div className="max-w-7xl mx-auto px-12 grid grid-cols-4 gap-8">
                    {/* Only show content if activeSubMenu matches curtain or blind */}
                    {activeSubMenu && megaMenuData[activeSubMenu] ? (
                        <>
                            {/* First Column: Title (Optional) */}
                            <div className="col-span-1 border-r border-gray-100 pr-8">
                                <h3 className="text-2xl font-bold mb-4 text-deep-charcoal">{activeSubMenu}</h3>
                                <p className="text-gray-500 font-normal leading-relaxed text-sm">
                                    나비창의 프리미엄 {activeSubMenu} 컬렉션을 만나보세요. <br />
                                    공간의 가치를 높여주는 최고의 선택입니다.
                                </p>
                            </div>

                            {/* Remaining Columns: Items */}
                            <div className="col-span-3 grid grid-cols-3 gap-y-4 gap-x-8">
                                {megaMenuData[activeSubMenu].map((item: any) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="text-gray-600 hover:text-accent-gold transition-colors block py-1 hover:pl-2 duration-200"
                                        onClick={() => setActiveSubMenu(null)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[49] bg-white pt-24 px-6 md:hidden overflow-y-auto">
                    <div className="flex flex-col gap-6 text-lg font-medium">
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>회사소개</Link>

                        <div className="space-y-4">
                            <div className="font-bold text-gray-400 text-sm">커튼</div>
                            <div className="pl-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
                                {megaMenuData["커튼"].map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.title}</Link>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="font-bold text-gray-400 text-sm">블라인드</div>
                            <div className="pl-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
                                {megaMenuData["블라인드"].map(item => (
                                    <Link key={item.title} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.title}</Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/electric" onClick={() => setIsMenuOpen(false)}>시스템</Link>
                        <Link href="/projects" onClick={() => setIsMenuOpen(false)}>포트폴리오</Link>
                        <Link href="/reviews" onClick={() => setIsMenuOpen(false)}>고객후기</Link>
                        <button onClick={() => { setIsMenuOpen(false); openModal(); }} className="text-left text-accent-gold">상담문의</button>
                    </div>
                </div>
            )}
        </header>
    );
}
