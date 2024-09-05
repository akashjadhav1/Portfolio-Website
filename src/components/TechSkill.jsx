import React from "react";
import { motion, useInView } from "framer-motion";

function TechSkill() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  // Animation variants for the container
  const containerVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Animation variants for each tech skill item
  const techSkillVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="mt-7">
      <h1
        className="text-4xl font-bold text-center text-yellow-200"
        id="techskills"
      >
        TECH SKILLS
      </h1>

      <motion.div
        ref={ref}
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mx-4 sm:mx-6 lg:mx-[10%]"
      >
        {/* Tech Skill 1: Scripting Languages */}
        <motion.div
          variants={techSkillVariant}
          className="rounded-2xl overflow-hidden m-4 border shadow-blue-900 shadow-xl"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-orange-300">
            Scripting Languages
          </h1>
          <div className="px-6 py-4">
            <div className="flex justify-around items-center">
              <img src="/images/html.png" alt="HTML" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">HTML</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img src="/images/css.png" alt="CSS" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">CSS</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img src="/images/js.png" alt="JavaScript" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">JavaScript</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img src="/images/react.png" alt="React" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">React</p>
            </div>
            <div className="flex justify-around items-center mt-4 mb-4">
              <img src="/images/redux.png" alt="Redux" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">Redux</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Skill 2: Frameworks */}
        <motion.div
          variants={techSkillVariant}
          className="rounded-2xl overflow-hidden m-4 border shadow-blue-900 shadow-xl"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-green-200">
            Frameworks
          </h1>
          <div className="px-6 py-4">
            <div className="flex justify-around items-center">
              <img src="/images/bootstrap.png" alt="Bootstrap" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">Bootstrap</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img src="/images/tailwind.png" alt="Tailwind" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">Tailwind</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img
                src="/images/materialUi.png"
                alt="Material UI"
                className="w-10"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">Material UI</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img
                src="/images/next.png"
                alt="Next JS"
                className="w-10 bg-white p-1 rounded"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">Next JS</p>
            </div>
            <div className="flex justify-around items-center mt-4 mb-4">
              <img
                src="/images/nextUI.png"
                alt="Next UI"
                className="w-10 bg-white rounded"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">Next UI</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Skill 3: Hosting Platforms */}
        <motion.div
          variants={techSkillVariant}
          className="rounded-2xl overflow-hidden m-4 border shadow-blue-900 shadow-xl"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-pink-300">
            Hosting Platforms
          </h1>
          <div className="px-6 py-4">
            <div className="flex justify-around items-center">
              <img src="/images/netlify.png" alt="Netlify" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">Netlify</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img
                src="/images/github.png"
                alt="GitHub"
                className="w-10 bg-sky-100 rounded-full"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">GitHub</p>
            </div>
            <div className="flex justify-around items-center mt-4 mb-4">
              <img
                src="/images/vercel.png"
                alt="Vercel"
                className="w-10 bg-sky-100 rounded"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">Vercel</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Skill 4: Backend */}
        <motion.div
          variants={techSkillVariant}
          className="rounded-2xl overflow-hidden m-4 border shadow-blue-900 shadow-xl"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-indigo-800">
            Backend
          </h1>
          <div className="px-6 py-4">
            <div className="flex justify-around items-center">
              <img
                src="/images/nodejs.png"
                alt="Node.js"
                className="w-10 bg-gray-100 rounded-lg"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">Node.js</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <img
                src="/images/expressjs.png"
                alt="Express.js"
                className="w-10 bg-gray-100 rounded-lg"
              />
              <p className="font-bold mt-2 ml-4 text-gray-500">Express.js</p>
            </div>
            <div className="flex justify-around items-center mt-4 mb-4">
              <img src="/images/mongodb.png" alt="MongoDB" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">MongoDB</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Skill 5: Version Control */}
        <motion.div
          variants={techSkillVariant}
          className="rounded-2xl overflow-hidden m-4 border shadow-blue-900 shadow-xl"
        >
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-purple-400">
            Version Control
          </h1>
          <div className="px-6 py-4">
            <div className="flex justify-around items-center mb-4">
              <img src="/images/git.png" alt="Git" className="w-10" />
              <p className="font-bold mt-2 ml-4 text-gray-500">Git</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TechSkill;
