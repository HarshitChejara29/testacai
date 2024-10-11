"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { nineSectionData } from "@/data/nineSectionData";

const NineSection = () => {
  const images = nineSectionData.sections;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image and text every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="w-full h-screen mb-10">
      <div className="flex flex-col items-start justify-start px-[1.2rem] pt-[3.75rem] gap-[0.5rem]">
        <span className="text-[1rem] tracking-[-0.06em]">CENTRALIZED BUSINESS OPERATIONS</span>
        <span className="text-[1.375rem] tracking-[-0.06em] font-medium">Streamline your back office tasks.</span>
      </div>

      <div className="flex flex-col items-start justify-start">
        {/* images */}
        <div className="flex gap-4 px-[1.2rem] overflow-x-auto no-scrollbar">
          <div className="flex min-w-[60%] h-[410px] items-center justify-center">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              height={410} width={395}
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* tabs */}
        <div className="flex px-[1.2rem] gap-2 pt-[1.5rem]">
          {images.map((_, index) => (
            <div key={index} className={`h-[0.0625rem] ${currentIndex === index ? "bg-white" : "bg-gray-400"} w-[4.5rem]`}></div>
          ))}
        </div>

        {/* text */}
        <div className="flex flex-col px-[1.2rem] pt-[2.5rem]">
          <span className="font-semibold">{images[currentIndex].title}</span>
          <span className="pt-[1.125rem]">{images[currentIndex].description}</span>
          <Link href={images[currentIndex].link} className="text-white underline pt-[2.875rem]">{images[currentIndex].linkText}</Link>
        </div>
      </div>
    </section>
  );
};

export default NineSection;
