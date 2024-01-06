import React from 'react'
import Slider from "react-slick";

function WebSlider() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 5000,
      autoplaySpeed:1000,
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
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
      return (
        <>
        <div className='text-center text-3xl font-bold mt-3'>
          <h1 className='text-pink-300'>TOP TECHNOLOGY</h1>
        </div>
        <div className=' h-2/4 mt-5  rounded m-10'>
        

<Slider {...settings} >
          <div className='mt-4'>
            <img src="/images/html.png" className='w-36 bg-white rounded pt-3 shadow-indigo-700  shadow-2xl' alt="html" />
          </div>
          <div className='mt-4'>
            <img src="/images/css.png" className='w-32 h-36 mt-2 bg-white rounded p-2 shadow-indigo-700 shadow-2xl' alt="css" />
          </div>
          <div className='mt-3'>
          <img src="/images/js.png" className='w-36 bg-white rounded pt-3 shadow-indigo-700 shadow-2xl' alt="js" />
          </div>
          <div className='mt-4'>
          <img src="/images/react.png" className='w-40 bg-white rounded  p-3 shadow-indigo-700 shadow-2xl' alt="react" />
          </div>
          <div className='mt-10 p-1'>
          <img src="/images/next.png" className='w-48 bg-white rounded pt-3 p-4 shadow-indigo-700 shadow-2xl' alt="next" />
          </div>
          <div className='mt-4 mx-4'>
          <img src="/images/mongodb.png" className='w-36 bg-white rounded pt-3 shadow-indigo-700 shadow-2xl' alt="mongodb" />
          </div>
          <div className='mt-4 mx-4'>
          <img src="/images/github.png" className='w-36 bg-white rounded pt-3 shadow-indigo-700 shadow-2xl' alt="github" />
          </div>
          <div className='mt-4 mx-4'>
          <img src="/images/nodejs.png" className='w-36 bg-white rounded mt-10 shadow-indigo-700 shadow-2xl' alt="nodejs" />
          </div>
          <div className='mt-4 mx-4'>
          <img src="/images/expressjs.png" className='w-36 bg-white rounded mt-10 shadow-indigo-700 shadow-2xl' alt="expressjs" />
          </div>
        </Slider>
        </div>
        </>
      );
}

export default WebSlider
