import { Icons } from "@/utils/icons";
import Link from "next/link";
import { Video } from "@/components/globals/videoplayer";

const SeventhSection = () => {
    return(
        <section className="w-full h-screen pt-[14rem]">
            <div className="flex flex-col items-start justify-start px-[1.2rem]">
                <span className="text-[1rem] tracking-[-0.06em]">SUPPORTED DOCUMENTS</span>
                <span className="text-[1.375rem] tracking-[-0.06em] font-medium">Automate your finances effortlessly, no matter where you operate</span>
                <span>Set up company</span>
                <span>Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                <Link href={'/'} className="text-white underline pt-[2.875rem]" >Start Free Trial</Link>
                </div>
                <div className="w-full pt-[2rem] flex items-center justify-center">
                    <Video height={360} width={395} src="/backgrounds/videobg.mp4" className="rounded w-auto h-[360px] object-cover pointer-events-none z-10 px-[1.2rem]"/>
                </div>
                <div className="px-[1.2rem] pt-[0.5125rem]">
                    <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center border border-white rounded-lg "><Icons.chevronRight/></div>
                </div>
        </section>
    )
}

export default SeventhSection;