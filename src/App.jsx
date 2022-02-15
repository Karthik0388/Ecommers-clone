import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar1 from "./Pages/Navbar1";
import Navbar2 from "./Pages/Navbar2";
import Register from "./Components/Slider/Register";
import Login from "./Components/Slider/Login";
import SingleProducts from "./Components/Singleproducts/SingleProducts";
import Checkout from "./Pages/Checkout/Checkout";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Pages/Orders/Orders";


let promise = loadStripe(
  "pk_test_51KCgw2SIkbQ5bAdExE0RxsxlvpY9gNokNGgdV0U0uGxfLV7INIjOSoOPpHAieIy9oftrHKfRqxcAMoqx4iWvB6Rc00fZfILWbb"
);
const App = () => {
  return (
    <Router>
      <section>
        <article>
          {/* <Navbar1 /> */}
          <Navbar2 />
          <ToastContainer
            toastStyle={{ backgroundColor: "#000", color: "#fff" }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<SingleProducts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </article>
      </section>
    </Router>
  );
};

export default App;
