import { motion } from "framer-motion";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
// import FooterSection from "../component/FooterSection";

function LandingPage() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        {/* <FooterSection /> */}
      </div>
    </>
  );
}

export default LandingPage;
