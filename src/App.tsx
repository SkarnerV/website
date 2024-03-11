import { useState } from "react";
import LandingPage from "./pages/landing";
import Navbar from "./components/navbar";
import AboutPage from "./pages/about";
import Profile from "./components/profile";
import ExperiencePage from "./pages/experience";
import ProjectPage from "./pages/project";
export const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="w-full bg-gray-700">
      {showProfile ? <Profile onClose={() => setShowProfile(false)} /> : <></>}
      <Navbar openProfile={() => setShowProfile(!showProfile)} />
      <LandingPage />
      <div id="About" className="mb-16"></div>
      <AboutPage />
      <div id="Experience" className="mb-16"></div>
      <ExperiencePage />
      <div id="Projects" className="mb-16"></div>
      <ProjectPage />
    </div>
  );
};
