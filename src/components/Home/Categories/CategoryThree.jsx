import React from "react";
import ProductCard from "./../../../utils/ProductCard";

const CategoryThree = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full my-5">
      <ProductCard img={"/ceiling-fan.png"} />
      <ProductCard img={"/ceiling-fan.png"} />
      <ProductCard img={"/ceiling-fan.png"} />
    </div>
  );
};

export default CategoryThree;
