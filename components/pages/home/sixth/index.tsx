import Image from "next/image"

const SixthSection = () => {
    return(
        <section className="w-full h-screen">
            <div className="flex flex-col items-start justify-start pt-[18rem] px-[1.2rem]">
                <span className="text-[1rem] tracking-[-0.06em]">SUPPORTED DOCUMENTS</span>
                <span className="text-[1.375rem] tracking-[-0.06em] font-medium">Automate your finances effortlessly, no matter where you operate</span>
                <p className="text-[1rem] tracking-[-0.06em] pt-[3.625rem] pb-[2.25rem]">With Accountant AI, streamline invoicing, reporting, and expense tracking across multiple systems. Integrate with your favorite tools, automate document workflows, and manage finances globally with precision and ease.</p>
                <button className="text-[1rem] tracking-[-0.06em] py-1 border-b border-white">START IMPORT</button>
            </div>

            <div className="flex items-start justify-start gap-2 overflow-x-auto no-scrollbar pt-[2.625rem] px-[1.2rem]">

                <div className="min-w-[15rem] h-[22.5rem] rounded-lg" >
                    <Image src={'/docs/invoice.png'} alt="" height={360} width={240} className="object-cover"/>
                </div>
                <div className="min-w-[15rem] h-[22.5rem] rounded-lg" >
                    <Image src={'/docs/bill.png'} alt="" height={360} width={240} className="object-cover"/>
                </div>
                <div className="min-w-[15rem] h-[22.5rem] rounded-lg" >
                    <Image src={'/docs/invoice.png'} alt="" height={360} width={240} className="object-cover"/>
                </div>
                <div className="min-w-[15rem] h-[22.5rem] rounded-lg" >
                    <Image src={'/docs/invoice.png'} alt="" height={360} width={240} className="object-cover"/>
                </div>

            </div>
        </section>
    )
}

export default SixthSection