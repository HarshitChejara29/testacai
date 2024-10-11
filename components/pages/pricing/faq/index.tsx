"use client";

import React, { useState } from 'react';
import { faqData } from "@/data/faq";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null); // Define openIndex as either a string (unique ID) or null

    // Function to toggle the open state
    const toggleOpen = (uniqueIndex: string) => {
        setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex);
    };

    return (
        <>
            <section className="text-[#ffffff] bg-[#003651] body-font">
                <div className="container mx-auto px-5 py-10">
                    <h1 className="text-3xl font-medium max-w-[80%] mx-auto text-center mb-10 text-[#ffffff]">
                        Frequently Asked Questions
                    </h1>

                    <div className="w-full sm:items-center items-start flex flex-col gap-5">
                        {faqData.Faqs[0].features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="w-full">
                                {feature.title && <h1 className="font-bold py-2">{feature.title}</h1>}
                                {feature.content.map((item, index) => {
                                    // Create a unique index for each item using both featureIndex and index
                                    const uniqueIndex = `${featureIndex}-${index}`;

                                    return (
                                        <div key={index} className="w-full py-3">
                                            <label
                                                onClick={() => toggleOpen(uniqueIndex)}
                                                className="flex items-center justify-between sm:pr-16 text-xl title-font cursor-pointer"
                                            >
                                                <span className="max-w-[95%]">{item.question}</span>
                                                <svg
                                                    className={`ml-auto w-5 h-5 transition-transform duration-300 ease-in-out ${
                                                        openIndex === uniqueIndex ? 'rotate-180' : ''
                                                    }`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </label>
                                            <div
                                                className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
                                                    openIndex === uniqueIndex ? 'max-h-[500px]' : ''
                                                }`}
                                            >
                                                <p className="mt-2 text-base text-gray-300 leading-relaxed">{item.answer}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
