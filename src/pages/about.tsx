import BlinkingCursor from "../components/blinking";
import {
  AWSIcon,
  AnacondaIcon,
  AzureIcon,
  CSSIcon,
  DockerIcon,
  FigmaIcon,
  GCPIcon,
  GitIcon,
  HTMLIcon,
  JestIcon,
  K8sIcon,
  KafkaIcon,
  LaTexIcon,
  MongoDBIcon,
  MySQLIcon,
  PostmanIcon,
  RedisIcon,
  SocketIcon,
  UbuntuIcon,
} from "../util/icons";

const plData = [
  {
    name: "TypeScript",
    percentage: 80,
  },
  {
    name: "Python",
    percentage: 70,
  },
  {
    name: "Java",
    percentage: 50,
  },
  {
    name: "C#",
    percentage: 50,
  },
];

const flData = [
  {
    name: "React.js",
    percentage: 70,
  },
  {
    name: "Tailwind CSS",
    percentage: 70,
  },
  {
    name: "Vue.js",
    percentage: 50,
  },
  {
    name: ".NET",
    percentage: 50,
  },
];

const ProgressBar = (props: { name: string; percentage: number }) => (
  <div className="flex items-center justify-between w-full text-lg pt-4">
    {props.name}
    <div className="w-1/2 pr-8">
      <div className="w-full bg-gray-700 border-gray-400 border-2 group-hover:border-white h-4 ">
        <div
          className="group-hover:bg-white h-full bg-gray-400"
          style={{ width: `${props.percentage}%` }}
        ></div>
      </div>
    </div>
  </div>
);
const AboutPage = () => {
  return (
    <div className="p-8 2xl:px-64">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="bg-cover bg-terminal w-10 h-10 mx-4"></div>
        <BlinkingCursor text="About me" />
      </div>
      <div className="flex mt-16 text-3xl font-mono text-white">
        <div className="group text-gray-400 hover:text-white">
          <div className="block group-hover:hidden underline">Shuhang</div>
          <div className="hidden group-hover:block underline">Skarner</div>
        </div>
        <div className="px-2">Han</div>
      </div>
      <div className="flex flex-col font-mono text-white text-2xl">
        <div className="pt-6 flex flex-col md:flex-row items-center">
          <p>A Student at </p>
          <div className="ml-4 border-gray-400 hover:border-white border-2 p-2 text-gray-400 hover:text-white">
            Carnegie Mellon University
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center">
          <p>An addict of</p>
          <div className="ml-4 border-gray-400 hover:border-white border-2 p-2 text-gray-400 hover:text-white">
            HAYTEA
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center">
          <p>A fan of</p>
          <div className="ml-4 border-gray-400 hover:file:border-white border-2 p-2 text-gray-400 hover:text-white">
            One Piece
          </div>
        </div>
      </div>

      <div className="group flex flex-col mt-8 text-3xl font-mono text-gray-400 border-gray-400 hover:text-white hover:border-white border-2 p-4">
        <b>Tech Stack</b>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full mx-2">
            <p className="text-xl flex-col pt-6">Programming Languages</p>
            {plData.map((pl) => (
              <ProgressBar name={pl.name} percentage={pl.percentage} />
            ))}
          </div>
          <div className="w-full  mx-2">
            <p className="text-xl flex-col pt-6">Frameworks & Library</p>
            {flData.map((fl) => (
              <ProgressBar name={fl.name} percentage={fl.percentage} />
            ))}
          </div>
          <div className="w-full mx-2">
            <p className="text-xl flex-col pt-6 ">Others</p>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 pt-2">
              <GitIcon />
              <DockerIcon />
              <HTMLIcon />
              <CSSIcon />
              <FigmaIcon />
              <UbuntuIcon />
              <MySQLIcon />
              <AWSIcon />
              <MongoDBIcon />
              <K8sIcon />
              <PostmanIcon />
              <KafkaIcon />
              <GCPIcon />
              <AzureIcon />
              <RedisIcon />
              <SocketIcon />
              <JestIcon />
              <AnacondaIcon />
              <LaTexIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
