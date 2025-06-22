

import { motion } from "framer-motion";
import HeroSection from "../component/HeroSection";
// import AboutSection from "../component/AboutSection";

function LandingPage() {
    return (
        <>
        <motion.div className="w-[1440px] h-[px]">
            <HeroSection />
            {/* <AboutSection/> */}
        </motion.div>
        </>
    );
}

export default LandingPage;