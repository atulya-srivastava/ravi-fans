import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../../../utils/Button";

const Categories = () => {
  const activeStyle = ({ isActive }) =>
    isActive
      ? "px-3 lg:px-6 py-2 rounded-full bg-[#FF1F251A] text-[#FF1F25] text-xs lg:text-base text-center"
      : "px-3 lg:px-6 py-2 rounded-full text-xs lg:text-base text-center";

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="w-full flex justify-center items-center">
        <h1 className="max-w-[48rem] text-3xl lg:text-5xl text-center font-bold">
          Choose The Categories That You Want
        </h1>
      </div>

      <div className="flex justify-between items-center px-3 py-2 rounded-full bg-[#F5F5F5] mt-5 w-[95%] lg:w-auto">
        <NavLink to={"/"} className={activeStyle}>
          All Products
        </NavLink>
        <NavLink to={"category-2"} className={activeStyle}>
          All Products
        </NavLink>
        <NavLink to={"category-3"} className={activeStyle}>
          All Products
        </NavLink>
        <NavLink to={"category-4"} className={activeStyle}>
          All Products
        </NavLink>
      </div>

      <Outlet />

      <div className="flex justify-center items-center">
        <button className="bg-[#FF1F25] px-6 py-3 text-white rounded-full">
          See all Category
        </button>
        <Button type={"up-right"} />
      </div>
    </div>
  );
};

export default Categories;
