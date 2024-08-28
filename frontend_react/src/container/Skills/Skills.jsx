import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Skills.scss';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 id="skills" className="head-text">
        Technical <span>Skills</span>
      </h2>

      <div className="app__skills-text">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile"
            key={skill.name + index}
          >
            <div className="app__skills-picture" style={{ backgroundColor: skill.bgColor }}>
              <img src={urlFor(skill.icon).url()} alt={skill.name} />
            </div>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{skill.name}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{skill.level}</p> {/* Assuming you have a 'level' field */}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Skills;