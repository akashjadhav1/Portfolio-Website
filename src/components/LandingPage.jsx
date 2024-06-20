import React, { useEffect } from 'react';
import Typed from 'typed.js';

function LandingPage() {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Full Stack Developer","Web Developer", "Frontend Developer", "UI/UX Developer"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
    
    <div className='bg1 flex flex-col items-center lg:flex-row md:flex-row md:px-28 justify-around lg:px-28 p-5' id='home'>
     
      <div className='rounded-full ring-2 ring-purple-400 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-800 lg:w-60 md:w-60 w-48 mt-24 lg:mt-12 md:mt-12 lg:mx-32 md:mx-32 mb-5 lg:mb-0 md:mb-0 transform transition-transform hover:scale-110 duration-1000 ease-in-out'>
        <img src="/images/profile.jpg" alt="profile" className='rounded-full shadow-sky-500 shadow-2xl lg:w-80 md:w-80' />
      </div>

      <div className='text-center lg:text-left md:text-left  lg:w-1/2'>
        <h1 className='lg:text-7xl md:text-7xl text-6xl lg:mt-5 md:mt-5 text-green-400 font-semibold'>HELLO</h1>
        <h1 className='lg:text-2xl md:text-2xl text-gray-600 mt-2'>IT'S ME</h1>
        <h1 className='lg:text-3xl md:text-3xl text-fuchsia-800 mt-2 font-bold  '>AKASH JADHAV</h1>

        <div className='mt-5'>
       
          <h1 className='text-3xl text-gray-600'>I AM <br /> <span className='text-2xl text-orange-400 mt-2 typed-text font-bold'></span></h1>
          
        </div>

        <div className='flex pt-20'>
        <a href="https://drive.google.com/file/d/1JHvk74-IY_ojEjZqpU84lAzdujuO8OEQ/view?usp=drive_link"><button type="button" className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transform transition-transform hover:scale-110 duration-500 ease-in-out animate-pulse">Resume</button></a>
        <a href="https://github.com/akashjadhav1"><img src="/images/github.png" className='mx-5 w-10 h-10 shadow-cyan-500 shadow-md rounded-full bg-cyan-100 cursor-pointer transform transition-transform hover:scale-110 duration-500 ease-in-out' alt="git hub img" /></a>
        <a href="https://www.linkedin.com/in/akash-jadhav-751662268"><img src="/images/linkedin.png" className='mx-5 w-10 h-10 shadow-cyan-500 shadow-md rounded-xl bg-cyan-100 cursor-pointer transform transition-transform hover:scale-110 duration-500 ease-in-out' alt="linkedin img" /></a>
        </div>
        
      </div>

      
    
    </div>

    

    </>
  );
}

export default LandingPage;
