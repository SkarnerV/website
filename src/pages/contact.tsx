import BlinkingCursor from "../components/blinking";
import Icon from "../components/icon";

const ContactPage = () => {
  return (
    <div>
      <div className="p-8 2xl:px-64">
        <div className="flex flex-row w-full justify-center items-center">
          <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
          <BlinkingCursor text="Contact Me" />
        </div>
        <div className="flex w-full justify-center items-center space-x-8 mt-16">
          <Icon iconName={"bg-github"} />
          <Icon iconName={"bg-linkedin"} />
          <Icon iconName={"bg-email"} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
