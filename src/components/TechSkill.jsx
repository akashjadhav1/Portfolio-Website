import React from "react";
import { motion, useInView } from "framer-motion";

function TechSkill() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  // Animation variants for the container
  const containerVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.5 } },
  };

  // Animation variants for each item
  const itemVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div>
        <h1
          className="text-3xl font-bold text-center mb-5 text-sky-500"
          id="techskills"
        >
          TECH SKILLS
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-around">
        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-600 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-orange-300">
            Scripting Languages
          </h1>
          <motion.div variants={itemVariant} className="flex justify-center mt-5">
            <img src="/images/html.png" alt="HTML" className="w-10" />
            <p className="mx-4 font-bold mt-3 text-gray-500">HTML</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5">
            <img src="/images/css.png" alt="CSS" className="w-7" />
            <p className="mx-6 font-bold mt-3 text-gray-500">CSS</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5">
            <img src="/images/js.png" alt="JavaScript" className="w-11" />
            <p className="mx-1 font-bold mt-3 text-gray-500">JavaScript</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5">
            <img src="/images/react.png" alt="React" className="w-10" />
            <p className="mx-5 font-bold mt-3 text-gray-500">React</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5 mb-3">
            <img src="/images/redux.png" alt="Redux" className="w-9" />
            <p className="mx-5 font-bold mt-1 text-gray-500">Redux</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border mb-5 sm:mb-0 sm:mr-5 p-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
        >
          <h1 className="text-xl font-bold p-2 text-center text-green-200">
            Frameworks
          </h1>
          <motion.div variants={itemVariant} className="flex justify-around mt-5">
            <img src="/images/bootstrap.png" className="w-8" alt="Bootstrap" />
            <p className="font-bold text-gray-500">Bootstrap</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-around mt-5">
            <img src="/images/tailwind.png" className="w-9" alt="Tailwind" />
            <p className="font-bold text-gray-500">Tailwind</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-around mt-5">
            <img
              src="/images/materialUi.png"
              alt="Material UI"
              className="mx-3 w-7"
            />
            <p className="font-bold text-gray-500">Material UI</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-around mt-5">
            <img
              src="/images/next.png"
              alt="Next JS"
              className="w-8 bg-white p-1 rounded"
            />
            <p className="font-bold text-gray-500">Next JS</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-around mt-5">
            <img
              src="/images/nextUI.png"
              alt="Next UI"
              className="w-7 bg-white rounded"
            />
            <p className="font-bold text-gray-500">Next UI</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-pink-300">
            Hosting Platforms
          </h1>
          <motion.div variants={itemVariant} className="flex justify-center mt-5">
            <img src="/images/netlify.png" alt="Netlify" className="w-10" />
            <p className="mx-5 font-bold text-gray-500">Netlify</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5">
            <img
              src="/images/github.png"
              alt="GitHub"
              className="w-10 bg-sky-100 rounded-full"
            />
            <p className="mx-5 font-bold text-gray-500">GitHub</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5 mb-3">
            <img
              src="/images/vercel.png"
              alt="Vercel"
              className="w-12 bg-sky-100 rounded"
            />
            <p className="mx-5 font-bold text-gray-500">Vercel</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-indigo-800">
            Backend
          </h1>
          <motion.div variants={itemVariant} className="flex justify-center mt-5 mx-3 mb-3">
            <img
              src="/images/nodejs.png"
              className="w-12 md:px-2 bg-gray-100 rounded-lg"
              alt="Node.js"
            />
            <p className="mx-5 mt-1 font-bold text-gray-500">Node JS</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5 mx-3 mb-2">
            <img
              src="/images/expressjs.png"
              className="w-12 md:px-2 bg-gray-100 rounded-lg"
              alt="Express.js"
            />
            <p className="mx-3 mt-2 font-bold text-gray-500">Express JS</p>
          </motion.div>
          <motion.div variants={itemVariant} className="flex justify-center mt-5 mx-3 mb-3">
            <img
              src="/images/mongodb.png"
              className="w-12 md:px-2"
              alt="MongoDB"
            />
            <p className="mx-3 mt-3 font-bold text-gray-500">MongoDB</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-purple-400">
            Version Control
          </h1>
          <motion.div variants={itemVariant} className="flex justify-center mt-5 mb-3">
            <img src="/images/git.png" className="w-10" alt="Git" />
            <p className="mx-5 mt-2 font-bold text-gray-500">Git</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TechSkill;
