import React from "react";
import RedirectButton from "./RedirectButton";

const Card = ({ img }) => {
  return (
    <div className="rounded-lg relative">
      <img src={img} alt={img + "image"} className="rounded-2xl" />

      <div className="absolute right-0 bottom-24 px-1 py-2 bg-white rounded-l-full special-btn">
        <RedirectButton />
      </div>
    </div>
  );
};

export default Card;
