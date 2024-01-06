import React from "react";

function AboutUs() {
  return (
    <>
      <hr />
      <div className="mx-5 mt-8" id="about">
        <h1 className="font-bold text-3xl text-center mb-5 mt-1 text-blue-400">
          About Us
        </h1>
      </div>
      <div className="lg:flex lg:justify-around">
        <div className="mx-2 lg:w-1/2">
          <img src="/images/aboutUs.png" className="" alt="AboutImg" />
        </div>
        <div className="flex justify-center items-center lg:w-3/4  mx-1">
          <h1 className="m-4 lg:mx-10 text-xl lg:text-3xl text-gray-400">
            <span className="text-orange-500 font-bold">WEB DEVELOPER</span>
            <br />
            As an enthusiastic newcomer to the world of web design, I am eager
            to apply my passion and creativity to craft visually stunning and
            responsive websites. My goal is to ensure the highest level of
            client satisfaction in every project I undertake.
          </h1>
        </div>
      </div>
      <hr className="" />

      <div className="mt-5">
        <div className="flex flex-col md:flex-row justify-around mt-5 items-center">
          <img
            src="/images/webDevelopment.jpg"
            alt="Web Development"
            className="md:w-1/4 rounded-2xl mb-5 shadow-xl shadow-orange-200"
          />
          <p className="md:w-1/4 mx-5 mb-5 font-light text-gray-400 text-center md:text-left">
            <span className="text-2xl font-bold text-orange-300">
              WEB DEVELOPMENT
            </span>
            <br />
            Web development combines front-end (HTML, CSS, JavaScript) and
            back-end (Python, Ruby, PHP) technologies to create and maintain
            websites or applications. Frameworks like React and Angular enhance
            user interfaces, while Node.js supports server-side operations.
            Databases such as MySQL and MongoDB store data, ensuring responsive
            and dynamic online experiences across various devices.
          </p>
        </div>
        <hr className="my-5" />

        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <p className="md:w-1/4 mx-5 mb-5 font-light text-gray-400 text-center md:text-left">
            <span className="text-2xl font-bold text-green-300">
              GAME DEVELOPMENT
            </span>
            <br />
            Game development is the process of creating interactive digital
            experiences. It involves designing, programming, and testing games
            for various platforms. Key elements include graphics, audio, and
            gameplay mechanics. Developers often use engines like Unity or
            Unreal to streamline the process. Iterative testing and creativity
            are essential for producing engaging and entertaining games.
          </p>
          <img
            src="/images/gameDevelopment.jpg"
            alt="Game Development"
            className="md:w-1/4 rounded-2xl mb-5 shadow-purple-500 shadow-xl"
          />
        </div>
        <hr className="my-5" />

        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <img
            src="/images/ai.jpg"
            alt="Artificial Intelligence"
            className="md:w-1/4 rounded-2xl mb-5 shadow-blue-400 shadow-xl"
          />
          <p className="md:w-1/4 mx-5 mb-5 font-light text-gray-400 text-center md:text-left">
            <span className="text-2xl font-bold text-blue-300">
              ARTIFICIAL INTELLIGENCE
            </span>
            <br />
            Artificial Intelligence (AI) is a field of computer science that
            aims to create machines capable of intelligent behavior. It involves
            developing algorithms that enable machines to learn from data,
            recognize patterns, and make decisions. AI applications range from
            speech recognition and image processing to autonomous vehicles,
            enhancing automation and problem-solving across diverse domains.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
