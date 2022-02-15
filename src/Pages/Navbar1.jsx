import React, { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
const Navbar1 = () => {
  return (
    <Fragment>
      <section
        id="navTop"
        className="w-full h-10 bg-zinc-800 "
      >
        <article className="flex w-4/5 justify-between mx-auto">
          <div className="left text-gray-400 p-2">
            Free shipping on domestic orders over $150
          </div>
          <div className="right">
            <ul className="flex text-gray-400 p-2  ">
              <li className="mx-4">Language</li>
              <li className="mx-4">
                <span className="mx-1">$</span>Currency
              </li>
              <li className="mx-4">Customer Service: 000-000-0000</li>
            </ul>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Navbar1;
