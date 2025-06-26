import { motion } from "framer-motion";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
// import FooterSection from "../component/FooterSection";

function LandingPage() {
  return (
    <>
      <div className="min-w-[1920px] min-h-screen flex flex-col overflow-x-hidden bg-b">
        <HeroSection />
        <AboutSection />
        {/* <FooterSection /> */}
      </div>
    </>
  );
}

export default LandingPage;
