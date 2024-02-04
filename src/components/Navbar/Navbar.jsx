import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { FaInstagram as InstaIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import Logo from "/images/Logo.svg";

const Navbar = () => {
  const activeStyle = ({ isActive }) => isActive && "text-[#FF1F25]";
  const [open, setOpen] = React.useState(false);
  const handleMenuToggle = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="w-full bg-[#F5F5F5] hidden lg:flex justify-between items-center rounded-3xl p-3">
        <div>
          <img src={Logo} alt="Ravi fans logo" />
        </div>

        <div className="flex justify-evenly items-center bg-white rounded-full px-1 py-3 w-[50%] text-[#6A6C78]">
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

      <div className="lg:hidden flex justify-between items-center w-full bg-[#F5F5F5] rounded-3xl p-3">
        <div>
          <img src={Logo} alt="Ravi fans logo" className="w-[40%]" />
        </div>
        <button onClick={handleMenuToggle}>open</button>
      </div>
      {open && (
        <div className="bg-[#F5F5F5] rounded-3xl flex flex-col justify-center items-center p-3 absolute z-[10] w-[80%] left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col justify-evenly items-center bg-white rounded-3xl px-1 py-3 w-[90%] text-[#6A6C78]">
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

          <div className="flex justify-evenly items-center p-4 bg-white rounded-full mt-4 text-[#6A6C78]">
            <FacebookIcon size={"1.5em"} />
            <InstaIcon size={"1.5em"} className="mx-4" />
            <YoutubeIcon size={"1.5em"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
