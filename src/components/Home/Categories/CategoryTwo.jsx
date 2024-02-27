import React from "react";
import ProductCard from "./../../../utils/ProductCard";

const CategoryTwo = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-2 lg:gap-10 place-items-center">
      <ProductCard img={"/ceiling-fan.png"} />
      <ProductCard img={"/ceiling-fan.png"} />
      <ProductCard img={"/ceiling-fan.png"} />
    </div>
  );
};

export default CategoryTwo;
