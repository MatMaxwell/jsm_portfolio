import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__social">
        <div>
          <a href="https://x.com/matthewCmaxwell" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div> 
        <div>
          <a href="https://www.linkedin.com/in/matthew-maxwell-0277081b6/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin />
          </a>
        </div> 
        <div>
          <a href="https://github.com/MatMaxwell" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>       
      </div>
    </div>
  );
}

export default Footer;