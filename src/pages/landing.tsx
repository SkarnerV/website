import Button from "../components/button";
import Navbar from "../components/navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-cover bg-mainbg h-screen items-center w-full">
      <Navbar />
      <div className=" text-center text-white font-bold text-6xl font-mono mt-36">
        <div>Hello, I'm Shuhang</div>
        <div className="mt-6">Have a seat</div>
      </div>
      <div className="mt-6"></div>
      <Button text={"ABOUT ME"} />
    </div>
  );
};

export default LandingPage;
