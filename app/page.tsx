import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/home/About";
import VideoIntro from "@/components/home/VideoIntro";
import Hero from "@/components/hero/Hero";
import CategoryIcons from "@/components/home/CategoryIcons";
import MidBanner from "@/components/home/MidBanner";
import FlashSale from "@/components/services/FlashSale";
import NamGrid from "@/components/services/NamGrid";
import TechStrip from "@/components/technology/TechStrip";
import BlogSection from "@/components/blog/BlogSection";
import ZaloFloatButton from "@/components/common/ZaloFloatButton";
import AIChat from "@/components/ai/AIChat";
export default function Home() {
  return (
    <div className="bg-[#F5F9FF] text-[#1C2733] font-sans">
      <Header />

      <main>
        <Hero />
        <About />
        <VideoIntro />
        <CategoryIcons />
        <FlashSale />
        <MidBanner />
        <NamGrid />
        <TechStrip />
        <BlogSection />
      </main>

      <Footer />
      <ZaloFloatButton />
      <AIChat />
    </div>
  );
}
