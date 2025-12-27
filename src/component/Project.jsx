import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent my-20 text-center text-4xl font-bold"
      >
        Project
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center group"
            style={{ perspective: 1000 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              whileHover={{ rotateY: 15 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded shadow-2xl group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer"><h3 className="mb-2 font-semibold text-2xl group-hover:text-blue-400 transition-colors">{project.title}</h3></a>  
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 group-hover:bg-stone-800 transition-colors"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
