import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="xl:mt-8 xl:px-8">
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
