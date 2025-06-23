

import { motion } from "framer-motion";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";

function LandingPage() {
    return (
        <>
        <div className="w-full h-[px] flex flex-col ">
            <HeroSection />
            <AboutSection/>
        </div>
        </>
    );
}

export default LandingPage;