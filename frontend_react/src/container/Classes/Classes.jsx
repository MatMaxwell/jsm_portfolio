import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Classes.scss';
import { urlFor, client } from '../../client';

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const query = '*[_type == "classes"]';

    client.fetch(query).then((data) => {
      setClasses(data);
    });
  }, []);

  return (
    <>
      <div className="app__classes-text">
        {classes.map((classes, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__class"
            key={classes.name + index}
          >
            <div className="app__classes-picture" style={{ backgroundColor: classes.bgColor }}>
              <img src={urlFor(classes.icon).url()} alt={classes.name} />
            </div>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{classes.name}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{classes.level}</p> {/* Assuming you have a 'level' field */}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Classes;