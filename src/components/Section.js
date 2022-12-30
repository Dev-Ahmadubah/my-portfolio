import React from "react";
import Html from "./images/html.png";
import Css from "./images/css.png";
import Js from "./images/js.png";
import Bootstrap from "./images/bootstrap.png";
import Tailwind from "./images/tailwind.png";
import Reactjs from "./images/react.png";
import Git from "./images/git.png";
import Mantine from "./images/firebase.png";
import Xd from "./images/xd.png";
import Photoshop from "./images/photoshop.png";
import Figma from "./images/figma.png";
import Upload from "./images/upload.png";
import Code from "./images/code.png";
import Page from "./images/landing.png";
import Bankapp from "./images/bankapp.png";
import Github from "./images/Github.png";
import "animate.css";

function Section() {
  const List = [
    {
      imageUrl: Html,
    },
    {
      imageUrl: Css,
    },
    {
      imageUrl: Js,
    },
    {
      imageUrl: Bootstrap,
    },
    {
      imageUrl: Tailwind,
    },
    {
      imageUrl: Reactjs,
    },
    {
      imageUrl: Git,
    },
    {
      imageUrl: Github,
    },
    {
      imageUrl: Mantine,
    },
    {
      imageUrl: Xd,
    },
    {
      imageUrl: Photoshop,
    },
    {
      imageUrl: Figma,
    },
   
  ];
  return (
    <>
      <main className="container mx-auto mt-20  px-5 bg-white dark:bg-gray-900">
        <h2 className="  mt-[6rem] font-bold text-gray-700 mb-10 text-3xl dark:text-white">
         Skills
        </h2>
        <div className="flex flex-row justify-between items-start gap-6 flex-wrap ">
          {List.map((list) => (
            <img
              src={list.imageUrl}
              alt=""
              className="w-7 h-7 mr-2 lg:w-10 lg:h-10 flex flex-col "
            />
          ))}
        </div>
      </main>
      <h2 className=" container mx-auto px-5 mt-[6rem] font-bold text-gray-700  text-3xl dark:text-white">
        Project
      </h2>
      <section className="text-gray-400 dark:bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* row start */}
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-400 dark:border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Page}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Organization LandingPage
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Pesponsive organization landingpage that is design optimal
                    display on various devices
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <p className="rounded-lg text-sm px-2 border-2 border-gray-200 mr-2">
                      HTML
                    </p>
                    <p className="rounded-lg text-sm px-2 border-2 border-gray-200">
                      Tailwindcss
                    </p>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <img src={Upload} alt=" Live logo" />
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <img src={Code} alt=" Live logo" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-400 dark:border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-48 w-full object-cover object-center"
                  src={Bankapp}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    BankApp Landing Page
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Pesponsive organization landingpage that is design optimal
                    display on various devices
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <p className="rounded-lg text-sm px-2 border-2 border-gray-200 mr-2">
                      React
                    </p>
                    <p className="rounded-lg text-sm px-2 border-2 border-gray-200">
                      Tailwindcss
                    </p>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <img src={Upload} alt=" Live logo" />
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <img src={Code} alt=" Live logo" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row 3 */}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="text-gray-400 body-font">
        <h2 className=" container mx-auto px-5 mt-10 font-bold text-gray-700  text-3xl dark:text-white">
          Experience
        </h2>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-3/5 md:w-2/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-400 inline-flex items-center justify-center text-white relative z-10">
                  1
                </div>
                <div className="flex-grow pl-4 text-md text-gray-600 dark:text-white">
                  <h2 className="font-medium title-font text-lg text-gray-700  mb-1 tracking-wider dark:text-white">
                    Frontend Developer Intern
                  </h2>
                  <p className="text-sm mb-2">
                    Shamrock Innovation | Oct 2021 - Mar 2022
                  </p>
                  <p className="leading-relaxed dark:text-gray-400">
                    - Implemented responsive design to ensure optimal display on
                    various devices
                  </p>
                  <p className="leading-relaxed mt-4 dark:text-gray-400">
                    - Created intuitive and visually appealing interfaces using
                    design principles and best practices
                  </p>
                  <p className="leading-relaxed mt-4 dark:text-gray-400">
                    - Participated in agile development methodologies, including
                    daily standups and sprint planning
                  </p>
                  <p className="leading-relaxed mt-4 dark:text-gray-400">
                    - Collaborated with cross-functional teams to integrate
                    frontend with backend systems
                  </p>
                </div>
              </div>

              {/* second */}
              <div className="flex relative pb-12 ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-400  inline-flex items-center justify-center text-white relative z-10">
                  2
                </div>
                <div className="flex-grow pl-4 text-md text-gray-600 dark:text-white">
                  <h2 className="font-medium title-font text-lg mb-1 tracking-wider">
                    Core Team member
                  </h2>
                  <p className="text-sm mb-2">
                    Developer Student Club, Naub. Apr 2019 - Nov 2022
                  </p>
                  <p className="leading-relaxed dark:text-gray-400">
                    - I was able to help a lot of students acquire innumerable
                    skills in their various interests.
                  </p>
                  <p className="leading-relaxed mt-4 dark:text-gray-400">
                    - I have the opportunity to contribute to the growth of the
                    club and to have made a lot of positive impact in the
                    development and aspirations of members of DSC NAUB.
                  </p>

                  <p className="leading-relaxed mt-4 dark:text-gray-400">
                    - Participated in and hosted events, hackathons, coding
                    challenges during college.
                  </p>
                </div>
              </div>

              {/* third */}
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-400 inline-flex items-center justify-center text-white relative z-10">
                  3
                </div>
                <div className="flex-grow pl-4 text-md text-gray-600 dark:text-white">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    Freelance
                  </h2>
                  <p className="leading-relaxed mt-4 dark:text-gray-400">
                    - Worked with the clients to understand their business needs
                    and implement a user-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
