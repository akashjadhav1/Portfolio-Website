import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

function ContactUs() {
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactCards = [
    {
      id: 1,
      label: 'GitHub',
      value: 'akashjadhav1',
      icon: <FaGithub size={24} />,
      iconBg: 'bg-slate-700',
      href: 'https://github.com/akashjadhav1',
    },
    {
      id: 2,
      label: 'LinkedIn',
      value: 'akash-jadhav-0b03922b4',
      icon: <FaLinkedinIn size={24} />,
      iconBg: 'bg-[#0a66c2]',
      href: 'https://www.linkedin.com/in/akash-jadhav-0b03922b4/',
    },
    {
      id: 3,
      label: 'Email',
      value: 'akashjadhav5975@gmail.com',
      icon: <FaEnvelope size={22} />,
      iconBg: 'bg-red-500',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=akashjadhav5975@gmail.com',
    },
    {
      id: 4,
      label: 'Phone',
      value: '+91 90226 89218',
      icon: <FaPhone size={22} className="rotate-180" />,
      iconBg: 'bg-green-500',
      href: 'tel:+919022689218',
    },
  ];

  return (
    <section id="contactus" className="bg-slate-100 dark:bg-[#0f172a] py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>

      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Let's work together!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm always open to discussing new opportunities, interesting
          projects, or just having a chat about technology.
        </p>
      </div>

      {/* Contact Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {contactCards.map((card) => (
          <motion.a
            key={card.id}
            variants={itemVariant}
            href={card.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:bg-slate-50 dark:hover:bg-[#273449] transition-colors duration-300"
          >
            <span
              className={`shrink-0 w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center text-white`}
            >
              {card.icon}
            </span>
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {card.label}
              </p>
              <p className="text-slate-900 dark:text-white font-semibold break-words">
                {card.value}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default ContactUs;
