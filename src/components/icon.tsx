import React from "react";

const Icon = (props: { path?: string; iconName: string }) => {
  return (
    <button
      onClick={() => {
        if (props.path) {
          window.location.href = props.path;
        }
      }}
      className="rounded-full p-2 border-2 bg-transparent border-transparent hover:border-white hover:bg-white"
    >
      <div className={`bg-cover bg-${props.iconName} w-6 h-6`}></div>
    </button>
  );
};

export default Icon;
