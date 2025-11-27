import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
      {/* Background Image */}
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src="/portfolio-bg.png" alt="Background" className="bg-img" />
      </motion.div>

      {/* Left & Right Photos */}
      <motion.img
        src="/person-left.png"
        alt="Person Left"
        className="person left"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="/person-right.png"
        alt="Person Right"
        className="person right"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title Section */}
      <motion.div
        className="title"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <span className="script-text">
          Fidelia’s <br /> Portfolio
        </span>

        {/* ENTER BUTTON */}
        <motion.button
          className="enter-button"
          onClick={handleEnter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ENTER HERE
        </motion.button>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skillsexperience" element={<SkillsExperience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<DetailProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
