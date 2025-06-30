import { motion } from "framer-motion";
import projectList from "../../data/projects.json"; // adjust path if needed

export default function ProjectCard({ projects }) {
  const safeProjects = (projects || projectList)?.projects || [];

  if (!Array.isArray(safeProjects)) {
    return <div>Error: projects data is not an array.</div>;
  }

  return (
    <>
    <div className='py-10 md:px-78'>
            <h2 className='text-[#009D66] md:w-[] w-[400px] text-[32px] md:text-5xl font-bold mb-1 md:mb-3'>Selected Projects</h2>
            <p className='text-white text-[16px] md:text-2xl mb-5 md:mb-10 -ml-[1px]'>Some things I’ve worked on so far</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between gap-5 w-full">
      {safeProjects.map((project) => (
        <motion.div
          key={project.id}
          className="border border-[#009D66] bg-[#0a0a0a] rounded overflow-hidden flex flex-col "
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
    </div>
        </div>
    
    </>
  );
}
