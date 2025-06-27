import { motion } from "framer-motion";
import projectList from "../../data/projects.json"; // adjust path if needed

export default function ProjectCard({ projects }) {
  const safeProjects = (projects || projectList)?.projects || [];

  if (!Array.isArray(safeProjects)) {
    return <div>Error: projects data is not an array.</div>;
  }

  return (
    <div className="grid md:grid-cols-4 gap-5 md:w-[1250px] w-[356px h-[506.31px]] md:h-[450.31px]">
      {safeProjects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-g border-1 border-[#009D66] rounded-[px] overflow-hidden"
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