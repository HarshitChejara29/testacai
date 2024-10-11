"use client";

import { useState } from "react";
import { planData } from "@/data/plan";
import Image from "next/image";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const [isYearly, setIsYearly] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Find the current plan based on the selected plan name
  const currentPlan = planData.Plans.find(plan => plan.name === selectedPlan);

  return (
    <>
      <section className="bg-[#d1e4ed]">
        {/* Payment Options */}
        <div className="flex justify-center py-8">
          <div className="bg-[#ffffff] bg-opacity-80 border border-1 border-black rounded-full p-1 flex">
            <button onClick={() => setIsYearly(false)} className={`text-sm rounded-full px-4 py-1 transition-colors duration-300 ${!isYearly ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#ffffff] bg-opacity-80 text-black'}`}>
              Pay Monthly
            </button>
            <button onClick={() => setIsYearly(true)} className={`text-sm rounded-full px-4 py-1 transition-colors duration-300 ml-2 ${isYearly ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#ffffff] bg-opacity-80 text-black'}`}>
              Pay Yearly (save 10%)
            </button>
          </div>
        </div>

        {/* Plans Table */}
        <div className="bg-[#ffffff] grid grid-cols-4 text-center">
          {planData.Plans.map(plan => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)} // Set the selected plan
              className={`border p-4 cursor-pointer ${selectedPlan === plan.name ? "bg-[#f4f4f5] font-bold border-t-4 border-t-[#35b3e5] p-4" : ""}`}
            >
              {plan.name}
            </div>
          ))}
          {currentPlan && (
          <div className="col-span-4 p-2 font-medium">
            {currentPlan.freeDocuments} Documents free for you to try
          </div>
          )}
        </div>

        {/* Plan Details */}
        {currentPlan && (
          <div className="px-[1.2rem] py-3">
            <div className="flex flex-row items-center py-5 mb-2">
              <div className="mr-4">
                <h1 className="font-semibold">{currentPlan.name}</h1>
                <p className="font-medium">{currentPlan.description}</p>
              </div>
              {currentPlan.mostPopular && (
                <button className="font-bold text-sm text-[#ffffff] bg-[#000000] px-8 py-[0.2rem] rounded-full ml-auto">
                  Most Popular
                </button>
              )}
            </div>

            {/* Pricing */}
            <h1 className="text-5xl">
              {currentPlan.price} <span className="text-lg">{isYearly ? currentPlan.year : currentPlan.month}</span>
            </h1>
            <p className="text-xs">{isYearly ? "billed once yearly" : "billed once monthly"}</p>
            <div className="border-t border-1 border-[#ffffff] py-3 mt-4"></div>

            {/* Per Page Analysis */}
            <h1 className="font-semibold mb-2">Per Page analysis starting at</h1>
            <p className="text-sm ml-5">{currentPlan.perPageAnalysis}</p>

            {/* Standout Features */}
            <div className="mt-2">
              <h1 className="font-semibold mb-2">Standout features</h1>
              <div className="text-sm ml-5 mb-5 space-y-2">
                {currentPlan.standoutFeatures.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </div>
            </div>

            {/* Try For Free Button */}
            <button className="font-bold bg-[#FFFFFF] bg-opacity-80 border border-[0.4px] border-black rounded-full w-full py-2">
              Try For Free
            </button>
          </div>
        )}
      </section>

      {/* Full List of Features */}
      <div className="border-t border-b">
        <h1 className="px-4 mt-4 mb-4 font-semibold flex justify-between items-center cursor-pointer" onClick={handleToggle}>
          Full list of features
          <svg className={`ml-auto w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h1>
        {isOpen && currentPlan && (
          <div className="mt-5">
            {currentPlan.features.map((featureGroup, featureGroupIndex) => (
              <div key={featureGroupIndex}>
                {/* Display the title of the subfeatures group */}
                {featureGroup.subfeatures.map((subfeature, subfeatureIndex) => (
                  <li
                    key={subfeatureIndex}
                    className="w-full flex justify-between items-center border-b border-[#ffffff] border-opacity-[50%]"
                  >
                    {/* Render the title only if it's a title object */}
                    {subfeature.title ? (
                      <h1 className="w-full bg-[#d1e4ed] font-bold p-4">{subfeature.title}</h1>
                    ) : (
                      <>
                        {/* Render the feature name */}
                        <span className="px-4 text-black py-2">{subfeature.feature}</span>

                        {/* Render either text or icon */}
                        <div className="px-4">
                        {subfeature.text ? (
                          <span className="ml-auto text-sm text-gray-500">{subfeature.text}</span>
                        ) : (
                          subfeature.feature && ( // Only render if subfeature.feature is defined
                            <Image
                              src={subfeature.icon}
                              alt={subfeature.feature} // Now safe to use
                              className="ml-auto w-5 h-5"
                              width={20}
                              height={20}
                            />
                          )
                        )}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

    </>
  );
};

export default Plans;
