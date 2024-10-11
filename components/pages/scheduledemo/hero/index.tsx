"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import Scheduledemo from "@/components/globals/forms/scheduledemo";

const Hero = () => {
    const [date, setDate] = React.useState(today(getLocalTimeZone()));
    const [isPopupOpen, setPopupOpen] = useState(false);
    const { locale } = useLocale();
    const isInvalid = isWeekend(date, locale);

    const togglePopup = () => {
        setPopupOpen((prev) => !prev);
    };

    return (
        <>
            <section className="relative bg-[#d1e4ed] z-0 w-full z-0 flex flex-col ">
                <div className="relative z-0 h-full px-[1.2rem]">
                    <div className="relative z-10 h-max flex flex-col pt-[6.81rem] gap-[0.2rem] mb-16">
                        <p className="text-sm font-bold">SCHEDULE DEMO</p>
                        <h2 className="text-xl font-semibold title-font mb-5 max-w-[70%]">SEE ACCOUNTANT AI IN ACTION</h2>
                        <div className="mt-4">
                            <p className="text-lg leading-[100%]">We will talk through your current finance data flow, and then dive into areas of Accountant Ai relevant for your team.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center mt-32">
                            <Image src="/backgrounds/bg_image.png" alt="integration" width={80} height={80} />
                            <h1 className="text-lg mt-2 font-semibold">ACCOUNTANT AI INTRO</h1>

                            <div className="w-full max-w-xs px-4 text-left">
                                <Calendar
                                    aria-label="Date (Invalid on weekends)"
                                    errorMessage={isInvalid ? <span className="text-red-500 px-4">We are closed on weekends</span> : undefined}
                                    isInvalid={isInvalid}
                                    value={date}
                                    onChange={setDate}
                                />
                            </div>

                            <button onClick={togglePopup} className="mt-10 font-bold bg-[#FFFFFF] bg-opacity-80 border border-[0.4px] border-black rounded-full w-full py-2">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Form */}
            {isPopupOpen && (
                <div className="fixed inset-0 px-4 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50 backdrop-blur-md">
                    <div className={`bg-[#ffffff] rounded-lg shadow-lg w-full max-w-md p-4 transform transition-transform duration-300`}>
                        <div className="flex justify-end">
                            <button className="text-gray-500" onClick={togglePopup}>
                                <span className="text-2xl">&times;</span>
                            </button>
                        </div>
                        <Scheduledemo/>
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;
