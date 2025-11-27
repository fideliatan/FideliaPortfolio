import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { projectData } from "./projectData";
import "./DetailProject.css";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return <h2>Project Not Found</h2>;

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="detail-container"
      style={{ backgroundImage: `url(/portfolio-bg.png)` }}
    >
      
    <div className="detail-wrapper">
      <div className="detail-content">
        {/* LEFT SIDE */}
        <div className="detail-left">
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-description">{project.description}</p>
        </div>

        {/* RIGHT SIDE – IMAGE SLIDER */}
        <div className="detail-slider-box">
          <img
            src={project.images[currentIndex]}
            alt="project"
            className="detail-image"
          />

          <div className="slider-buttons">
            <button onClick={prevImage} className="slider-arrow">
                <FaArrowLeft size={26} color="#fff"/>
            </button>
            <button onClick={nextImage} className="slider-arrow">
                <FaArrowRight size={26} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Buttons */}
      <div className="detail-buttons">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <FaGithub /> Github
        </a>

        <a
          href={project.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-btn"
        >
          Report PDF
        </a>
      </div>
    </div>
  );
};

export default DetailProject;
