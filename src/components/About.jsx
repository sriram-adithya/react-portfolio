import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base mt-8 sm:text-xl md:text-xl lg:text-xl">
          Hello World! I'm Sriram Adithya, based out of Chennai, India. I have
          been working at Accenture for the past 2 years as a DevOps engineer.
          On a daily basis, I monitor applications using tools like Kibana,
          Appdynamics, and Grafana, patching up servers, and maintaining
          applications in Cloud Foundry where they are deployed. Depending on
          the requirements, I work on features and leverage my skills.
        </p>
        <p className="text-base mt-10 sm:text-xl md:text-xl lg:text-xl">
          Currently, I am learning Front-End Web Development to enhance my
          knowledge. I have a keen interest in web technologies like React,
          Tailwind, and many others that I am yet to explore. I have been
          working on a couple of projects to strengthen my fundamentals. I'm
          passionate about unique, interesting design and user-friendly
          functionality, so feel free to share your unconventional artistic
          project ideas or app proposals with me.
        </p>
      </div>
    </div>
  );
};

export default About;
