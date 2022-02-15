import React from "react";
import { useDispatch } from "react-redux";
import { removeBasket } from "./../../Redux/Action/action";
import {AiFillStar, AiOutlineShoppingCart} from "react-icons/ai"

const CheckoutProduct = ({ id, title, price, rating, image, hideButton }) => {
  let dispatch = useDispatch();
  let removeItem = () => {
    dispatch(removeBasket(id));
  };
  return (
    <div className="flex ">
      <div className="w-1/5 mt-6 rounded-md ml-20 shadow-md p-2 bg-white">
        <img src={image} alt="image"  />
      </div>
      <div className="ml-6">
        <p className="font-bold text-lg w-full">{title}</p>
        <p className="my-6 text-lg">
          <strong>Rs</strong>
          {price}
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p
                className="text-yellow-500 font-extrabold text-lg flex"
                key={index}
              >
                <AiFillStar/>
              </p>
            ))}
        </div>
        {!hideButton && (
          <button
            className="my-6 p-2 bg-yellow-600 text-white h-10 flex rounded-md w-36 items-center"
            onClick={removeItem}
          >
            <span >
              <AiOutlineShoppingCart className="h-6 w-6 "/>
            </span>
            <span className="ml-2">Remove item</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
