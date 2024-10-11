"use client";
import { Icons } from "@/utils/icons";
import { useRef } from "react";
import Image from "next/image";
import { tenthSectionData } from "@/data/tenthSectionData";

const TenthSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -410, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 410, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-[80vh] pt-[4.75rem] px-[1.2rem]">
      <div className="w-full overflow-x-auto no-scrollbar flex gap-4" ref={scrollRef}>
        {tenthSectionData.sections.map((section, index) => (
          <div key={index} className="flex flex-col rounded-lg w-full flex-shrink-0">
            <div className="w-full flex items-center justify-center pb-[1.2rem]">
              <Image
                src={section.src}
                alt={`Image of ${section.name}`}
                height={410}
                width={395}
                className="object-cover rounded-lg"
              />
            </div>
            <span className="text-center px-10 text-[1.2rem] tracking-[-0.06em] leading-none">{section.description}</span>
            <span className="text-center pt-[0.375rem]">{section.name}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex py-4 gap-2">
        <div onClick={scrollLeft} className="w-[2.25rem] h-[2.25rem] border border-[#000000] flex items-center justify-center rounded-md cursor-pointer">
          <Icons.chevronLeft />
        </div>
        <div onClick={scrollRight} className="w-[2.25rem] h-[2.25rem] border border-[#000000] flex items-center justify-center rounded-md cursor-pointer">
          <Icons.chevronRight />
        </div>
      </div>
    </section>
  );
};

export default TenthSection;
