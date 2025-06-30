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
<div className="mt-"><AboutSection /></div>
<div className="mt-"><MyskillSection /></div>
<div><ProjectCard /></div>
<div className="mt-"><FooterSection /></div>
      </div>
    </>
  );
}

export default LandingPage;
