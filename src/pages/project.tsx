import BlinkingCursor from "../components/blinking";

const ProjectPage = () => {
  return (
    <div className="h-screen p-8">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
        <BlinkingCursor text="Projects" />
      </div>
    </div>
  );
};

export default ProjectPage;
