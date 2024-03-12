const Icon = (props: { path?: string; iconName: string }) => {
  return (
    <div className="rounded-full p-2 border-2 bg-transparent border-transparent hover:border-white hover:bg-white">
      <div
        onClick={() => {
          if (props.path) {
            window.location.href = props.path;
          }
        }}
        className={`bg-cover ${props.iconName} w-6 h-6`}
      ></div>
    </div>
  );
};

export default Icon;
