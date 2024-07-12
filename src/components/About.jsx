import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg sm:p-4 py-24 px-10 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base mt-8 sm:text-xl leading-relaxed">
          Hello World! I'm Sriram Adithya, based out of Chennai, India. I have
          been working as a DevOps-backend engineer for the past two years. I
          Performed monthly server patching to prevent bugs and maintain system
          integrity. I maintain and monitor applications daily, handle traffic
          failovers due to any SA changes, and remediate consumer issues. I
          assist teammates and follow the Agile methodology on the Jira board.
          Additionally, I handle security vulnerability tickets and use
          WhiteSource for my Java applications. I have worked on upgrading from
          Java 8 to Java 11 and have engaged in various other migrations,
          including Cloud Foundry and GitHub migrations.
        </p>
        <p className="text-base mt-10 sm:text-xl leading-relaxed">
        Currently, I am learning front-end web development to enhance my knowledge. I have a keen interest in web technologies like React and Tailwind. I have been working on a couple of projects to strengthen my fundamentals and improve my problem-solving skills by solving data structures and algorithms (DSA) challenges. I'm passionate about unique, interesting design and user-friendly functionality, so feel free to share your unconventional artistic project ideas or app proposals with me.
        </p>
      </div>
    </div>
  );
};

export default About;
