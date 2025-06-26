import { motion } from "framer-motion";
import projectList from "../../data/projects.json"; // adjust path if needed

export default function ProjectCard({ projects }) {
  const safeProjects = (projects || projectList)?.projects || [];

  if (!Array.isArray(safeProjects)) {
    return <div>Error: projects data is not an array.</div>;
  }

  return (
    <div className="grid md:grid-cols-4 gap-5 md:w-[1250px] md:h-[450.31px] rounded-[8px]">
      {safeProjects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-g border-2 border-green-800 rounded-[12px] overflow-hidden"
        //   whileHover={{ scale: 1.05 }}
        >
          <div className="backdrop-opacity-50">
            <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-white">
            <p className="font-bold text-lg">{project.title}</p>
            <p className="text-sm text-gray-300">{project.sub}</p>
            <p className="mt-2 font-mediums text-[14px]">{project.description}</p>
          </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

{/* <h1 className='absolute top-886 left-1/2 transform -ml-36 -translate-x-1/ -translate-y-1/2 text-[6vw] leading-[120px] font-extrabold text-white opacity-7 z-0 pointer-events-non select-n'>beloveth </h1>
                <h1 className='absolute top-910 left-96 transform text-center ml-40 -translate-x-1/ -translate-y-1/2 text-[21vw] leading-[120px] font-extrabold text-white opacity-7 z-0 pointer-events-none select-none'> <span className=''>dev</span></h1> */}