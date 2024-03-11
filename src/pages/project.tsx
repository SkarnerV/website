import BlinkingCursor from "../components/blinking";

const ProjectPage = () => {
  return (
    <div className="h-screen p-8">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
        <BlinkingCursor text="Projects" />
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="hover-white p-4">
            <div className="flex flex-col"></div>
            <div className="text-3xl">ESN Chat Room</div>
            <div className="text-2xl">ESN Chat Room</div>
            <div className="text-xl">ESN Chat Room</div>
            <div className="flex">
              <div className="bg-cover bg-github w-8 h-8"></div>
            </div>
          </div>
          <div className="hover-white p-4">
            <div className="flex flex-col"></div>
            <div className="text-3xl">ESN Chat Room</div>
            <div className="text-2xl">ESN Chat Room</div>
            <div className="text-xl">ESN Chat Room</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
