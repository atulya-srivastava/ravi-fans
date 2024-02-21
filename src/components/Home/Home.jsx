import React from "react";
import MainCarousel from "./Carousel/MainCarousel";
import VideoSection from "./VideoSection";
import Categories from "./Categories/Categories";
import { Routes, Route } from "react-router-dom";
import CategoryOne from "./Categories/CategoryOne";
import CategoryTwo from "./Categories/CategoryTwo";
import CategoryThree from "./Categories/CategoryThree";
import CategoryFour from "./Categories/CategoryFour";
import ContactUs from "../ContactUs/ContactUs";

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
