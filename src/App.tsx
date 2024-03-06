import React from "react";
import LandingPage from "./pages/landing";
import Navbar from "./components/navbar";
import ExperiencePage from "./pages/experience";
export const App = () => {
  return (
    <div className="bg-gray-700">
      <Navbar />
      <LandingPage />
      <ExperiencePage />
    </div>
  );
};
