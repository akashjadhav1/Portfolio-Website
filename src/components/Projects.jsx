import React from "react";

function Projects() {
  return (
    <div className=" mt-7">
      <h1 className="text-4xl font-bold text-center text-yellow-200" id="projects">
        TOP PROJECTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mx-4 sm:mx-6 lg:mx-[10%]">
        {/* Project 1 */}
        <div className=" rounded-2xl overflow-hidden m-4 border shadow-blue-900 shadow-xl sm:w-full lg:w-full ">
          <img
            src="/images/Crypto.png"
            alt="Card Img"
            className="w-full h-52 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Crypto Dashboard</div>
            <p className="text-gray-500 text-base font-serif">
              Digital assets secured by cryptography, decentralized on
              blockchain. Bitcoin, Ethereum, altcoins revolutionize finance.
              Transparent, borderless transactions. High volatility, potential
              for innovation, and disruption.
            </p>
          </div>
          <div className="flex justify-around ">
            <a href="https://ajcryptodashboard.netlify.app/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Live
                </span>
              </button>
            </a>

            <a href="https://github.com/akashjadhav1/CryptoDashboard.git">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Source Code
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-2xl border overflow-hidden m-4 shadow-sky-900 shadow-xl sm:w-full lg:w-full">
          <img
            src="/images/BookMyShow.png"
            alt="Card Img"
            className="w-full h-56 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Book My Show</div>
            <p className="text-gray-500 text-base font-serif">
              Online platform for movie, event, and show bookings. User-friendly
              interface, diverse options, secure transactions. Ultimate
              entertainment booking experience.
            </p>
          </div>
          <div className="flex justify-around pt-8">
            <a href="https://ajbookmyshow.netlify.app/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Live
                </span>
              </button>
            </a>

            <a href="https://github.com/akashjadhav1/Book-My-Show.git">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Source Code
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className=" rounded-2xl border overflow-hidden m-4 shadow-sky-900 shadow-xl sm:w-full lg:w-full">
          <img
            src="/images/EntertainmentApp.png"
            alt="Card Img"
            className="w-full h-56 object-cover "
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Disney Star</div>
            <p className="text-gray-500 text-base font-serif">
              A streaming app by Disney, offering a vast library of movies and
              series from various genres. Enhanced content, family-friendly, and
              exclusive originals, providing immersive entertainment.
            </p>
          </div>
          <div className="flex justify-around pt-2">
            <a href="https://ajdisneystar.netlify.app/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Live
                </span>
              </button>
            </a>

            <a href="https://github.com/akashjadhav1/DisneyStar.git">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Source Code
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className=" rounded-2xl border overflow-hidden m-4 shadow-sky-900 shadow-xl sm:w-full lg:w-full">
          <img
            src="/images/snapdealHome.jpg"
            alt="Card Img"
            className="w-full h-56 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Snapdeal Clone</div>
            <p className="text-gray-500 text-base font-serif">
              Our Snapdeal clone is a powerful e-commerce platform offering a
              seamless shopping experience and robust seller dashboard. With a
              user-friendly interface and advanced analytics, it ensures
              convenience and security for all users. This scalable and
              efficient solution is perfect for online retail.
            </p>
          </div>
          <div className="flex justify-around">
            <a href="https://snapdeal-opal.vercel.app/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Live
                </span>
              </button>
            </a>

            <a href="https://github.com/akashjadhav1/Snapdeal_.git">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Source Code
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="rounded-2xl border overflow-hidden m-4 shadow-sky-900 shadow-xl sm:w-full lg:w-full">
          <img
            src="/images/fandomHome.jpg"
            alt="Card Img"
            className="w-full h-56 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Fandom</div>
            <p className="text-gray-500 text-base font-serif">
              A streaming app by Disney, offering a vast library of movies and
              series from various genres. Enhanced content, family-friendly, and
              exclusive originals, providing immersive entertainment.
            </p>
          </div>
          <div className="flex justify-around pt-[70px]">
            <a href="https://fandom-full-stack.vercel.app/">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Live
                </span>
              </button>
            </a>

            <a href="https://github.com/akashjadhav1/fandom_FullStack.git">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Source Code
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
