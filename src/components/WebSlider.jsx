import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";


const imageArr = [
  { src: "/images/html.png", alt: "HTML" },
  { src: "/images/css.png", alt: "CSS" },
  { src: "/images/js.png", alt: "JavaScript" },
  { src: "/images/react.png", alt: "React" },
  { src: "/images/next.png", alt: "Next.js" },
  { src: "/images/mongodb.png", alt: "MongoDB" },
  { src: "/images/github.png", alt: "GitHub" },
  { src: "/images/nodejs.png", alt: "Node.js" },
  { src: "/images/expressjs.png", alt: "Express.js" },
]

function WebSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-100 dark:bg-[#0f172a] py-12 px-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl font-bold mb-8"
      >
        <h1 className="text-pink-600 dark:text-pink-300">TOP TECHNOLOGY</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="tech-slider max-w-[1100px] mx-auto"
      >
        <Slider {...settings}>
          {imageArr.map((image, index) => (
            <div key={index} className="px-3 py-2">
              <img
                src={image.src}
                alt={image.alt}
                className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-xl border border-gray-200 dark:border-gray-700 p-2 shadow-lg shadow-indigo-500/20 object-contain mx-auto transform transition-transform hover:scale-110 duration-300"
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default WebSlider;
