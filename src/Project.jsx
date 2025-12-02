import React, { useState } from "react";
import "./Project.css";
import { FaDownload, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const titleToId = {
  "Pizza Management System Application": "pizza",
  "CashE Risk Assessment": "cashe",
  "SerenAI Mental Health Chatbot": "serenai",
  "Smart Number Categorization": "smartnumber",
  "Glamorous Web Salon Manager": "glamorous",
  "MISP & Octave Allegro Risk Management System": "misp"
  // tambahkan mapping lain di sini
};

const Projects = () => {
  const navigate = useNavigate();

  const projectPages = [
    [
      { title: "Smart Number Categorization", image: "smartnumber.png" },
      { title: "CashE Risk Assessment", image: "cashe.png" },
      { title: "MISP & Octave Allegro Risk Management System", image: "misp1.png" }
    ],
    [
      { title: "Glamorous Web Salon Manager", image: "glamorous.png" },
      { title: "SerenAI Mental Health Chatbot", image: "serenai.png" },
      { title: "Pizza Management System Application", image: "pizza.png" }
    ],
  ];

  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < projectPages.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleProjectClick = (title) => {
    const id = titleToId[title];
    if (!id) return console.warn("Missing id mapping:", title);
    navigate(`/project/${id}`);
  };

  return (
    <div className="projects-container">
      <div className="projects-overlay">
        <h1 className="projects-title">
          <span className="my">MY</span> PROJECTS
        </h1>

        <div className="projects-grid">
          {projectPages[page].map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(project.title)}
            >
              <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="project-image" />
              <p className="project-title">{project.title}</p>
            </div>
          ))}
        </div>

        <div className="projects-actions">
          <a
            className="download-btn"
            href="https://drive.google.com/file/d/1yUPX08TA7ae9NWHXx2wUepg9zMups945/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download CV
          </a>

          <a
            className="download-btn"
            href="https://github.com/fideliatan/FideliaPortfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check this page code!
          </a>

          <div className="arrow-buttons">

            <button
              className="arrow-btn"
              onClick={prevPage}
              disabled={page === 0}
            >
              <FaArrowLeft />
            </button>

            <button
              className="arrow-btn"
              onClick={nextPage}
              disabled={page === projectPages.length - 1}
            >
              <FaArrowRight />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
