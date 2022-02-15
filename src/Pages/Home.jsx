import React, { Fragment } from "react";
import Slider from "../Components/Slider/Slider";
import { headerItems, products } from "../productsData";
import Products1 from "./Products/Products1";
import BacktoTop from './BackToTop/BacktoTop';
const Home = () => {
  return (
    <Fragment>
      <div>
        <div className="w-full h-14 bg-zinc-700 item-container mt-[80px] fixed z-50">
          <div className="flex w-4/5 mx-auto justify-between ">
            {headerItems &&
              headerItems.map((item, index) => (
                <p className="text-white mt-4">{item}</p>
              ))}
          </div>
        </div>
        <div>
          <div>
            <Slider />
            <div className="flex justify-between flex-wrap border-8">
              {products.slice(0, 5).map(item => (
                <Products1
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                /> 
              ))}
            </div>
         
            
            <div>
              <BacktoTop />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
