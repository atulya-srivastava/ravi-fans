// TemplateSlide.js

import React from "react";
import "../../index.css";

const TemplateSlide = ({ imageUrl, title }) => {
  return (
    <div className="template-slide">
      <img src={imageUrl} alt={title} className="template-image" />
    </div>
  );
};

export default TemplateSlide;
