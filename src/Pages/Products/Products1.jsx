import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddBasket } from "../../Redux/Action/action";
import { toast } from "react-toastify";
const Products1 = ({
  id,
  title,
  price,
  rating,
  specification,
  detail,
  image,
}) => {
  let dispatch = useDispatch();
  let basket = useSelector(state => state.reducer.basket);
  let onAddItem = () => {
    let item = {
      id,
      title,
      price,
      rating,
      specification,
      detail,
      image,
    };
    dispatch(AddBasket(item));
toast.success(`Successfully added  ${basket && basket.length} to the cart`);
    
  };

  return (
    <div className="bg-white mt-3 rounded-md ">
      <div>
        <div className="flex-wrap">
          <Link to={`/products/${id}`}>
            <p className=" text-lg w-60 font-bold">{title}</p>
          </Link>
          <div className="flex">
            <p>
              <strong>Rs</strong>
              <strong>{price}</strong>
            </p>
            <div className="flex">
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p
                    className="text-yellow-500 font-extrabold text-lg flex"
                    key={index}
                  >
                    🤩
                  </p>
                ))}
            </div>
          </div>
          <div className="w-60 h-60">
            <img className="w-60 h-60" src={image} alt="" />
          </div>
        </div>
        <div className="mt-5">
          <button
            className="w-full h-10 rounded-md text-white bg-yellow-600"
            onClick={onAddItem}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products1;
