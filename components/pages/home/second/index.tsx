"use client";

import { useRef } from "react";
import Image from "next/image";
import { Icons } from "@/utils/icons";

const SecondSection = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <section className="h-screen flex flex-col bg-white text-black">
            <div className="h-[65%] pt-[1.5rem] px-[1.2rem] flex flex-col items-start justify-start">
                <div className="w-full h-max flex items-center justify-center">
                    <Image height={362} width={405} className="object-cover" alt="" src={'/illustrations/home2.png'} />
                </div>
                <div className="grid grid-cols-2 w-full h-full text-[#ffffff]">
                    <div className="flex items-center justify-center max-w-[70%] h-full"><span>Faster Month-End Closing</span></div>
                    <div className="flex items-center justify-center max-w-[70%]"><span>Secure Document Storage</span></div>
                    <div className="flex items-center justify-center max-w-[70%]"><span>Automated Data Processing</span></div>
                    <div className="flex items-center justify-center max-w-[70%]"><span>Mobile Access on the Go</span></div>
                </div>
            </div>
            <div className="h-auto bg-black text-[#ffffff] pt-[3.75rem] px-[1.2rem] w-full">
                <span className="text-[1.125rem] tracking-[-0.06em] uppercase font-light">EXPLORE HOW ACCOUNTANT AI CAN HELP YOU</span>
                <div ref={scrollRef} className="w-full max-w-screen overflow-x-auto no-scrollbar flex gap-4 pt-[2rem]">
                    <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border border-[#ffffff] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                        <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                            <Icons.building2 size={36} />
                        </div>
                        <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Enterprises</span>
                        <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                    </div>
                    <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border border-[#ffffff] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                        <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                            <Icons.userPlus size={36} />
                        </div>
                        <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Startups</span>
                        <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                    </div>
                    <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border border-[#ffffff] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                        <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                            <Icons.handShake size={36} />
                        </div>
                        <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Accounting Firms</span>
                        <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                    </div>
                    <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border border-[#ffffff] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                        <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                            <Icons.building size={36} />
                        </div>
                        <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Businesses</span>
                        <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                    </div>
                </div>
                <div className="w-full h-full flex py-4 gap-2">
                    <div
                        onClick={scrollLeft}
                        className="w-[2.25rem] h-[2.25rem] border border-[#ffffff] flex items-center justify-center rounded-md cursor-pointer"
                    >
                        <Icons.chevronLeft />
                    </div>
                    <div
                        onClick={scrollRight}
                        className="w-[2.25rem] h-[2.25rem] border border-[#ffffff] flex items-center justify-center rounded-md cursor-pointer"
                    >
                        <Icons.chevronRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
