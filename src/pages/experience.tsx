import BlinkingCursor from "../components/blinking";

const Experience = (props: {
  company: string;
  title: string;
  time: string;
  icon: string;
}) => {
  return (
    <div
      key={props.icon}
      className="flex items-center justify-between px-2 md:px-24 py-8 hover:border-white border-transparent border-2 font-mono text-gray-400 hover:text-white"
    >
      <div className={`bg-cover bg-${props.icon} w-20 h-20`}></div>
      <div className="flex flex-col text-right">
        <div className="text-3xl">{props.company}</div>
        <div className="text-2xl">{props.title}</div>
        <div className="text-xl">{props.time}</div>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="p-8">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
        <BlinkingCursor text="Experience" />
      </div>

      <div className="w-full px-16 pt-16 space-y-8">
        <Experience
          company={"Carnegie Mellon University"}
          icon={"cmu"}
          title={"MS Software Engieering"}
          time={"Aug 2023 - Dec 2024"}
        />
        <Experience
          company={"Carnegie Mellon University"}
          icon={"cmu"}
          title={"Research Assistant"}
          time={"Feb 2024 - Present"}
        />
        <Experience
          company={"Stealth Startup"}
          icon={"stealth"}
          title={"Software Engineer Intern"}
          time={"Oct 2023 - Feb 2024"}
        />
        <Experience
          company={"Siemens"}
          icon={"siemens"}
          title={"Software Engineer Intern"}
          time={"May 2022 - Jul 2023"}
        />
        <Experience
          company={"Northeastern University"}
          icon={"neu"}
          title={"BS Computer Science"}
          time={"Sep 2019 - Apr 2023"}
        />
        <Experience
          company={"Scout"}
          icon={"scout"}
          title={"Developer"}
          time={"Jan 2023 - Apr 2023"}
        />
        <Experience
          company={"Pfizer"}
          icon={"pfizer"}
          title={"Engineer Coop"}
          time={"Feb 2022 - Jul 2022"}
        />
      </div>
    </div>
  );
};

export default ExperiencePage;
