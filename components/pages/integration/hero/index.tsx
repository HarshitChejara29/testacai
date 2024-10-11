import Image from "next/image";

const Hero = () => {
    return (
        <>
        <section className="relative bg-[#d1e4ed] z-0 w-full z-0 flex flex-col ">
            <div className="relative z-0 h-full px-[1.2rem]">
                <div className="relative z-10 h-max flex flex-col pt-[9.81rem] gap-[0.2rem] mb-16" >
                    <p className="text-sm font-bold text-center">DATE OF PUBLISH</p>
                    <h2 className="text-3xl font-semibold title-font text-center mb-5">INTEGRATION</h2>
                    <div className="space-y-3">
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created.</p>
                    </div>

                    <div className="py-10">
                        <Image src="/backgrounds/bg_image.png" alt="integration" width={100} height={100} className="w-full h-full rounded"/>
                        <h1 className="text-lg mt-2">IMAGE TEXT</h1>
                    </div>


                    <div className="space-y-3">
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                    </div>

                    <div className="py-16">
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                    </div>

                    <div className="space-y-3">
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span> </p>
                        <p className="text-lg leading-[100%]">Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated</p>
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};
export default Hero;