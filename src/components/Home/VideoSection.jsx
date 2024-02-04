import React from "react";
import Button from "../../utils/Button";

const VideoSection = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col lg:flex-row justify-evenly items-center px-5 py-20 my-10">
      <div className="w-full lg:w-[50%] flex justify-center items-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MvEIKOSEcqo?si=4r1JKuonbLxACy30"
          title="Ravi fans"
          frameborder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   allowfullscreen
          className="rounded-2xl"
        ></iframe>
      </div>
      <div className="lg:w-[50%] flex flex-col items-center lg:items-start justify-center">
        <div>
          <h1 className="mt-5 lg:mt-0 text-2xl lg:text-5xl font-bold lg:max-w-[60%]">
            Crafting Superior Fans for Modern Living
          </h1>
        </div>
        <div className="my-8">
          <p className="lg:max-w-[60%] text-[#6A6C78]">
            Discover the art of innovation as we redefine cooling solutions.
            Elevate your surroundings with our cutting-edge fans, designed for
            efficiency, style, and unparalleled comfort. Join the future of
            airflow!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#FF1F25] px-6 py-3 text-white rounded-full">
            Learn More
          </button>
          <Button type={"up-right"} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
