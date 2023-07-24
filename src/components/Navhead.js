import React from "react";
import "../App.css";
import Toggle from "../components/toggle";

function Navhead() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click)
  return (
    <nav className="relative overflow-hidden">
      <div className="fixed  top-0 left-0 right-0  z-20 container mx-auto flex px-5 justify-between item-center py-5  bg-white bg-opacity-20 backdrop-blur-lg dark:bg-darkGray dark:bg-opacity-20 dark:backdrop-blur-lg ">
        <div className="logo">
          <h1 className="font-semibold text-3xl tracking-tight text-gray-700  hover:text-gray-500 cursor-pointer dark:text-white font-inter">
            AHMAD
          </h1>
        </div>

        <Toggle className="pt-5" />
      </div>
    </nav>
  );
}

export default Navhead;
