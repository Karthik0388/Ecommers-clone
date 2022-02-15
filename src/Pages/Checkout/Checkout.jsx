import React from "react";
import { useSelector } from "react-redux";
import SubTotal from "../../Components/Subtotal/SubTotal";
import CheckoutProduct from "./../../Components/CheckoutProduct/CheckoutProduct";

const Checkout = () => {
  let { basket, user } = useSelector(state => state.reducer);
  return (
    <>
      <div className="flex">
        <div className="left mt-10">
          <h3>Hello{user?.email}</h3>
          <h2 className="text-black capitalize font-bold font-xl">
            {basket.length === 0 ? "your cart is empty" : "your cart"}
          </h2>
          {basket &&
            basket.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className="w-1/5 h-32 ml-auto mt-10 shadow-2xl">
        <SubTotal />
      </div>
    </>
  );
};

export default Checkout;
