"use client"
import { useEffect, useState, useRef } from "react";
import { Icons } from "@/utils/icons";
import { thirdSectionData } from "@/data/thirdSectionData";
// import Image from "next/image";

const ThirdSection = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState('left'); // 'left' or 'right'
    const scrollContainerRef = useRef<HTMLDivElement>(null); // Specify type for the ref
  
    // Scroll speed control
    const scrollSpeed = 40;
  
    // Infinite scroll effect with direction control
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
  
      const scrollContent = () => {
        if (!isPaused && scrollContainer) { // Check if scrollContainer is not null
          // Scroll in the specified direction
          if (direction === 'left') {
            scrollContainer.scrollLeft += 1;
          } else {
            scrollContainer.scrollLeft -= 1;
          }
  
          // Looping back the content once it reaches the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0; // Loop back to the start
          } else if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Loop back to the end if scrolling right
          }
        }
      };
  
      const interval = setInterval(scrollContent, scrollSpeed);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [isPaused, direction]);
  
    // Control buttons
    const handleScrollLeft = () => {
      setDirection('left'); // Scroll to the left
    };
  
    const handleScrollRight = () => {
      setDirection('right'); // Scroll to the right
    };
  
    const handlePause = () => {
      setIsPaused(!isPaused); // Toggle pause/play
    };
  
    return (
      <div className="relative h-full pt-[4rem] bg-[#182E49] text-[#ffffff]">
        {/* Scrolling Section */}
        <div ref={scrollContainerRef} className="h-[80%] flex overflow-x-auto no-scrollbar gap-2 py-8">
          {/* Repeating content to simulate infinite scroll */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-full min-w-[18rem] border-r border-[#ffffff]">
              <div className="w-full flex items-center justify-center flex-col px-[1.2rem]">
                <span className="text-[1.2rem] tracking-[-0.06em]">
                  {thirdSectionData.sections[index % thirdSectionData.sections.length].title}
                </span>
                <span className="text-[0.875rem] tracking-[-0.06em] pt-[2.75rem]">
                  {thirdSectionData.sections[index % thirdSectionData.sections.length].description1}
                </span>
                <span className="text-[0.75rem] tracking-[-0.06em] pt-[1.2rem]">
                  {thirdSectionData.sections[index % thirdSectionData.sections.length].description2}
                </span>
                <span className="text-[0.80rem] tracking-[-0.06em] pt-[1.2rem] font-bold underline text-left">
                  {thirdSectionData.sections[index % thirdSectionData.sections.length].cta}
                </span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Control Section */}
        <div className="h-[20%] w-full flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center py-4 gap-2">
            {/* Left button */}
            <div
              onClick={handleScrollLeft}
              className="w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-md border border-[#ffffff] cursor-pointer hover:bg-gray-200 transition-all duration-200"
            >
              <Icons.chevronLeft />
            </div>
            {/* Pause button */}
            <div
              onClick={handlePause}
              className="w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-200"
            >
              {isPaused ? <Icons.brainCircuit /> : <Icons.pause />}
            </div>
            {/* Right button */}
            <div
              onClick={handleScrollRight}
              className="w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-md border border-[#ffffff] cursor-pointer hover:bg-gray-200 transition-all duration-200"
            >
              <Icons.chevronRight />
            </div>
          </div>
        </div>
      </div>)
}
export default ThirdSection;
        // <section className="h-screen  flex flex-col">
        //     <div className="h-[45%]  pt-[7.75rem] ">
        //         <span className="text-[1.375rem] px-[1.2rem] tracking-[-0.06em]">Instant Financial Sync Across All Platforms</span>
        //         <p className="text-[0.875rem] px-[1.2rem] leading-[92%] pb-[1.8rem]">From invoices to bank transactions, Accountant AI seamlessly integrates with Xero, Quickbooks, Stripe and other leading platforms.</p>
        //         <button className="h-[2.5rem] mx-[1.2rem] rounded-2xl px-4 py-2 text-white bg-black">See in Action</button>

        //         <div className="w-full px-[1.2rem] overflow-x-auto no-scrollbar flex gap-4 pt-[2rem]">
        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/xero.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>
        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/qb.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>
        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/gdrive.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>

        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/onedrive.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>

        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/gmail.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>
        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/netsuite.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>
        //             <div className="h-[5rem]  min-w-[5rem] flex items-center justify-center rounded-lg ">
        //             <Image src={'/logos/stripe.svg'} alt="" height={64} width={64} className="object-cover" />
        //             </div>
                    
        //         </div>

        //     </div>
        //     <div className="h-[55%] ">
        //         <div className="h-[80%]  flex overflow-x-auto no-scrollbar gap-2 py-8">
        //             <div className="h-full min-w-[16rem] border-r  border-white">
        //                 <div className="w-full flex items-center justify-center flex-col px-[1.2rem]">
        //                 <span className="text-[1.2rem] tracking-[-0.06em]">TOTAL COST OF OWNERSHIP</span>
        //                 <span className="text-[0.875rem] tracking-[-0.06em] pt-[2.75rem]">Compare costs across leading document processing apps, using Accountant Ai&apos;s pricing comparision.</span>
        //                 <span className="text-[0.75rem] tracking-[-0.06em] pt-[1.2rem]">Use our new TCO calculator to see how Accountant Ai can help your business reduce costs and increase revenue, built with data from an independent, leading consulting firm.</span>
        //                 </div>
        //             </div>
        //             <div className="h-full min-w-[16rem] border-r  border-white ">
        //             <div className="w-full flex items-center justify-center flex-col px-[1.2rem]">
        //                 <span className="text-[1.2rem] tracking-[-0.06em]">TOTAL COST OF OWNERSHIP</span>
        //                 <span className="text-[0.875rem] tracking-[-0.06em] pt-[2.75rem]">Compare costs across leading document processing apps, using Accountant Ai&apos;s pricing comparision.</span>
        //                 <span className="text-[0.75rem] tracking-[-0.06em] pt-[1.2rem]">Use our new TCO calculator to see how Accountant Ai can help your business reduce costs and increase revenue, built with data from an independent, leading consulting firm.</span>
        //                 </div>
        //             </div>
        //             <div className="h-full min-w-[16rem] border-r  border-white ">
        //             <div className="w-full flex items-center justify-center flex-col px-[1.2rem]">
        //                 <span className="text-[1.2rem] tracking-[-0.06em]">TOTAL COST OF OWNERSHIP</span>
        //                 <span className="text-[0.875rem] tracking-[-0.06em] pt-[2.75rem]">Compare costs across leading document processing apps, using Accountant Ai&apos;s pricing comparision.</span>
        //                 <span className="text-[0.75rem] tracking-[-0.06em] pt-[1.2rem]">Use our new TCO calculator to see how Accountant Ai can help your business reduce costs and increase revenue, built with data from an independent, leading consulting firm.</span>
        //                 </div>
        //             </div>
        //             <div className="h-full min-w-[16rem] ">
        //             <div className="w-full flex items-center justify-center flex-col px-[1.2rem]">
        //                 <span className="text-[1.2rem] tracking-[-0.06em]">TOTAL COST OF OWNERSHIP</span>
        //                 <span className="text-[0.875rem] tracking-[-0.06em] pt-[2.75rem]">Compare costs across leading document processing apps, using Accountant Ai&apos;s pricing comparision.</span>
        //                 <span className="text-[0.75rem] tracking-[-0.06em] pt-[1.2rem]">Use our new TCO calculator to see how Accountant Ai can help your business reduce costs and increase revenue, built with data from an independent, leading consulting firm.</span>
        //                 </div>
        //             </div>

        //         </div>
        //         <div className="h-[20%] w-full flex items-center justify-center">   
        //              <div className="w-full h-full flex items-center justify-center  py-4 gap-2">
        //                 <div className="w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-md border border-white"><Icons.chevronLeft/></div>
        //                 <div className="w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-md"><Icons.pause/></div>
        //                 <div className="w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-md border border-white"><Icons.chevronRight/></div>

        //             </div>
        //          </div>
        //     </div>
        // </section>