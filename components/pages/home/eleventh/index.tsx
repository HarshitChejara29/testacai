import { Icons } from "@/utils/icons";

const EleventhSection = () => {
    return(
        <section className="h-[60vh] pt-[3.75rem] bg-[#33649D] text-[#ffffff]">
            <div className="flex flex-col items-center justify-center text-center gap-[0.175rem] pb-[5.5625rem]">
                <span className="text-[1rem] leading-none tracking-[-0.06em]">ACCOUNTANT AI SUPPORT</span>
                <span className="text-center text-[1.375rem] max-w-[60%] leading-none font-semibold">The help you need, when you need it</span>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-4 px-[1.2rem]">
                <div className="flex flex-col  min-w-[80%]">
                    <div className="h-[4.9375rem] w-[4.75rem]  "><Icons.bookType size={64}/></div>
                    <span className="pt-[1.2rem] text-[1.25rem]">Blogs</span>
                    <span className="pt-[0.375rem] pb-[0.875rem] text-[1.125rem]">Get all the automation and finance strategy tips you need to help you run a business powered by Accountant Ai.</span>
                    <button className=" h-[2.5rem] bg-[#ffffff] text-[#000000] rounded-full border border-[0.4px] border-black w-max px-4" >Read Blog</button>
                </div>
                <div className="flex flex-col  min-w-[80%]">
                <div className="h-[4.9375rem] w-[4.75rem]  "><Icons.users size={64}/></div>
                <span className="pt-[1.2rem] text-[1.25rem]">Community</span>
                    <span className="pt-[0.375rem] pb-[0.875rem] text-[1.125rem]">Get all the automation and finance strategy tips you need to help you run a business powered by Accountant Ai.</span>
                    <button className=" h-[2.5rem] bg-[#ffffff] text-[#000000] rounded-full border border-[0.4px] border-black w-max px-4" >View Community</button>
                </div>
                <div className="flex flex-col  min-w-[80%]">
                <div className="h-[4.9375rem] w-[4.75rem]  "><Icons.circleHelp size={64}/></div>
                <span className="pt-[1.2rem] text-[1.25rem]">Help Center</span>
                    <span className="pt-[0.375rem] pb-[0.875rem] text-[1.125rem]">Get all the automation and finance strategy tips you need to help you run a business powered by Accountant Ai.</span>
                    <button className=" h-[2.5rem] bg-[#ffffff] text-[#000000] rounded-full border border-[0.4px] border-black w-max px-4" >Go to Help Center</button>
                </div>
            </div>
        </section>
    )
}
export default EleventhSection;