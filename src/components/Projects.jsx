import React from "react";
import GuessTheNumber from "../assets/GuessTheNumber.png";
import BlackJack from "../assets/BlackJack.png";
import TodoApp from "../assets/TodoApp.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: GuessTheNumber,
      live: "https://bavankrishnasagarguessmynumbergame.netlify.app/",
      code: "https://github.com/Sagarkbk/GuessMyNumberGame",
    },
    {
      id: 2,
      image: BlackJack,
      live: "https://bavankrishnasagarblackjackgame.netlify.app/",
      code: "https://github.com/Sagarkbk/Blackjack",
    },
    {
      id: 3,
      image: TodoApp,
      live: "https://kbksagar.pythonanywhere.com/sign-up",
      code: "",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, live, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(live, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Live
                </button>
                <button
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
