import { Video } from "@/components/globals/videoplayer";
import Image from "next/image";

const Reason = () => {
    return (
        <>
        <section className="bg-[#94b8c8] px-[1.2rem] py-16">
            <h1 className="mb-8">1<span className="underline ml-2 text-xl">REASON 1</span></h1>
            <div className="space-y-2 mb-12">
            <p>Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span></p>
            <p>Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span></p>
            <p>Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span></p>
            <p>Import your documents from wherever they are, whenever they are created.</p>
            </div>
        </section>

        <section className="px-[1.2rem] bg-[#d1e4ed] py-16">
            <h2 className="font-semibold">2</h2>
            <h1 className="font-bold text-2xl mb-3">REASON 2</h1>
            <div className="space-y-2 mb-5">
                <p>With Accountant AI, streamline invoicing, reporting, and expense tracking across multiple systems. Integrate with your favorite tools, automate document workflows, and manage finances globally with precision and ease.</p>
            </div>
            <div className="w-full max-w-screen overflow-x-auto no-scrollbar flex gap-4 pt-[2rem]">
                <Video
                    height={800}
                    width={300}
                    src="/backgrounds/videobg.mp4"
                    className="w-[240px] h-[360px] object-cover pointer-events-none z-10"
                />
                <Video
                    height={800}
                    width={300}
                    src="/backgrounds/videobg.mp4"
                    className="w-[240px] h-[360px] object-cover pointer-events-none z-10"
                />
                <Video
                    height={800}
                    width={300}
                    src="/backgrounds/videobg.mp4"
                    className="w-[240px] h-[360px] object-cover pointer-events-none z-10"
                />
                <Video
                    height={800}
                    width={300}
                    src="/backgrounds/videobg.mp4"
                    className="w-[240px] h-[360px] object-cover pointer-events-none z-10"
                />
            </div>
        </section>

        <section className="px-[1.2rem] mt-24">
            <h2 className="font-semibold">3</h2>
            <h1 className="font-bold text-2xl mb-3">REASON 3</h1>
            <div className="space-y-2 mb-12">
            <p className="mb-16">With Accountant AI, streamline invoicing, reporting, and expense tracking across multiple systems. Integrate with your favorite tools, automate document workflows, and manage finances globally with precision and ease.</p>
            <Image src="/backgrounds/bg_image.png" alt="integration" width={100} height={100} className="w-full h-full rounded"/>
            </div>
        </section>

        <section className="px-[1.2rem] bg-[#d1e4ed] py-14">
            <h2 className="font-semibold">4</h2>
            <h1 className="font-bold text-2xl mb-3">REASON 4</h1>
            <div className="space-y-2">
            <p className="mb-2">Accountant AI is the financial automation platform for instant efficiency and future scalability. It streamlines workflows, reduces manual tasks, and ensures accuracy, empowering your finance team to stay ahead of challenges and grow smarter—outpacing competitors without added costs.</p>
            <h1 className="font-bold py-1 text-lg">We ship the features</h1>
            <p className="underline">2024 Q4</p>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
            <li>Feature 6</li>
            <li>View more..</li>
            </div>
        </section>

        <section className="px-[1.2rem] mt-24">
            <h2 className="font-semibold">5</h2>
            <h1 className="font-bold text-2xl mb-3">REASON 5</h1>
            <div className="space-y-2 mb-12">
            <p className="mb-16">With Accountant AI, streamline invoicing, reporting, and expense tracking across multiple systems. Integrate with your favorite tools, automate document workflows, and manage finances globally with precision and ease.</p>
            <Image src="/backgrounds/bg_image.png" alt="integration" width={100} height={100} className="w-full h-full rounded"/>
            </div>
        </section>

        <section className="bg-[#94b8c8] px-[1.2rem] py-16">
            <h1 className="mb-8">6<span className="underline ml-2 text-xl">REASON 6</span></h1>
            <div className="space-y-2 mb-12">
                <div>
                    <h1 className="font-bold">Sub reason A</h1>
                    <p>Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span></p>
                </div>
                <div>
                    <h1 className="font-bold">Sub reason A</h1>
                    <p>Import your documents from wherever they are, whenever they are created, with omnichannel and a fully integrated data sync. Plus forget everything you knew about Ai Accounting - meet <span className="font-bold">Accountant Ai</span></p>
                </div>
            </div>
        </section>
        </>
    );
};
export default Reason;