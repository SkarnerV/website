import React, { useState } from "react";
import LandingPage from "./pages/landing";
import Navbar from "./components/navbar";
import ExperiencePage from "./pages/experience";
import Profile from "./components/profile";
export const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="w-full bg-gray-700">
      {showProfile ? <Profile onClose={() => setShowProfile(false)} /> : <></>}
      <Navbar openProfile={() => setShowProfile(!showProfile)} />
      <LandingPage />
      <ExperiencePage />
    </div>
  );
};
