import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Three.js / WebGL", level: 70 },
  { name: "UI/UX Design", level: 75 },
  { name: "GraphQL", level: 65 },
];

const Skills = () => {
  return (
    <div className="skills-section">
      {skills.map((skill, index) => (
        <div key={index} className="skill-row">
          <div className="skill-labels">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </div>
          <div className="skill-track">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              className="skill-fill"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
