import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ecoslink And Alammulia",
      img: "/images/ecoslinkAdmin.png",
      description:
        "ERP system admin panel covering CRM, costing, purchase orders, inventory, invoicing, project management, and scheduling. Built with React, TypeScript, Vite, Redux Toolkit, React Query, TanStack Table, Radix UI, and Tiptap, with Chart.js and Recharts analytics dashboards.",
      tags: ["React", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS"],
      live: "https://ecoslink-panel.segwitz.dev",
    },
    {
      id: 6,
      title: "Gold Leaf",
      img: "/images/goldleafAdmin.png",
      description:
        "Sales and inventory management panel for a tea powder brand (Nutrigold premix products), built on the Vuexy Next.js admin template with MUI. Covers daily sales tracking, low inventory alerts, sales orders, commission and incentive management, sales person and client management, with AG Charts analytics dashboards, calendars, maps, Excel export, and i18n.",
      tags: ["Next.js", "MUI", "Redux Toolkit", "React Query", "AG Charts"],
      live: "https://panel-goldleaf.segwitz.dev/home/",
    },
    
    {
      id: 3,
      title: "10x Strategy Coach (Website)",
      img: "/images/10xStrategyCoach.png",
      description:
        "User-facing coaching platform (John10:10 & 10X) built on a monorepo architecture with a shared UI package, using React 19, TypeScript, Vite, Redux Toolkit, React Query, Tiptap editor, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Vite", "Monorepo", "Tailwind CSS"],
      live: "https://10x-10xceos.segwitz.dev/auth/login",
    },
    {
      id: 4,
      title: "10x Strategy Coach (Admin Panel)",
      img: "/images/10xStrategyAdmin.png",
      description:
        "Dedicated admin panel for the 10x platform, part of the same monorepo with a shared UI package. Includes drag-and-drop content management, rich text editing, Excel export, and analytics dashboards using React 19, TypeScript, Vite, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Vite", "Monorepo", "Tailwind CSS"],
      live: "https://admin-10xceos.segwitz.dev/login",
    },
    {
      id: 5,
      title: "RANTAIX(ESG start 2.0)",
      img: "/images/rantaix.png",
      description:
        "Environmental, Social, and Governance platform built on the Vuexy Next.js admin template with MUI, Redux Toolkit, and AG Grid, featuring Chart.js, Recharts, and Nivo dashboards, CASL access control, Excel export, and i18n.",
      tags: ["Next.js", "MUI", "TypeScript", "Redux Toolkit", "AG Grid"],
      live: "https://rantainext.org/login/",
    },
    {
      id: 2,
      title: "Disruptive Doctors",
      img: "/images/disruptiveDoctors.png",
      description:
        "Healthcare platform admin panel built with React, TypeScript, Vite, Redux Toolkit, React Query, Radix UI, and Tiptap, with Recharts dashboards, Google Maps integration, and Excel/CSV data handling.",
      tags: ["React", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS"],
      live: "https://admin.disruptive-doctors.com/login",
    },
  
  ];

  // Animation variants for the container
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Animation variants for each project
  const projectVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="projects" className="bg-slate-100 dark:bg-[#0f172a] py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl md:text-5xl inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>

      {/* Project Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={projectVariant}
            className="flex flex-col bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-transform hover:-translate-y-2 duration-300"
          >
            {/* Image with hover overlay */}
            <div className="relative group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Live"
                  className="w-12 h-12 rounded-full bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center text-white transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-500 text-white text-sm font-medium px-4 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
