import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { projects } from "./Projects";

const AboutUs = () => {
  // Define the animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // Work periods (month is 1-indexed). "present" means still working here.
  const experiencePeriods = [
    { start: { year: 2022, month: 8 }, end: { year: 2025, month: 1 } }, // Aug 2022 - Jan 2025
    { start: { year: 2025, month: 2 }, end: "present" }, // Feb 2025 - Present
  ];

  const monthsBetween = (start, end) =>
    (end.year - start.year) * 12 + (end.month - start.month);

  const getTotalYearsExperience = () => {
    const now = new Date();
    const present = { year: now.getFullYear(), month: now.getMonth() + 1 };
    const totalMonths = experiencePeriods.reduce((sum, period) => {
      let end = period.end;
      if (period.end === "present") {
        end = present;
      }
      return sum + Math.max(0, monthsBetween(period.start, end));
    }, 0);
    return Math.floor(totalMonths / 12);
  };

  const stats = [
    { id: 1, value: `${getTotalYearsExperience()}+`, label: "Years Experience" },
    { id: 2, value: `${projects.length}+`, label: "Projects Completed" },
    { id: 3, value: "15+", label: "Technologies" },
  ];

  const connectLinks = [
    {
      id: 1,
      icon: <FaLinkedinIn size={22} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/akash-jadhav-751662268",
    },
    {
      id: 2,
      icon: <FaGithub size={22} />,
      text: "GitHub",
      href: "https://github.com/akashjadhav1",
    },
    {
      id: 3,
      icon: <FaEnvelope size={22} />,
      text: "Email",
      href: "mailto:akashjadhav5975@gmail.com",
    },
  ];

  return (
    <div id="about" className="bg-slate-100 dark:bg-[#1e293b] text-slate-900 dark:text-white py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl md:text-5xl inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left - Bio + Stats */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="lg:w-3/5"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I am a skilled web developer with experience in frontend
            development, Node.js backend, and DSA. I have contributed to
            building scalable, impactful web applications in collaborative
            environments. Driven by innovation, I thrive on delivering projects
            with real-world impact and look forward to bringing value to
            forward-thinking organizations.
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white dark:bg-[#334155] rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300"
              >
                <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Connect With Me */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="lg:w-2/5"
        >
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

          <div className="flex flex-col gap-5">
            {connectLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white dark:bg-[#334155] rounded-xl px-6 py-5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
              >
                {link.icon}
                <span className="text-lg">{link.text}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
