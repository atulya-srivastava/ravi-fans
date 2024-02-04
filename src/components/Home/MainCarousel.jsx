// Carousel.js

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TemplateSlide from "./TemplateSlide";
import "../../index.css";

const MainCarousel = () => {
  const templates = [
    { id: 1, imageUrl: "/images/poster1.png" },
    { id: 2, imageUrl: "/images/poster2.png" },
    { id: 3, imageUrl: "/images/poster3.png" },
    { id: 4, imageUrl: "/images/poster4.png" },
    // Add more templates if needed
  ];

  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplateIndex(
        (prevIndex) => (prevIndex + 1) % templates.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [templates]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentTemplateIndex,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {templates.map((template) => (
          <TemplateSlide key={template.id} imageUrl={template.imageUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
