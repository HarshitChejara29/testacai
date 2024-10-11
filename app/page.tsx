import Banners from "@/components/globals/banners";
// import Footer from "@/components/globals/footer";
// import Header from "@/components/globals/header";
import EigthSection from "@/components/pages/home/eigth";
import EleventhSection from "@/components/pages/home/eleventh";
import FifthSection from "@/components/pages/home/fifth";
import FourthSection from "@/components/pages/home/fourth";
import HeroSection from "@/components/pages/home/hero";
import NineSection from "@/components/pages/home/nine";
import SecondSection from "@/components/pages/home/second";
import SeventhSection from "@/components/pages/home/seventh";
import SixthSection from "@/components/pages/home/sixth";
// import TenthSection from "@/components/pages/home/ten";
import ThirdSection from "@/components/pages/home/third";
import TwelthSection from "@/components/pages/home/twelth";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative z-0  font-[family-name:var(--font-geist-sans)]">
    {/* <Header/> */}
    <main className="flex flex-col flex-grow w-full">
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EigthSection/>
      <NineSection/>
      <Banners content={'Streamline your back office tasks.'}/>
      {/* <TenthSection/> */}
      <EleventhSection/>
      <TwelthSection/>
    </main>
    {/* <Footer/> */}
    </div>
  );
}
