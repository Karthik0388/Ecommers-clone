import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImCart } from "react-icons/im";

const Navbar2 = () => {
  let basket = useSelector(state => state.reducer.basket);
  return (
    <section className="w-full h-20 bg-zinc-900 fixed z-50 ">
      <article className="flex w-4/5 mx-auto justify-between">
        <Link to="/">
          <div className="font-bold text-4xl p-3 text-white mr-6 -mt-12">
            <img src="Logo.png" alt="logo" className="text-yellow-400" />
          </div>
        </Link>
        <div className="w-4/5 p-4 position:relative ">
          <input
            type="search"
            placeholder="Search your products"
            className="w-full h-10 p-3 rounded-md"
          />
          <BsSearch className="text-2xl text-black position:absolute -mt-8 ml-[380px]" />
        </div>
        <div>
          <ul className="flex p-5 items-center mt-2">
            <li className="mx-2 text-white flex items-center ">
              <FaUserAlt className="text-3xl mx-4 -m-2 fill-yellow-400" />
              <Link to="/register">SignUp</Link>
            </li>
            <li className="mx-2 text-white flex items-center">
              <AiOutlineLogin className="text-3xl mx-4 -m-2 fill-yellow-400" />
              <Link to="/login"> LogIn</Link>
            </li>
            <li className="mx-2 text-white flex items-center ">
              <Link to="/checkout">
                <ImCart className="font-bold text-3xl mx-4 -m-2  fill-yellow-400" />
              </Link>
              <sup className=" text-sm">{basket && basket.length}</sup>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar2;
