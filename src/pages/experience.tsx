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
      className="flex flex-col items-center sm:flex-row justify-between px-0 sm:px-8 lg:px-0 xl:px-4 py-8 font-mono group-hover-white"
    >
      <div className={`bg-cover ${props.icon} w-20 h-20`}></div>
      <div className="flex flex-col flex-1 items-center sm:items-end">
        <div className="text-lg sm:text-xl md:text-2xl">{props.company}</div>
        <div className="text-lg sm:text-lg md:text-xl ">{props.title}</div>
        <div className="text-base sm:text-md md:text-lg">{props.time}</div>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="p-8 2xl:px-64">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
        <BlinkingCursor text="Experience" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-4 text-3xl font-mono ">
        <div className="group hover-white p-4">
          <b>Education</b>
          <Experience
            company={"Carnegie Mellon University"}
            icon={"bg-cmu"}
            title={"MS Software Engieering"}
            time={"Aug 2023 - Dec 2024"}
          />

          <Experience
            company={"Northeastern University"}
            icon={"bg-neu"}
            title={"BS Computer Science"}
            time={"Sep 2019 - Apr 2023"}
          />
        </div>
        <div className="group hover-white p-4">
          <b>Work Experience</b>
          <Experience
            company={"Alibaba Group"}
            icon={"bg-alibaba"}
            title={"Software Engineer Intern"}
            time={"May 2024 - Aug 2024"}
          />
          <Experience
            company={"Carnegie Mellon University"}
            icon={"bg-cmu"}
            title={"Research Assistant"}
            time={"Feb 2024 - Present"}
          />
          <Experience
            company={"Stealth Startup"}
            icon={"bg-stealth"}
            title={"Software Engineer Intern"}
            time={"Oct 2023 - Feb 2024"}
          />
          <Experience
            company={"Siemens"}
            icon={"bg-siemens"}
            title={"Software Engineer Intern"}
            time={"May 2022 - Jul 2023"}
          />

          <Experience
            company={"Scout"}
            icon={"bg-scout"}
            title={"Developer"}
            time={"Jan 2023 - Apr 2023"}
          />
          <Experience
            company={"Pfizer"}
            icon={"bg-pfizer"}
            title={"Engineer Coop"}
            time={"Feb 2022 - Jul 2022"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
