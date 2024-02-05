import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I'm an Aspiring Full Stact Developer with proficiency in React, Node
          JS, Express JS, PostgreSQL, MongoDB and Tailwind CSS. I love working
          on projects. I'm always in the process of upgrading myself. I love
          learning new tech stacks.
        </p>
        <br />
        <p className="text-xl">I love BackEnd more than FrontEnd</p>
      </div>
    </div>
  );
};

export default About;
