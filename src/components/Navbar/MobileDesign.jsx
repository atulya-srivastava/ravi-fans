import React from "react";
import Logo from "/images/Logo.svg";
import { NavLink } from "react-router-dom";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { FaInstagram as InstaIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import { RxHamburgerMenu as BurgerMenu } from "react-icons/rx";
import { IoMdClose as CloseMenu } from "react-icons/io";

const MobileDesign = ({ activeStyle }) => {
  const [open, setOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    disableBgScroll();
  }, [open]);

  const disableBgScroll = () => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <>
      <div className="xl:hidden flex justify-between items-center w-full bg-[#F5F5F5] p-5 relative">
        <div>
          <img src={Logo} alt="Ravi fans logo" className="w-[60%]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-evenly items-center p-3 bg-white rounded-full text-[#6A6C78] mr-2">
            <FacebookIcon size={"1.5em"} />
            <InstaIcon size={"1.5em"} className="mx-2" />
            <YoutubeIcon size={"1.5em"} />
          </div>
          <button onClick={handleMenuToggle}>
            {!open ? (
              <BurgerMenu size={"1.5em"} />
            ) : (
              <CloseMenu size={"1.5em"} />
            )}
          </button>
        </div>
      </div>
      {open && (
        <>
          <div
            className="fixed top-20 sm:top-24 right-0 left-0 bottom-0 bg-[#00000080]"
            onClick={handleMenuToggle}
          ></div>
          <div className="bg-[#F5F5F5] border flex flex-col justify-center items-center p-3 absolute z-[10] w-full top-[80px] left-0">
            <div className="flex flex-col justify-evenly items-center bg-white rounded-3xl w-[90%] text-[#6A6C78]">
              <div className="w-full border rounded-t-3xl text-center py-3">
                <NavLink
                  to={"/"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  Home
                </NavLink>
              </div>

              <div className="w-full border text-center py-3">
                <NavLink
                  to={"/about"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  About
                </NavLink>
              </div>
              <div className="w-full border text-center py-3">
                <NavLink
                  to={"/manufacturing"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  Manufacturing
                </NavLink>
              </div>
              <div className="w-full border text-center py-3">
                <NavLink
                  to={"/products"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  Products
                </NavLink>
              </div>
              <div className="w-full border text-center py-3">
                <NavLink
                  to={"/dealer"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  Dealers
                </NavLink>
              </div>
              <div className="w-full border text-center py-3">
                <NavLink
                  to={"/brochure"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  Brochure
                </NavLink>
              </div>
              <div className="w-full border rounded-b-3xl text-center py-3">
                <NavLink
                  to={"/contact-us"}
                  className={activeStyle}
                  onClick={handleMenuToggle}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileDesign;
