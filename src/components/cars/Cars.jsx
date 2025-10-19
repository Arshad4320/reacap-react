import React, { use, useEffect, useState } from "react";
import Car from "./Car";
import {
  addItemLocalStorage,
  getCartFromLocalStorage,
  removeFromLocalStorage,
} from "../localStorage";

const Cars = ({ promiseData }) => {
  const data = use(promiseData);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (data) => {
    addItemLocalStorage(data.id);
    setCart([...cart, data]);
  };
  const handleRemoveFromLocalStorage = (id) => {
    removeFromLocalStorage(id);
    const data = cart.filter((item) => item.id !== id);
    setCart(data);
  };
  useEffect(() => {
    const storedData = [];

    const storedCar = getCartFromLocalStorage();
    for (const id of storedCar) {
      const filterData = data?.find((item) => item.id !== id);
      storedData.push(filterData);
    }
    setCart(storedData);
  }, [data]);
  return (
    <>
      <div className="grid grid-cols-8 gap-2 mb-2">
        {cart.map((item) => (
          <>
            {" "}
            <img className="w-full h-full" src={item.img} alt="" />
            <button
              onClick={() => {
                handleRemoveFromLocalStorage(item.id);
              }}
            >
              X
            </button>
          </>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((data) => (
          <Car handleAddToCart={handleAddToCart} key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Cars;
