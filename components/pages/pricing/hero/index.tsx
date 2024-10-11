import { Video } from "@/components/globals/videoplayer";


const Hero = () => {
    return (
        <>
        <section className="relative z-0 w-full z-0 flex flex-col ">
            <div className="relative z-0 h-full px-[1.2rem]">
                <div className="w-full absolute inset-0 z-0 h-full">
                   <Video height={320} width={430} src="/backgrounds/videobg.mp4" className="w-full min-h-full object-cover pointer-events-none relative z-0" />
                </div>
                <div className="relative z-10 h-max flex flex-col pt-[9.81rem] gap-[0.2rem] mb-28" >
                    <p className="text-sm font-bold text-center">PLANS & PRICING</p>
                    <h2 className="text-3xl font-semibold title-font text-center mb-2">Start for free, then enjoy 500 documents at $99</h2>
                    <p className="text-lg leading-[100%] max-w-[90%] mx-auto text-center">Choose the best plan for your business. Change plans as you grow.</p>
                </div>
                <div className="relative z-10 w-full h-max flex flex-col items-start justify-start mb-16">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="bg-[#ffffff] rounded-full border border-black focus:border-black w-full px-5 py-2 placeholder-black" 
                    />
                    <a href="#" className="mt-3 inline-flex items-center w-full">
                        <button className="font-bold bg-[#FFFFFF] bg-opacity-80 border border-[0.4px] border-black rounded-full w-full py-2">
                            Start Free Trial
                        </button>
                    </a>
                    <p className="text-xs leading-[100%] mt-2 max-w-[90%] mx-auto text-center">
                        Try Accountant Ai free, no credit card required. By entering your email, you agree to receive marketing emails from Accountant Ai.
                    </p>
                </div>
            </div>
        </section>
        </>
    );
};
export default Hero;