/* eslint-disable array-callback-return */
import React from "react";
 import Github from "./images/Github.png";
 import Twitter from "./images/Twitter.png";
 import Dribble from "./images/Dribble.png";
 import Linkedn from "./images/Linkedn.png";


const List = [
  {
    imageUrl: Github,
    
  },
  {
    imageUrl: Twitter,
  },
  {
    imageUrl: Dribble,
  },
  {
    imageUrl: Linkedn,
  },
];

function Footer() {
  return (
<>
<footer className=" mt-20 py-10 bg-white dark:bg-gray-900">
      <div className="flex-row sm:flex justify-between mt-10 mr-10 ml-10 flex-wrap  ">
        <div>
          <h1 className="font-semibold text-4xl tracking-tight text-gray-700 hover:text-gray-500 cursor-pointer dark:text-white">
            Ahmad
          </h1>
        </div>
        <div className="pt-5 dark:text-white">
          <p>Made with ❤️ with React and Tailwindcss</p>
        </div>
        
      </div>
      <br />
    
    </footer><hr/>
    <div className=" sticky bottom-0 bg-white dark:bg-gray-900 ">
    <hr className="dark:bg-white bg-black bg-blend-darken"/>
      
        <div className=" pt-5 pb-2 flex  justify-center  ">
        
      
      {List.map((list) => (
        <img src={list.imageUrl} alt="Icons" className="w-5 h-5 mr-5 bg-blend-color-burn transition ease-linear duration-300 hover:-translate-y-4"/>
        
      ))}
       
    </div>
    </div>
</>
  );
}

export default Footer;
