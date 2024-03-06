import React from "react";
import Icon from "./icon";

const Profile = (props: { onClose: () => void }) => {
  return (
    <div className="px-5 h-screen fixed top-0 z-20 bg-gray-700 flex flex-col justify-between items-center pt-7 transition duration-300 ease-in-ou">
      <div className="flex flex-col items-center">
        <div className="bg-avatar bg-cover w-20 h-20  border-gray-400 border-2 rounded-full" />
        <div className="mb-6"></div>
        <Icon path="https://github.com/SkarnerV/" iconName="github" />
        <div className="mb-2"></div>
        <Icon
          path="https://www.linkedin.com/in/shuhang-h-581b141b5/"
          iconName="linkedin"
        />
        <div className="mb-2"></div>
        <Icon path="mailto:skarner.han@gmail.com" iconName="email" />
      </div>
      <div className="mb-6" onClick={props.onClose}>
        <Icon iconName="cross" />
      </div>
    </div>
  );
};

export default Profile;
