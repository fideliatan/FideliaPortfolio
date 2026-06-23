import { useNavigate } from 'react-router-dom';
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import './Profile.css';

export default function Portfolio() {
    const navigate = useNavigate();

  return (
    <div
      className="portfolio-container"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}portfolio-bg.png)` }}
    >
      <button className="back-btn" onClick={() => navigate('/')}>
        <FaArrowLeft /> Back
      </button>

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
            I’m currently seeking full-time opportunities in the IT field where I can apply my skills and
            continue contributing to meaningful software development initiatives, while growing into a
            well-rounded technology professional.
          </p>

        <a className="download-btn" href={`${import.meta.env.BASE_URL}CV_FideliaBelleTanner.pdf`}
        download="CV_FideliaBelleTanner.pdf"> <FaDownload /> Download CV</a>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="text-block">
            <p className="portfolio-subtitle">Portfolio</p>

            <h2 className="section-title pink">EDUCATION</h2>
            <p className="university">President University</p>
            <p className="regular-text">
              Information Technology <br /> August 2023 - December 2026 (Expected) <br /> GPA: 3.92/4.00
            </p>

            <h2 className="section-title purple">EXPERIENCE</h2>
            <p className="company-name">PT Panin Dai-ichi Life</p>
            <p className="regular-text">
              <b>IT Application Support</b> <br /> Information Technology Department <br /> May 2026 - Present
            </p>
            <p className="regular-text">
              <b>IT Service Desk Internship</b> <br /> Information Technology Department <br /> February - May 2026
            </p>

            <p className="company-name">PT Telekomunikasi Indonesia Tbk</p>
            <p className="regular-text">
              <b>Developer Internship</b> <br /> Enterprise & Business Services Directorate <br /> August 2025 - January 2026
            </p>
          </div>

          {/* Photo + Buttons in one column */}
          <div className="profile-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}person-profile.JPG`}
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
