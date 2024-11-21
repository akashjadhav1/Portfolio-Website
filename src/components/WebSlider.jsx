import React from "react";
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
    <>
      <div className="text-center text-3xl font-bold mt-3">
        <h1 className="text-pink-300">TOP TECHNOLOGY</h1>
      </div>
      <div className="h-2/4 mt-5 rounded m-10">
        <Slider {...settings}>
          {imageArr.map((image, index) => (
            <div className="mt-4" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-32 bg-white rounded shadow-indigo-700 shadow-2xl object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default WebSlider;
