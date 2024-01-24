import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { FaInstagram as InstaIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import Logo from "/images/Logo.svg";

const Navbar = () => {
  const activeStyle = ({ isActive }) => isActive && "text-[#FF1F25]";
  return (
    <div className="w-full bg-[#F5F5F5] flex justify-between items-center rounded-3xl p-4">
      <div>
        <img src={Logo} alt="Ravi fans logo" />
      </div>

      <div className="flex justify-evenly items-center bg-white rounded-full px-2 py-4 w-[50%] text-[#6A6C78]">
        <NavLink to={"/"} className={activeStyle}>
          Home
        </NavLink>

        <NavLink to={"/about"} className={activeStyle}>
          About
        </NavLink>

        <NavLink to={"/manufacturing"} className={activeStyle}>
          Manufacturing
        </NavLink>

        <NavLink to={"/products"} className={activeStyle}>
          Products
        </NavLink>

        <NavLink to={"/dealer"} className={activeStyle}>
          Dealers
        </NavLink>

        <NavLink to={"/brochure"} className={activeStyle}>
          Brochure
        </NavLink>

        <NavLink to={"/contact-us"} className={activeStyle}>
          Contact Us
        </NavLink>
      </div>

      <div className="flex justify-evenly items-center p-4 bg-white rounded-full w-[10%] text-[#6A6C78]">
        <FacebookIcon size={"1.5em"} />
        <InstaIcon size={"1.5em"} />
        <YoutubeIcon size={"1.5em"} />
      </div>
    </div>
  );
};

export default Navbar;
