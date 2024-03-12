import { useState, useEffect } from "react";
import Button from "./button";
import Avatar from "./avatar";

const Navbar = (props: { openProfile: () => void }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarColor);
      return () => {
        window.removeEventListener("scroll", changeNavbarColor);
      };
    }
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-10 px-8 py-2 transition-colors duration-300 ease-in-out bg-gray-700 ${
        colorChange ? "bg-gray-700" : "md:bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <div onClick={props.openProfile}>
          <Avatar />
        </div>
        <div></div>
        <div className="hidden md:block">
          <Button text={"About"} />
          <Button text={"Experience"} />
          <Button text={"Projects"} />
          <Button text={"Contact"} />
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden flex items-center text-white hover:border-white border-transparent border-2 p-2"
        >
          <div className="w-4 h-4 bg-hamburger bg-cover "></div>
          <div className="pl-2">Menu</div>
        </button>
      </div>
      {openMenu && (
        <div className="md:hidden flex flex-col w-full items-end">
          <Button text={"About"} />
          <Button text={"Experience"} />
          <Button text={"Project"} />
          <Button text={"Contact"} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
