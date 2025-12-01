import React, { useState } from "react";
import { FaDownload, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SkillsExperience.css";

const SkillsExperience = () => {
  const images = [
    `${import.meta.env.BASE_URL}skills1.jpg`,
    `${import.meta.env.BASE_URL}skills2.jpeg`,
    `${import.meta.env.BASE_URL}skills3.jpg`,
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div
      className="skills-container"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}portfolio-bg.png)` }}
    >
      <div className="skills-wrapper">

        {/* LEFT SIDE */}
        <div className="skills-left">
          <h1 className="skills-title">SKILLS & OTHER EXPERIENCE</h1>

          <ul className="skills-description">
            <li><b>Event Volunteer (2025):</b> Master of Ceremony for Forum CONNECT 3 2025, SDWAN Finalization Pleno, and Workshops at PT Telkom Indonesia.</li>
            <li><b>Project (2025):</b> Top 10 Team in Capture The Flag (President University).</li>
            <li><b>Technical Skills:</b> HTML, CSS, PHP, mySQL, Java, JavaScript, Git/GitHub, Python, Flask, RESTful APIs, Linux Servers, Web Security, SQL Injection Prevention, Authentication (OAuth, JWT), Microsoft Word, Microsoft Excel, Microsoft Powerpoint, PivotTable.</li>
            <li><b>Languages:</b>
              <ul>
                <li>Duolingo English Test (DET): Score 105</li>
                <li>Bahasa Indonesia</li>
              </ul>
            </li>
            <li><b>Soft Skills:</b> Problem-solving, analytical thinking, communication, teamwork, time management.</li>
            <li><b>Hard Skills:</b> OOP, Data Structures, Algorithms, System Administration, Secure Coding.</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="skills-slider-box">
          <img src={images[index]} alt="experience" className="skills-image" />

          <div className="skills-buttons">
            <button className="skills-arrow" onClick={prev}>
              <FaArrowLeft size={26} color="#fff" />
            </button>
            <button className="skills-arrow" onClick={next}>
              <FaArrowRight size={26} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;
