import React from "react";
import Mask from "./images/mask.png";
import { motion } from "framer-motion";
import Resume from "./images/Resume.pdf";

function About() {
  return (
    <div>
      <section className="mt-2">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
            <p className="text-gray-700 dark:text-white">Hey🙋‍♂️, my name is</p>
            <h6 className=" font-medium text-gray-700 text-xl md:text-2xl mb-2 dark:text-white">
              Ahmad Uba Ahmad
            </h6>
            <motion.h1
              className="font-semibold text-orange-400 text-xl md:text-2xl leading-none mb-2 dark:text-orange-400 "
              id="about"
              initial={{ x: "-200vh" }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 40,
              }}
            >
              I'm a Front-end developer
            </motion.h1>
            <p className="text-gray-700 dark:text-white">
              Experienced Frontend Developer with a passion for cloud
              engineering, skilled in designing and building the visual elements
              of websites and applications{" "}
            </p>
          </div>
          <div className="lg:max-w-lg mt-6 lg:w-full md:w-1/2 w-5/6 flex items-center justify-center mb-10">
            <img src={Mask} alt={`Baz taking a `} className="h-60" />
          </div>
        </div>
        {/* About me */}
        <div className="container mx-auto text-left px-5">
          <h1 className="font-semibold text-gray-700 text-3xl md:text-3xl mb-2 dark:text-white">
            About Me
          </h1>
          <p className="text-gray-600 font-normal mb-6 text-lg  text-left  mx-auto py-5 dark:text-white">
            A result-driven frontend developer with 2+ years of experience
            building user-friendly and responsive websites and applications.
            Proficient in HTML, CSS, JavaScript, and frameworks such as
            Tailwindcss, Bootstrap and React. Skilled in creating visually
            appealing and intuitive interfaces using design principles and best
            practices. Able to work well in a team environment and communicate
            effectively with non-technical stakeholders.
          </p>

          <motion.button
            className="px-6 py-3  md:px-10 bg-gray-700 font-medium text-white text-md rounded-md hover:text-gray-700 hover:bg-white transition ease-linear duration-500 mb-5"
            download={{ Resume }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(205, 255, 255 )",
              boxShadow: "0px 0px 8px rgb(255, 255, 255 )",
            }}
            transition={{
              duration: 1.2,
              yoyo: Infinity,
            }}
          >
            Get my resume
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default About;
