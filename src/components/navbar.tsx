import React from "react";
import Button from "./button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-6 ">
      <div>
        <Button text={"About"} />
        <Button text={"Experience"} />
        <Button text={"Project"} />
        <Button text={"Contact"} />
      </div>
      <div>
        <button className="bg-avatar bg-cover w-16 h-16 hover:border-white border-gray-400 border-2 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
