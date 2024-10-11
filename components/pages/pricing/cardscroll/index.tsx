"use client";

import { useRef } from 'react';
import { Icons } from "@/utils/icons";

const Cardscroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <section className="flex flex-col bg-[#ffffff] text-black">
                <div className="h-auto text-[#000000] py-8 px-[1.2rem] w-full">
                    <div className="py-5">
                        <span className="text-[1.125rem] tracking-[-0.06em] uppercase font-light">WHAT EVERY PLAN GETS YOU</span>
                    </div>

                    {/* Scrollable section */}
                    <div className="w-full max-w-screen overflow-x-auto no-scrollbar flex gap-4 pt-[2rem]" ref={scrollRef}>
                        <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border bg-[#d1e4ed] border-[#000000] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                            <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                                <Icons.building2 size={36} />
                            </div>
                            <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Multiple Inbound and Outbound Integrations</span>
                            <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                        </div>
                        <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border bg-[#d1e4ed] border-[#000000] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                            <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                                <Icons.userPlus size={36} />
                            </div>
                            <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Multiple Inbound and Outbound Integrations</span>
                            <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                        </div>
                        <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border bg-[#d1e4ed] border-[#000000] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                            <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                                <Icons.handShake size={36} />
                            </div>
                            <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Multiple Inbound and Outbound Integrations</span>
                            <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                        </div>
                        <div className="h-[12rem] w-[68%] flex flex-col min-w-[20rem] rounded-lg border bg-[#d1e4ed] border-[#000000] pt-[1.8125rem] pb-[2rem] px-[0.875rem]">
                            <div className="min-h-[2.25rem] w-[2.25rem] flex items-center justify-center rounded-lg">
                                <Icons.building size={36} />
                            </div>
                            <span className="text-[1.125rem] font-semibold pt-[1.125rem]">Multiple Inbound and Outbound Integrations</span>
                            <span className="text-[0.875rem]">The modern, compatible app for intelligent accounting</span>
                        </div>
                    </div>

                    {/* Scroll buttons */}
                    <div className="w-full h-full flex py-4 gap-2">
                        <button onClick={scrollLeft} className="w-[2.25rem] h-[2.25rem] border border-[#000000] flex items-center justify-center rounded-md">
                            <Icons.chevronLeft />
                        </button>
                        <button onClick={scrollRight} className="w-[2.25rem] h-[2.25rem] border border-[#000000] flex items-center justify-center rounded-md">
                            <Icons.chevronRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cardscroll;
