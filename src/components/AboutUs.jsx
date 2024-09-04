import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Define the animation variants
  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <hr />
      <div className="mx-5 mt-8" id="about">
        <h1 className="font-bold text-3xl text-center mb-5 mt-1 text-blue-400">
          About Us
        </h1>
      </div>
      <div className="lg:flex lg:justify-around md:flex">
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mx-2 lg:w-1/2"
        >
          <img src="/images/aboutUs.png" className="" alt="AboutImg" />
        </motion.div>
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center lg:w-3/4 mx-1"
        >
          <h1 className="m-4 lg:mx-10 text-xl lg:text-3xl text-gray-400 font-serif">
            <span className="text-orange-500 font-bold font-serif">
              WEB DEVELOPER
            </span>
            <br />
            Results-driven Full Stack Web Developer with a strong foundation in
            frontend and backend technologies. Proven ability to deliver
            high-quality solutions from concept to deployment. Collaborative
            team player with expertise in responsive design, RESTful APIs, and
            database management. Eager to contribute technical proficiency and
            creativity to a dynamic development team.
          </h1>
        </motion.div>
      </div>
      <hr className="" />

      <div className="mt-5">
        <div className="flex flex-col md:flex-row justify-around mt-5 items-center">
          <motion.img
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src="/images/webDevelopment.jpg"
            alt="Web Development"
            className="md:w-1/4 rounded-2xl mb-5 shadow-xl shadow-orange-200 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
          />
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="md:w-1/4 mx-5 mb-5 font-light text-gray-400 text-center md:text-left font-serif"
          >
            <span className="text-2xl font-bold text-orange-300 ">
              WEB DEVELOPMENT
            </span>
            <br />
            Web development combines front-end (HTML, CSS, JavaScript) and
            back-end (Python, Ruby, PHP) technologies to create and maintain
            websites or applications. Frameworks like React and Angular enhance
            user interfaces, while Node.js supports server-side operations.
            Databases such as MySQL and MongoDB store data, ensuring responsive
            and dynamic online experiences across various devices.
          </motion.p>
        </div>
        <hr className="my-5" />

        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="md:w-1/4 mx-5 mb-5 font-light text-gray-400 text-center md:text-left font-serif"
          >
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
          </motion.p>
          <motion.img
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src="/images/gameDevelopment.jpg"
            alt="Game Development"
            className="md:w-1/4 rounded-2xl mb-5 shadow-purple-500 shadow-xl transform transition-transform hover:scale-110 duration-1000 ease-in-out"
          />
        </div>
        <hr className="my-5" />

        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <motion.img
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src="/images/ai.jpg"
            alt="Artificial Intelligence"
            className="md:w-1/4 rounded-2xl mb-5 shadow-blue-400 shadow-xl transform transition-transform hover:scale-110 duration-1000 ease-in-out"
          />
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="md:w-1/4 mx-5 mb-5 font-light text-gray-400 text-center md:text-left font-serif"
          >
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
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
