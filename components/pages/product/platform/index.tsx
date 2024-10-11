import { Video } from "@/components/globals/videoplayer";
import Image from "next/image";

const Platform = () => {
    return (
        <section className="relative py-16 w-full">
            {/* Full background image */}
            <Image
                src="/backgrounds/bg_image.png"
                alt="background"
                layout="fill" // Use layout="fill" for full-screen background image
                objectFit="cover" // Ensure the image covers the entire background
                className="z-0"
            />

            {/* Content overlay (Text and Video) */}
            <div className="relative z-10 flex flex-col justify-center h-full px-5">
                <h1 className="text-3xl font-semibold text-white mb-6">
                    The only complete AI-first accounting automation platform
                </h1>
                <h2 className="text-sm font-semibold text-white">
                    Accountant AI Accountant
                </h2>
                <p className="text-sm text-white">
                    Innovate and launch at lightning speed, on the only platform that is consistently first-to-market with new capabilities.
                </p>

                {/* Video overlay */}
                <Video
                    height={320}
                    width={430}
                    src="/backgrounds/videobg.mp4"
                    className="mt-2 w-[395px] h-[410px] object-cover pointer-events-none"
                />
            </div>
        </section>
    );
};

export default Platform;
