import React from "react";
import Button from "../../utils/Button";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] w-full h-[276px] relative rounded-b-3xl">
      <div className="absolute bg-white rounded-full p-2 top-[-0.5rem] right-16 footer--btn">
        <Button type={"up"} />
      </div>
    </div>
  );
};

export default Footer;
