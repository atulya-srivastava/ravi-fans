import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const AboutLink = () => {
  const location = useLocation();
  const activeStyle = ({ isActive }) => isActive && "text-[#FF1F25]";

  const [panelOpen, setPanelOpen] = React.useState(false);
  const openPanel = () => {
    setPanelOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const closePanel = () => {
    setPanelOpen(false);
    document.body.style.overflowY = "scroll";
  };

  //   React.useEffect(() => {
  //     document.body.style.overflowY = "hidden";
  //     return () => (document.body.style.overflowY = "scroll");
  //   }, []);

  return (
    <div>
      <button
        className={
          location.pathname === "/about" ||
          location.pathname === "/directors-message" ||
          location.pathname === "/gallery"
            ? "text-[#FF1F25]"
            : ""
        }
        onClick={openPanel}
      >
        About
      </button>
      {panelOpen && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000080]"
            onClick={closePanel}
          ></div>
          <div
            className={
              "absolute flex flex-col justify-center items-start top-[100%] left-[15%] border border-slate-400 rounded-md p-4 z-10 bg-black shadow-md backdrop-filter backdrop-blur-lg bg-opacity-10 text-white"
            }
          >
            <NavLink to={"/about"} className={activeStyle} onClick={closePanel}>
              {" "}
              About Ravi Fans
            </NavLink>
            <div className="w-[80%] h-[1px] bg-white ml-auto my-3"></div>
            <NavLink
              to={"/directors-message"}
              className={activeStyle}
              onClick={closePanel}
            >
              Director's Message
            </NavLink>
            <div className="w-[80%] h-[1px] bg-white ml-auto my-3"></div>
            <NavLink
              to={"/gallery"}
              className={activeStyle}
              onClick={closePanel}
            >
              Gallery
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutLink;
