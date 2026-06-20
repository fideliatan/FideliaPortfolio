import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SkillsExperience.css";

const skillGroups = [
  {
    title: "Programming Languages",
    tags: ["Java", "Python", "JavaScript", "PHP", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks",
    tags: ["Flask", "RESTful API"],
  },
  {
    title: "Software / Applications",
    tags: [
      "Microsoft SQL Server Management Studio (MSSMS)",
      "PostgreSQL",
      "GitLab",
      "Git/GitHub",
      "Citrix Workspace",
      "Google Workspace",
      "iDempiere",
      "Microsoft Excel (PivotTable)",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Linux",
    ],
  },
  {
    title: "Soft Skills",
    tags: ["Problem-solving", "Analytical thinking", "Communication", "Teamwork", "Time management"],
  },
  {
    title: "Hard Skills",
    tags: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "System Administration",
      "Secure Coding",
      "Web Security",
      "SQL Injection Prevention",
      "Authentication (OAuth, JWT)",
    ],
  },
];

const SkillsExperience = () => {
  const navigate = useNavigate();

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
      <button className="back-btn" onClick={() => navigate('/profile')}>
        <FaArrowLeft /> Back
      </button>

      <div className="skills-wrapper">

        {/* LEFT SIDE */}
        <div className="skills-left">
          <h1 className="skills-title">SKILLS & OTHER EXPERIENCE</h1>

          <ul className="skills-description">
            <li><b>Event Volunteer (2025):</b> Master of Ceremony for Forum CONNECT 3 2025, SDWAN Finalization Pleno, and Workshops at PT Telkom Indonesia.</li>
            <li><b>Project (2025):</b> Top 10 Team in Capture The Flag (President University).</li>
            <li><b>Languages:</b> Bahasa Indonesia – Native Proficiency | English – Professional Working Proficiency (Duolingo English Test Score: 105).</li>
          </ul>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3 className="skill-group-title">{group.title}</h3>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
