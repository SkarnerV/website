import React from "react";

const Button = (props: { text: string }) => {
  return (
    <button className="text-gray-400 hover:text-white border-transparent px-2 py-4 hover:border-white border-2 items-center">
      {props.text}
    </button>
  );
};

export default Button;
