import React, { useState, useEffect } from "react";

const FullPageThreeDEffect = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
    const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
    const yRotation = 20 * xVal;
    const xRotation = -20 * yVal;
    setRotation({ x: xRotation, y: yRotation });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-50 h-50  flex items-center justify-center overflow-hidden"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s",
        perspective: "1000px",
      }}
    >
      <div className="flex flex-col">
        <div>Hello, I'm Shuhang Han</div>

        <div className="mt-6">Have a seat</div>
      </div>
    </div>
  );
};

export default FullPageThreeDEffect;
