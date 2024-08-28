import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Education.scss';
import { urlFor, client } from '../../client';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "educations"]';

    client.fetch(query).then((data) => {
      setEducation(data);
    });
  }, []);

  return (
    <>
      <h2 id="education" className="head-text">
        My <span>Education</span>
      </h2>

      <div className="app__educations">
        {education.map((edu, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__educations-item"
            key={edu.title + index}
          >
            <img src={urlFor(edu.imgUrl).url()} alt={edu.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{edu.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Education;