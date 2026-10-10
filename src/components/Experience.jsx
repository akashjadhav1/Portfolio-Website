import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "SegWitz Sdn Bhd",
      period: "Feb 2025 - Present",
      location: "Selangor, Malaysia - Remote",
      description:
        "Currently working as a Frontend Developer, developing and maintaining web applications using modern technologies. Contributing to innovative projects and collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      id: 2,
      role: "MERN Stack Developer",
      company: "Smart Matrix Digital Services LTD",
      period: "Aug 2022 - Jan 2025",
      location: "Pune, India - Onsite",
      description:
        "Worked as a MERN Stack Developer building scalable full-stack web applications. Designed and consumed RESTful APIs, implemented responsive UIs with React, and collaborated with teams to deliver reliable, production-ready solutions.",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const cardVariantRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <div id="experience" className="bg-slate-100 dark:bg-[#0f172a] py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl md:text-5xl inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-[1000px] mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/60 -translate-x-1/2"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={exp.id}
              className={`relative mb-12 flex ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <span className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2 ring-4 ring-slate-100 dark:ring-[#0f172a] z-10"></span>

              <motion.div
                variants={isLeft ? cardVariant : cardVariantRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl shadow-black/10 dark:shadow-black/30 ${
                  isLeft ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {exp.company}
                </p>

                <div
                  className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-4 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
