import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/utils/icons";
const EigthSection = () => {
    return(
        <section className="w-full pt-[1rem] bg-[#182E49] text-[#ffffff]">
            <div className="flex flex-col items-start justify-start px-[1.2rem]">
                <span className="text-[1rem] tracking-[-0.06em]">SUPPORTED DOCUMENTS</span>
                <span className="text-[1.375rem] tracking-[-0.06em] font-medium">Automate your finances effortlessly, no matter where you operate</span>
                <span>Set up company</span>
                <span>Innovate and launch at lightning speed, on the only platform that&apos;s consistently first-to-market with new capabilities.</span>
                <Link href={'/'} className="text-[#ffffff] underline pt-[2.875rem]" >Start Free Trial</Link>
            </div>
            <div className="w-full pt-[4rem] flex items-center justify-center">
                <Image src={'/illustrations/ui/reminder.png'} height={360} width={395} alt="" className="object-cover rounded-lg" />
            </div>
            <div className="px-[1.2rem] pt-[0.5125rem] mb-2">
                <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center border border-[#ffffff] rounded-lg "><Icons.chevronRight/></div>
            </div>
    </section>
    )
}

export default EigthSection;