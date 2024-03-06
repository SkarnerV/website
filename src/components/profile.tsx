import React from "react";
import Avatar from "./avatar";
import Button from "./button";

const Profile = (props: { onClose: () => void }) => {
  return (
    <div className="px-5 h-screen fixed top-0 z-20 bg-gray-700 flex flex-col justify-between items-center pt-7 transition duration-300 ease-in-ou">
      <div className="flex flex-col items-center">
        <div className="bg-avatar bg-cover w-20 h-20  border-gray-400 border-2 rounded-full" />
        <div className="mb-6"></div>
        <a
          href="https://github.com/SkarnerV"
          className="bg-cover bg-github w-6 h-6"
        ></a>
        <div className="mb-6"></div>
        <a
          href="https://www.linkedin.com/in/shuhang-h-581b141b5/"
          className="bg-cover bg-linkedin w-6 h-6"
        ></a>
        <div className="mb-6"></div>
        <a
          href="mailto:skarner.han@gmail.com"
          className="bg-cover bg-email w-6 h-6"
        ></a>
      </div>
      <div className="mb-6" onClick={props.onClose}>
        <button className="bg-cover bg-cross w-6 h-6 "></button>
      </div>
    </div>
  );
};

export default Profile;
