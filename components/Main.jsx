import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#1E90FF]"> Harendra</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Full-stack Blockchain Developer
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I'm a 18 year old self-taught blockchain developer who just loves to
            learn
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
