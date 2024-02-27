import React from "react";
import MainCarousel from "./Carousel/MainCarousel";
import VideoSection from "./VideoSection";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <VideoSection />
      <Categories />
      <ContactUs />
    </>
  );
};

export default Home;
