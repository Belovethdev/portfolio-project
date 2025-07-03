import { motion } from "framer-motion";
import projectList from "../../data/projects.json";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between each child's animation start
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectCard({ projects }) {
  const safeProjects = (projects || projectList)?.projects || [];

  if (!Array.isArray(safeProjects)) {
    return <div>Error: projects data is not an array.</div>;
  }

  return (
    <div className="py-10 md:px-46 px-12 bg-black">
      <h2 className="text-[#38EDCA] md:w-[]  w-[400px] text-[32px] md:text-[32px] font-bold mb-1 md:mb-3">
        Selected Projects
      </h2>
      <p className="text-white text-[16px] md:text-[20px] mb-5 md:mb-10 -ml-[1px]">
        Some things I’ve worked on so far
      </p>

      {/* Container with scroll-triggered stagger animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between gap-5 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {safeProjects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-[#38EDCA] bg-[#0a0a0a] rounded overflow-hidden flex flex-col"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-1/2 object-cover"
            />
            <div className="flex-1 p-4 text-white flex flex-col">
              <p className="font-bold text-lg mb-1">{project.title}</p>
              <p className="text-sm text-gray-300 mb-2">{project.sub}</p>
              <p className="text-[14px] flex-1">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
