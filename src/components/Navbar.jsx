import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Projects" },
    { id: 4, text: "About" },
    { id: 5, text: "TechSkills" },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 ${nav ? 'bg-[#000300]' : ''}`}>
      <div className="bg-gradient-to-r from-violet-400 to-fuchsia-700 flex justify-between items-center h-24 max-w-[1275px] mx-auto px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold">AJ</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link
                to={item.text.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav
            ? "fixed md:hidden top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] cursor-pointer"
        }`}
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">AJ</h1>

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
