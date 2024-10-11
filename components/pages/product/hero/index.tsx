import { Video } from "@/components/globals/videoplayer";
import Image from "next/image";

const Hero = () => {
    return(
        <section className="relative bg-[#d1e4ed] z-0 h-screen w-full z-0 flex flex-col ">
            <div className="relative z-0 h-[65%] px-[1.2rem]">
                <div className="relative z-10 h-max flex flex-col pt-[9.81rem] gap-[1rem]" >
                    <span className="text-[2.63rem] leading-[92%] text-black font-bold">Ready to automate doc processing ?</span>
                    <p className="text-[1.125rem] leading-[100%] text-black max-w-[93%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                    <div className="text-[#000000]">
                        <div className="flex space-x-4">
                            <h1 className="font-bold underline">Feature 1</h1>
                            <h1 className="font-bold underline">Feature 2</h1>
                        </div>
                        <div className="flex space-x-4">
                            <h1 className="font-bold underline">Feature 3</h1>
                            {/* <h1 className="font-bold underline">Feature 2</h1> */}
                        </div>
                    </div>
                </div>
                <div className="relative z-10 w-full h-max flex flex-col items-start justify-start space-y-3 mt-14">
                    <button className="font-bold bg-transparent border border-[0.4px] border-black rounded-full w-full py-2">
                        View Demo
                    </button>
                    <p className="text-xs">Try Accountant Ai free for 10 documents, no credit card required.</p>
                    <button className="font-bold bg-[#FFFFFF] bg-opacity-80 border border-[0.4px] border-black rounded-full w-full py-2">
                        Start Free Trial
                    </button>
                </div>
            </div>
            <div className="relative h-auto pt-[7rem] flex flex-col gap-[2.25rem]">
                {/* Image background */}
                <Image
                    src="/backgrounds/bg_image.png"
                    alt="background"
                    width={100}
                    height={100}
                    className="w-full h-[70%] object-cover"
                />

                {/* Video overlay */}
                <Video
                    height={320}
                    width={430}
                    src="/backgrounds/videobg.mp4"
                    className="absolute w-auto h-[280px] object-cover pointer-events-none z-10 p-6"
                />
            </div>
        </section>
    )
}

export default Hero;