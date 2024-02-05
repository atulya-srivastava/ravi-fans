import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TemplateSlide from "./TemplateSlide";

const MainCarousel = () => {
  const templates = [
    { imageUrl: "/images/poster1.png" },
    { imageUrl: "/images/poster2.png" },
    { imageUrl: "/images/poster3.png" },
    { imageUrl: "/images/poster4.png" },
    // Add more templates if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="my-10">
      <Slider {...settings} className="mx-auto">
        {templates.map((template, index) => (
          <TemplateSlide key={index} imageUrl={template.imageUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
