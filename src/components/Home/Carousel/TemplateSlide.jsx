// TemplateSlide.js

import React from "react";
// import "../../index.css";

const TemplateSlide = ({ imageUrl, title }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={imageUrl} alt={title} className="rounded-3xl" />
    </div>
  );
};

export default TemplateSlide;
