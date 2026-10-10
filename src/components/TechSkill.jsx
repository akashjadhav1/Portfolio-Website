import React from "react";
import { motion } from "framer-motion";
import {
  SiRedux,
  SiTailwindcss,
  SiJquery,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
} from "react-icons/si";

function TechSkill() {
  // Animation variants for the container
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // Animation variants for each tech skill item
  const techSkillVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      skills: [
        { name: "HTML", img: "/images/html.png" },
        { name: "CSS", img: "/images/css.png" },
        { name: "JavaScript", img: "/images/js.png" },
        { name: "React", img: "/images/react.png" },
        { name: "Next JS", img: "/images/next.png" },
        { name: "Bootstrap", img: "/images/bootstrap.png" },
      ],
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      skills: [
        { name: "Redux", icon: <SiRedux size={44} color="#764abc" /> },
        { name: "Material-UI", img: "/images/materialUi.png" },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={44} color="#06b6d4" /> },
        { name: "jQuery", icon: <SiJquery size={44} color="#0769ad" /> },
        { name: "Webpack", icon: <SiWebpack size={44} color="#1c78c0" /> },
        { name: "Babel", icon: <SiBabel size={44} color="#f9dc3e" /> },
        { name: "ESLint", icon: <SiEslint size={44} color="#4b32c3" /> },
        { name: "Prettier", icon: <SiPrettier size={44} color="#56b3b4" /> },
      ],
    },
    {
      id: 3,
      title: "Backend",
      skills: [
        { name: "Node.js", img: "/images/nodejs.png" },
        { name: "Express.js", img: "/images/expressjs.png" },
        { name: "MongoDB", img: "/images/mongodb.png" },
      ],
    },
    {
      id: 4,
      title: "Tools & Others",
      skills: [
        { name: "Git", img: "/images/git.png" },
        { name: "GitHub", img: "/images/github.png" },
        { name: "Netlify", img: "/images/netlify.png" },
        { name: "Vercel", img: "/images/vercel.png" },
        { name: "Next UI", img: "/images/nextUI.png" },
      ],
    },
  ];

  return (
    <div id="techskills" className="bg-slate-100 dark:bg-[#0f172a] py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl md:text-5xl inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Skills &amp; Technologies
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>

      {/* Category Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={techSkillVariant}
            className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
          >
            <h2 className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
              {category.title}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-slate-200 dark:bg-[#334155] rounded-xl p-4 flex flex-col items-center justify-center gap-3 border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-105 hover:bg-indigo-600/30 duration-300"
                >
                  {skill.icon ? (
                    skill.icon
                  ) : (
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-14 h-14 object-contain"
                    />
                  )}
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechSkill;
