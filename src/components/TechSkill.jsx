import React from "react";

function TechSkill() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-5 text-sky-500" id="techskills">TECH SKILLS</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-around ">
        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-600 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-orange-300">Scripting Languages</h1>
          <div className="flex justify-center mt-5">
            <img src="/images/html.png" alt="HTML" className="w-10" />
            <p className="mx-4 font-bold mt-3 text-gray-500">HTML</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/css.png" alt="CSS" className="w-7" />
            <p className="mx-6 font-bold mt-3 text-gray-500">CSS</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/js.png" alt="JavaScript" className="w-11" />
            <p className="mx-1 font-bold mt-3 text-gray-500">JavaScript</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/react.png" alt="React" className="w-10" />
            <p className="mx-5 font-bold mt-3 text-gray-500">React</p>
          </div>
          <div className="flex justify-center mt-5 mb-3">
            <img src="/images/redux.png" alt="Redux" className="w-9" />
            <p className="mx-5 font-bold mt-1 text-gray-500">Redux</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 p-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold p-2 text-center text-green-200">Frameworks</h1>
          <div className="flex justify-center mt-5">
            <img src="/images/bootstrap.png" className="w-9" alt="Bootstrap" />
            <p className="mx-5 font-bold text-gray-500">Bootstrap</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/tailwind.png" className="w-10" alt="Tailwind" />
            <p className="mx-7 font-bold text-gray-500">Tailwind</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/materialUi.png" alt="Material UI" className="w-9"/>
            <p className="mx-4 font-bold text-gray-500">Material UI</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-pink-300">Hosting Platforms</h1>
          <div className="flex justify-center mt-5">
            <img src="/images/netlify.png" alt="Netlify" className="w-10" />
            <p className="mx-5 font-bold text-gray-500">Netlify</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/github.png" alt="GitHub" className="w-10 bg-sky-100 rounded-full" />
            <p className="mx-5 font-bold text-gray-500">GitHub</p>
          </div>
          <div className="flex justify-center mt-5 mb-3">
            <img src="/images/vercel.png" alt="Vercel" className="w-12 bg-sky-100 rounded" />
            <p className="mx-5 font-bold text-gray-500">Vercel</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold text-center mt-4 p-3 text-center text-purple-400">Database</h1>
          <div className="flex justify-center mt-5 mx-3 mb-3">
            <img src="/images/mongodb.png" className="w-10" alt="MongoDB" />
            <p className="mx-5 mt-3 font-bold text-gray-500">MongoDB</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-sky-500 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-indigo-800">Version Control</h1>
          <div className="flex justify-center mt-5 mb-3">
            <img src="/images/git.png" className="w-10" alt="Git" />
            <p className="mx-5 mt-2 font-bold text-gray-500">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;
