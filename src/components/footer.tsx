import Icon from "./icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-8 mt-8 space-y-8">
      <div className="flex w-full justify-center items-center space-x-8 ">
        <Icon iconName={"bg-github"} />
        <Icon iconName={"bg-linkedin"} />
        <Icon iconName={"bg-email"} />
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Shuhang Han. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
