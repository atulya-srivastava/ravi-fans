import React from "react";

function DirectorsMessageCarousel(props) {
  return (
    <div className="flex flex-col items-center m-8 flex-wrap">
      <h1 className="text-5xl mx-8 font-bold">Director's Message</h1>
      <div className="flex my-8">
        <div className="w-1/2 h-[600px] -mr-32 flex justify-center items-center directors-div">
            <img
              src={props.img}
              alt=""
              className="w-2/3 h-4/5"
              style={{filter: "drop-shadow(0px 0px 80px #ffc2c2)"}}
            />
        </div>
        <div className="m-8 flex flex-col justify-around w-1/2">
          <div>
            <h1 className="text-4xl font-semibold">{props.name}</h1>
            <h1 className="text-lg font-medium text-[#6A6C78]">
              {props.position}
            </h1>
          </div>
          <p className="text-[#6A6C78] text-lg">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
export default DirectorsMessageCarousel;
