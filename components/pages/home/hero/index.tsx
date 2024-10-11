import { Video } from "@/components/globals/videoplayer";

const HeroSection = () => {
    return(
        <section className="relative z-0 h-screen w-full z-0 flex flex-col mb-32">
            <div className="relative z-0 h-auto px-[1.2rem]">
                <div className="w-full absolute inset-0 z-0 h-full">
                   <Video height={320} width={430} src="/backgrounds/videobg.mp4" className="w-full min-h-full object-cover pointer-events-none relative z-0" />
                </div>
                <div className="relative z-10 h-max flex flex-col pt-[9.81rem] gap-[1.5rem]" >
                    <span className="text-[2.63rem] leading-[92%] text-black text-semibold">Making Accounting Easy for Everyone</span>
                    <p className="text-[1.125rem] leading-[92%] text-black">Accountant Ai is powering the next generation of businesses, handling everything from document processing to accounting, and everything is between.</p>
                </div>
                <div className="relative z-10 w-full h-max flex flex-col items-start justify-start mb-10">
                    <div className="w-full h-max flex flex-col pt-[5.875rem] pb-[2rem]">
                    <button className="h-[2.5rem] rounded-full font-semibold bg-[#ffffff]">Start Free Trial</button>
                    <span className="w-full flex items-center justify-center pt-[0.5rem] text-black text-[0.75rem]">Get 10 documents free, then 500 documents for $99.</span>
                    </div>
                    <button className=" h-[2.5rem] bg-[#ffffff] text-black rounded-full w-full" >Watch how Accountant Ai works</button>
                </div>
            </div>
            <div className="h-auto bg-[#33649D] text-[#ffffff] px-[1.2rem] pt-[2.5rem] flex flex-col gap-[2.25rem]">
                <span className="text-[2rem] leading-[92%]">Accountant AI automates invoicing, expense tracking, and reporting. Focus on business growth, not paperwork.</span>
                <span className="text-[22px] leading-[100%] tighter-[-0.6em] mb-5">Gain efficiency, reduce errors, and save hours each week.  </span>
            </div>
        </section>
    )
}

export default HeroSection;