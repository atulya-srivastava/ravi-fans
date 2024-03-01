import React from "react";

function DirectorsMessageCarousel(props) {
  return (
    <div className="flex flex-col items-center m-8 flex-wrap">
      <h1 className="text-3xl sm:text-5xl font-bold">Director's Message</h1>
      <div className="grid sm:grid-cols-2 sm:gap-4 mx-auto mt-8">
        <div className="sm:h-[600px] flex justify-center items-center directors-div">
          <img
            src={props.img}
            alt=""
            className="w-2/3 my-10 sm:w-2/3 sm:h-4/5"
            style={{ filter: "drop-shadow(0px 0px 80px #ffc2c2)" }}
          />
        </div>
        <div className="sm:h-[600px] flex flex-col justify-around items-start sm:py-20">
          <div>
            <h1 className="text-2xl font-semibold mt-10 sm:mt-0">
              {props.name}
            </h1>
            <h1 className="text-lg font-medium text-[#6A6C78] mb-10">
              {props.position}
            </h1>
          </div>
          <p className="text-[#6A6C78] text-lg mb-auto">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
export default DirectorsMessageCarousel;
