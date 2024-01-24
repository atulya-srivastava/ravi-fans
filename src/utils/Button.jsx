import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const Button = ({ type }) => {
  const arrow = () => {
    switch (type) {
      case "up":
        return <FiArrowUp size={"2em"} color="white" />;
      case "up-right":
        return <FiArrowUpRight size={"2em"} color="white" />;
      default:
        return "😑";
    }
  };
  return (
    <button className="bg-[#FF1F25] p-3 rounded-full relative z-10">
      {arrow()}
    </button>
  );
};

export default Button;
