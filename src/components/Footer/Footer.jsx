import React from "react";
import Button from "../../utils/Button";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF as FbIcon } from "react-icons/fa";
import { FaInstagram as InstaIcon } from "react-icons/fa";
import { FaYoutube as YtIcon } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F5F5F5] w-full h-[276px] relative rounded-b-3xl p-10">
      <div className="absolute bg-white rounded-full p-2 top-[-0.5rem] right-16 footer--btn">
        <Button type={"up"} handleClick={scrollToTop} />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center text-xs lg:text-base">
        <div>
          <img
            src="/images/Logo.svg"
            alt="company logo"
            className="w-[50%] lg:w-auto mx-auto lg:mx-0"
          />
        </div>
        <div className="mx-auto flex justify-evenly items-center w-full lg:w-[60%] text-[#6A6C78] mt-2">
          <NavLink>About Us</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>About Us</NavLink>
        </div>
      </div>

      <div className="w-[95%] h-[2px] rounded-full bg-[#6A6C7833] mt-10 lg:mt-16 mx-auto"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-5">
        <p className="font-[500] text-[#6A6C78] text-xs lg:text-base">{`© Copyright Ravi Fans pvt Ltd. ${getCurrentYear()}`}</p>
        <div className="flex justify-center items-center my-3 lg:mt-0">
          <Link className="bg-white p-2 lg:p-4 rounded-full text-xs lg:text-lg text-[#FF1F25]">
            <FbIcon />
          </Link>
          <Link className="bg-white p-2 lg:p-4 rounded-full text-xs lg:text-lg text-[#FF1F25] mx-5">
            <InstaIcon />
          </Link>
          <Link className="bg-white p-2 lg:p-4 rounded-full text-xs lg:text-lg text-[#FF1F25]">
            <YtIcon />
          </Link>
        </div>
        <div className="flex justify-center items-center font-[500] text-xs lg:text-base">
          <p>Terms & Conditions</p>
          <div className="w-[2px] h-6 mx-2 bg-[#6A6C7833]"></div>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
