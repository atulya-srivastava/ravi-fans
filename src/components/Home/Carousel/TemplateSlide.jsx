// TemplateSlide.js

import React from "react";
// import "../../index.css";

const TemplateSlide = ({ imageUrl, title }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-3xl h-[30rem] sm:h-auto"
      />
    </div>
  );
};

export default TemplateSlide;
