import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import postgresql from "../assets/postgresql.png";
import github from "../assets/github.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      image: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 3,
      image: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      image: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      image: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      image: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      image: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      image: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      image: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, image, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={image} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
