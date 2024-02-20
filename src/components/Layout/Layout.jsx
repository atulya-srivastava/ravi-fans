import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="mt-8 px-8">
        <Navbar />
      </div>
      <Outlet />
      <div className="mt-auto -z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
