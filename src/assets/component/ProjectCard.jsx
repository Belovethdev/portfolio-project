import { motion } from "framer-motion";
import projectList from "../../data/projects.json"; // adjust path if needed

export default function ProjectCard({ projects }) {
  const safeProjects = (projects || projectList)?.projects || [];

  if (!Array.isArray(safeProjects)) {
    return <div>Error: projects data is not an array.</div>;
  }

  return (
    <div className="grid md:grid-cols-4 md:gap-10">
      {safeProjects.map((project) => (
        <motion.div
          key={project.id}
          className="bg-green-950 shadow-black rounded overflow-hidden"
        //   whileHover={{ scale: 1.05 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-white">
            <p className="font-bold text-lg">{project.title}</p>
            <p className="text-sm text-gray-300">{project.sub}</p>
            <p className="mt-2 text-sm">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
