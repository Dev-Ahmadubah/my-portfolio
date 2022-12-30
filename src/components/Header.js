import React, { useState } from "react";
import Toggle from "../components/toggle";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <section className="bg-white dark:bg-gray-900">
      <nav className="container mx-auto flex items-center flex-wrap py-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="font-semibold text-3xl tracking-tight text-gray-700 ml-6 hover:text-gray-500 cursor-pointer dark:text-white font-serif">
            AHMAD
          </h1>
        </div>
        <div className="block lg:hidden md:hidden">
          <button
            className="flex items-center px-3 py-2 mr-5 border rounded border-gray-500 hover:text-gray-400 hover:bg-400 dark:text-white"
            onClick={() => setNavbar(!navbar)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto hidden">
          <div className="text-lg text-center lg:flex-grow ">
            <a
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4 cursor-pointer dark:text-white"
              href="#about"
            >
              About Me
            </a>
            <a
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4 cursor-pointer dark:text-white "
              href="#project"
            >
              Project
            </a>
            <a
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4 cursor-pointer dark:text-white"
              href="/"
            >
              Contact
            </a>
          </div>
          {/* <button className="inline-block px-7 py-3 mr-10 md:px-10 bg-white font-medium text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
          Get my Resume
        </button> */}
          <Toggle />
        </div>
        {navbar ? (
          <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className="text-lg text-center lg:flex-grow ">
              <a
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4 cursor-pointer dark:text-white"
                href="/"
              >
                Home
              </a>
              <a
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4 cursor-pointer dark:text-white"
                href="/"
              >
                About
              </a>
              <a
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4 cursor-pointer dark:text-white"
                href="/"
              >
                Project
              </a>
              {/* <button className="inline-block px-7 py-3 mt-4 mr-10 md:px-10 bg-white font-medium text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
          Get my Resume
        </button> */}
            </div>
          </div>
        ) : null}
      </nav>
    </section>
  );
}

export default Header;
