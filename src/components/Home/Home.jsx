import React from "react";
import MainCarousel from "./Carousel/MainCarousel";
import VideoSection from "./VideoSection";
import Categories from "./Categories/Categories";
import { Routes, Route } from "react-router-dom";
import CategoryOne from "./Categories/CategoryOne";
import CategoryTwo from "./Categories/CategoryTwo";
import CategoryThree from "./Categories/CategoryThree";
import CategoryFour from "./Categories/CategoryFour";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <VideoSection />
      <Categories />
    </>
  );
};

export default Home;
