import React from "react";
import Button from "./Button";

const Card = ({ img }) => {
  return (
    <div className="rounded-xl relative w-[80%] lg:w-auto my-4">
      <img src={img} alt={img + "image"} className="rounded-2xl" />

      <div className="absolute right-0 bottom-24 px-1 py-2 bg-white rounded-l-full special-btn">
        <Button type={"up-right"} />
      </div>
    </div>
  );
};

export default Card;
