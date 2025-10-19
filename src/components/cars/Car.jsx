import React from "react";

const Car = ({ data, handleAddToCart }) => {
  return (
    <div>
      <div className="w-full h-60">
        <img className="w-full h-full" src={data.img} alt="" />
      </div>
      <div>
        <h3>{data?.name}</h3>
        <h3>{data?.brand}</h3>
        <p>{data.price_bdt}</p>
        <button
          onClick={() => {
            handleAddToCart(data);
          }}
          className="px-3 py-1 bg-blue-400  rounded text-white"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Car;
