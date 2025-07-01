import { motion } from "framer-motion";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import FooterSection from "../component/FooterSection";
import MyskillSection from "../component/MyskillSection";
import ProjectCard from "../component/ProjectCard";

function LandingPage() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-black">
        <HeroSection />
        <AboutSection />
        <MyskillSection />
        <ProjectCard />
        <FooterSection />
      </div>
    </>
  );
}

export default LandingPage;
