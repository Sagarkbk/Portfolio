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
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          magnam tempore at, dignissimos facilis eligendi voluptatibus iure
          aliquid saepe dolorem veniam, officia delectus earum ipsam impedit ad
          beatae asperiores fugiat eum modi vel! Quaerat quasi repellat,
          architecto quisquam quam mollitia optio voluptatum tempora eius fuga
          officiis iusto doloribus veritatis quis?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          vero minima. Dolores doloribus, tempora reiciendis voluptatem facere,
          est iste fuga a quasi nostrum error nulla eveniet eum nam veniam.
          Deserunt consequuntur rerum excepturi consequatur fugiat quis nihil
          laudantium doloremque facilis hic perferendis enim earum incidunt
          possimus, fuga animi, velit harum?
        </p>
      </div>
    </div>
  );
};

export default About;
