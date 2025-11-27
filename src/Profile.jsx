import { useNavigate } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import './Profile.css';

export default function Portfolio() {
    const navigate = useNavigate(); 

  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        {/* Left Section */}
        <div className="left-section">
          <h1 className="portfolio-title">
            FIDELIA <br /> TANNER
          </h1>

          <p className="portfolio-description">
            Computer Science enthusiast with a solid academic background and hands-on project experience. 
            Passionate about learning, problem-solving, and contributing to meaningful tech advancements.
          </p>

          <p className="portfolio-description">
            I’m currently seeking an internship opportunity where I can contribute to software development initiatives,
            while continuing to grow into a well-rounded and technology professional.
          </p>

        <a className="download-btn" href="https://drive.google.com/file/d/1fR4tIOKx1phWsjOq90R_T6uSj--1eD3Z/view?usp=sharing" 
        target="_blank" rel="noopener noreferrer"> <FaDownload /> Download CV</a>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="text-block">
            <p className="portfolio-subtitle">Portfolio</p>

            <h2 className="section-title pink">EDUCATION</h2>
            <p class="university">President University</p>
            <p className="regular-text">
              Information Technology <br /> August 2023 - December 2026 (Expected)
            </p>

            <h2 className="section-title">EXPERIENCE</h2>
            <p class="company-name">Careofyou.id Shop</p>
            <p className="regular-text">
              Online Shop Administrative Assistant <br /> January 2023 - September 2024
            </p>

            <p class="company-name">PT Telekomunikasi Indonesia Tbk</p>
            <p className="regular-text">
              Developer Internship at Enterprise & Business Services Directorate <br /> August 2025 - January 2026
            </p>
          </div>

          {/* Photo + Buttons in one column */}
          <div className="profile-wrapper">
            <img
              src="/person-profile.JPG"
              alt="Person profile"
              className="profile-img"
            />

            <div className="profile-buttons">
              <p className="profile-desc">Click button below to see</p>
              <div className="btn-group">
                <button className="download-btn" onClick={() => navigate('/skillsexperience')}>My Skills</button>
                <button className="download-btn" onClick={() => navigate('/project')}>
                  My Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
