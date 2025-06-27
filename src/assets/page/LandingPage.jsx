import { motion } from "framer-motion";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
// import FooterSection from "../component/FooterSection";

function LandingPage() {
  return (
    <>
      <div className="-[px] min-h-screen w-100% flex flex-col overflow-x-hidden bg-">
        <HeroSection />
        <AboutSection />
        {/* <FooterSection /> */}
      </div>
    </>
  );
}

export default LandingPage;
