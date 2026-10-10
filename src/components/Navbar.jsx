import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );

  // Joins class names, skipping falsy values (avoids ternary operators per SonarQube S1774)
  const cx = (...classes) => classes.filter(Boolean).join(" ");

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      if (next) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore storage errors (e.g. private mode)
    }
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },
    {id: 3, text: "ContactUs"},
    { id: 4, text: "About" },
    { id: 5, text: "TechSkills" },
    { id: 6, text: "GitHubStats" },
  ];

  return (
    <div className={cx("fixed top-0 w-full z-50", nav && "bg-[#000300]")}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-black to-fuchsia-700 flex justify-between items-center h-24 w-full mx-auto px-4 text-white"
      >
        {/* Logo */}
        <img src="/images/ajlogo2.png" alt="aj logo" className="lg:w-24 lg:h-24 h-20 w-20" />

        {/* Right side: navigation + theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item,id) => (
            <Link
                to={item.text.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={4000}
                key={item.id}
              >
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              
                {item.text}
             
            </li>
            </Link>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 transition-colors duration-300 cursor-pointer"
        >
          {dark && <FaSun size={18} />}
          {!dark && <FaMoon size={18} />}
        </button>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav && <AiOutlineClose size={20} />}
          {!nav && <AiOutlineMenu size={20} />}
        </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <ul
        className={cx(
          "fixed ease-in-out duration-500 top-0",
          nav &&
            "md:hidden left-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300]",
          !nav && "w-[60%] bottom-0 left-[-100%] cursor-pointer"
        )}
      >
        {/* Mobile Logo */}
        <img src="/images/ajlogo2.png" alt="aj logo" className="w-24 h-24" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link
              to={item.text.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={4000}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
