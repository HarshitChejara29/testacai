import { Icons } from "@/utils/icons"

const FourthSection = ( ) => {
    return(
        <section className="w-full h-screen ">
            <div className="flex flex-col px-[1.2rem] pt-[1.375rem] ">
                <span className="text-[1rem]  tracking-[-0.06em]">ACCOUNTANT AI ADVANTAGES</span>
                <span className="text-[1.375rem] tracking-[-0.06em]">ACCOUNTANT AI TITLE</span>
                <p className="pt-[0.375rem]">Accountant AI is the financial automation platform for instant efficiency and future scalability. It streamlines workflows, reduces manual tasks, and ensures accuracy, empowering your finance team to stay ahead of challenges and grow smarter—outpacing competitors without added costs.</p>

                <div className="flex flex-col items-start justify-start gap-[1rem] pt-[1.625rem]">
                        <div className="flex flex-col items-start justify-start">
                            <div className="h-[2.25rem] w-[2.25rem] flex items-center justify-center  border border-white rounded-lg"><Icons.folderSync/></div>
                            <span className="text-[1rem] tracking-[-0.06em] font-medium pt-[0.75rem]">Accelerate innovation</span>
                            <span className="text-[0.875rem] tracking-[-0.06em] pt-[0.25rem]">Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="h-[2.25rem] w-[2.25rem] flex items-center justify-center  border border-white rounded-lg"><Icons.fileInput/></div>
                            <span className="text-[1rem] tracking-[-0.06em] font-medium pt-[0.75rem]">Accelerate innovation</span>
                            <span className="text-[0.875rem] tracking-[-0.06em] pt-[0.25rem]">Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="h-[2.25rem] w-[2.25rem] flex items-center justify-center  border border-white rounded-lg"><Icons.brainCircuit/></div>
                            <span className="text-[1rem] tracking-[-0.06em] font-medium pt-[0.75rem]">Accelerate innovation</span>
                            <span className="text-[0.875rem] tracking-[-0.06em] pt-[0.25rem]">Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="h-[2.25rem] w-[2.25rem] flex items-center justify-center  border border-white rounded-lg"><Icons.chartSpline/></div>
                            <span className="text-[1rem] tracking-[-0.06em] font-medium pt-[0.75rem]">Accelerate innovation</span>
                            <span className="text-[0.875rem] tracking-[-0.06em] pt-[0.25rem]">Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="h-[2.25rem] w-[2.25rem] flex items-center justify-center border border-white  rounded-lg"><Icons.blocks/></div>
                            <span className="text-[1rem] tracking-[-0.06em] font-medium pt-[0.75rem]">Accelerate innovation</span>
                            <span className="text-[0.875rem] tracking-[-0.06em] pt-[0.25rem]">Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                        </div>
                       
                </div>
            </div>
        </section>
    )
}

export default FourthSection