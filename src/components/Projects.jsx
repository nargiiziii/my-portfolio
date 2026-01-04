import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Neon Horizon",
    description: "A procedural city generator built with Three.js and WebGL.",
    tech: ["React", "Three.js", "WebGL"],
    color: "#A78BFA"
  },
  {
    title: "Void Walker",
    description: "Interactive audio-visual experience exploring deep space frequencies.",
    tech: ["Next.js", "Web Audio API", "Canvas"],
    color: "#8BEAFF"
  },
  {
    title: "Echo Chamber",
    description: "Decentralized social platform for anonymous philosophical discourse.",
    tech: ["Solidity", "React", "IPFS"],
    color: "#F472B6"
  }
];

const Projects = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, translateY: -5 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '8px',
            backdropFilter: 'blur(5px)',
            cursor: 'pointer',
            transition: 'border-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = project.color}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
        >
          <h3 style={{ margin: '0 0 1rem 0', color: project.color, fontSize: '1.5rem' }}>{project.title}</h3>
          <p style={{ color: '#B0B0B0', lineHeight: '1.5', marginBottom: '1.5rem' }}>{project.description}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{ 
                fontSize: '0.8rem', 
                padding: '0.2rem 0.6rem', 
                background: 'rgba(255, 255, 255, 0.05)', 
                borderRadius: '4px',
                color: '#E0E0E0'
              }}>
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
