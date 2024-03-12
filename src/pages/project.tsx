import BlinkingCursor from "../components/blinking";
import { LinkIcon } from "../util/icons";

const ProjectDetail = (props: {
  title: string;
  description: string;
  link?: string;
}) => (
  <div className="hover-white p-4 space-y-2">
    <div className="flex">
      <div className="flex-1">
        <div className="text-3xl">{props.title}</div>

        <div className="text-kg">{props.description}</div>
      </div>
      <div className="bottom-0">
        {props.link && (
          <button onClick={() => window.open(props.link)}>
            <LinkIcon />
          </button>
        )}
      </div>
    </div>
  </div>
);

const ProjectPage = () => {
  return (
    <div className="p-8 2xl:px-64">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
        <BlinkingCursor text="Projects" />
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectDetail
            title={"Personal Website"}
            description={"My personal website"}
            link={"https://github.com/SkarnerV/website"}
          />
          <ProjectDetail
            title={"ESN Chat Room"}
            description={"Chat application under emergency"}
            link={"https://github.com/SkarnerV/ESNChatroom"}
          />

          <ProjectDetail
            title={"Driver-Matching and Advertising Stream Processing"}
            description={"Solution to process steams"}
            link={""}
          />
          <ProjectDetail
            title={"Wecloudchat Kubernetes Microservices"}
            description={"Solution to chat application deployment"}
            link={""}
          />
          <ProjectDetail
            title={"Covey.Town"}
            description={"Online meeting platform"}
            link={"https://github.com/SkarnerV/fall-22-team-project-group-206"}
          />

          <ProjectDetail
            title={"Brain CT Image Hemorrhage Segmentation Model Training"}
            description={"Classification solution for Hemorrhage Segmentation"}
            link={
              "https://drive.google.com/file/d/1HZRQJYS6cGqdqg0DZejlRPVYuGc3ZiSJ/view?usp=sharing"
            }
          />
          <ProjectDetail
            title={"Poker Game Artificial Intelligence"}
            description={"AI player for a poker game"}
            link={"https://github.com/SkarnerV/CS4100FightingLandlord"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
