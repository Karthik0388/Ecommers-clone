import React from "react";
import { Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import {HiOutlineShoppingBag} from "react-icons/hi"
const Navbar3 = () => {
  return (
    <section className="w-full h-14 bg-zinc-700 fixed z-50">
      <article className="flex w-4/5 mx-auto justify-between">
        <div>
          <ul className="flex p-4 text-white">
            <li className="mx-2 text-l font-bold">
              <Link to="/">HOME</Link>
            </li>
            <li className="mx-2 text-l font-bold">
              <Link to="/">ELECTRONICS</Link>
            </li>
            <li className="mx-2 text-l font-bold uppercase">
              <Link to="/">HOME SENSOR</Link>
            </li>
            <li className="mx-2 text-l font-bold uppercase">
              <Link to="/">Laptop </Link>
            </li>
            <li className="mx-2 text-l font-bold uppercase">
              <Link to="/">Speakers</Link>
            </li>
            <li className="mx-2 text-l font-bold uppercase">
              <Link to="/">Drones</Link>
            </li>
            <li className="mx-2 text-l font-bold uppercase">
              <Link to="/">Head Phone</Link>
            </li>
            <li className="mx-2 text-l font-bold uppercase">
              <Link to="/">More</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex p-3 text-white">
            <li className="text-3xl mx-4">
              <BsSuitHeart />
            </li>
            <li className="text-3xl mx-4">
              <FaUserAlt />
            </li>
            <li className="text-3xl mx-4">
              <HiOutlineShoppingBag />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar3;
