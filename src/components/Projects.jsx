import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Neon Horizon",
    description: "A procedural city generator built with Three.js and WebGL.",
    tech: ["React", "Three.js", "WebGL"],
    color: "#A78BFA",
  },
  {
    title: "Void Walker",
    description:
      "Interactive audio-visual experience exploring deep space frequencies.",
    tech: ["Next.js", "Web Audio API", "Canvas"],
    color: "#8BEAFF",
  },
  {
    title: "Echo Chamber",
    description:
      "Decentralized social platform for anonymous philosophical discourse.",
    tech: ["Solidity", "React", "IPFS"],
    color: "#F472B6",
  },
];

const Projects = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, translateY: -5 }}
          className="project-card"
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = project.color)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)")
          }
        >
          <h3 style={{ margin: "0 0 1rem 0", color: project.color }}>
            {project.title}
          </h3>
          <p
            style={{
              color: "#B0B0B0",
              lineHeight: "1.5",
              marginBottom: "1.5rem",
            }}
          >
            {project.description}
          </p>
          <div className="tech-list">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
