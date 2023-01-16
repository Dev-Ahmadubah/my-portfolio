/* eslint-disable array-callback-return */
import React from "react";
import Github from "./images/Github.png";
import Twitter from "./images/Twitter.png";
import Mail from "./images/mail.png";
import Linkedn from "./images/Linkedn.png";

const List = [
  {
    imageUrl: Github,
    url: "https://github.com/Dev-Ahmadubah",
  },
  {
    imageUrl: Twitter,
    url: "https://twitter.com/ahmadubahh/",
  },
  {
    imageUrl: Mail,
    url: "mailto:ahmadsta7@gmail.com",
  },
  {
    imageUrl: Linkedn,
    url: "https://www.linkedin.com/in/ahmad-uba-ahmad-226a84197",
  },
];

function Footer() {
  return (
    <>
      <footer className="container mx-auto mt-10 py-10 bg-white dark:bg-gray-900">
        <div className="flex-row sm:flex justify-between mt-10 mr-10 ml-10 flex-wrap  ">
          <div>
            <h1 className="font-semibold text-4xl tracking-tight text-gray-700 hover:text-gray-500 cursor-pointer dark:text-white font-mono">
              AHMAD
            </h1>
          </div>
          <div className="pt-5 dark:text-white">
            <p>Made with ❤️ with React and Tailwindcss</p>
          </div>
        </div>
        <br />
      </footer>
      <hr />
      <div className="container mx-auto px-5 sticky bottom-0 bg-white bg-opacity-20 backdrop-blur-lg dark:bg-gray-900 dark:bg-opacity-20 dark:backdrop-blur-lg z-20">
        <hr className="dark:bg-white bg-black bg-blend-darken" />

        <div className="pt-5 pb-2 flex flex-row item-center justify-between ">
          <p className="font-medium text-lg dark:text-white">Let's connect</p>

          {List.map((list) => (
            <a href={list.url}>
              <img
                src={list.imageUrl}
                alt="Icons"
                className="flex flex-row w-6 h-6 bg-blend-color-burn transition ease-linear duration-300 hover:"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
