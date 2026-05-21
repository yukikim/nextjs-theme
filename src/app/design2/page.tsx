import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ".././design2.css";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection pageName="Design 2" />
      <div id="main-content" className="relative py-20 bg-tertiary/0">
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
      </div>
    </main>
  );
}
