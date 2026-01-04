import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Three.js / WebGL", level: 70 },
  { name: "UI/UX Design", level: 75 },
  { name: "GraphQL", level: 65 }
];

const Skills = () => {
  return (
    <div style={{ width: '100%', maxWidth: '800px', marginTop: '2rem' }}>
      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#E0E0E0' }}>
            <span>{skill.name}</span>
            <span style={{ color: '#A78BFA' }}>{skill.level}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #A78BFA, #8BEAFF)', borderRadius: '3px' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
