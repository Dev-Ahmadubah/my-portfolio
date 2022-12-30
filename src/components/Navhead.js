import React from "react";
import "../App.css";
import Toggle from "../components/toggle";

function Navhead() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click)
  return (
    <div className="container mx-auto flex px-5 justify-between item-center pt-5">
      <div className="logo">
        <h1 className="font-semibold text-3xl tracking-tight text-gray-700  hover:text-gray-500 cursor-pointer dark:text-white font-inter">
          AHMAD
        </h1>
      </div>

      <Toggle className="pt-5" />
    </div>
  );
}

export default Navhead;
