import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./Profile";
import Project from "./Project";
import DetailProject from "./DetailProject";
import SkillsExperience from "./SkillsExperience";

function Home() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/profile");
  };

  return (
    <div className="homepage">
      <motion.div className="background">
        <img
          src={`${import.meta.env.BASE_URL}portfolio-bg.png`}
          alt="Background"
          className="bg-img"
        />
      </motion.div>

      <motion.img
        src={`${import.meta.env.BASE_URL}person-left.png`}
        className="person left"
      />

      <motion.img
        src={`${import.meta.env.BASE_URL}person-right.png`}
        className="person right"
      />

      <div className="title">
        <span className="script-text">
          Fidelia’s <br /> Portfolio
        </span>
        <button className="enter-button" onClick={handleEnter}>
          ENTER HERE
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skillsexperience" element={<SkillsExperience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<DetailProject />} />
      </Routes>
    </HashRouter>
  );
}

