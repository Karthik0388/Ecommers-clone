import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./../../Components/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../BasketTotal";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../axios";
import { SetcartEmpty } from "./../../Redux/Action/action";
const Payment = () => {
  let dispatch = useDispatch();
  let { basket, user } = useSelector(state => state.reducer);
  let navigate = useNavigate();
  let [succeed, setSucceed] = useState(false);
  let [processing, setProcessing] = useState("");
  let [error, setError] = useState(null);
  let [disabled, setSDisabled] = useState(true);
  let [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    let getClientSecret = async () => {
      let response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

 let stripe = useStripe();
 let elements = useElements();
  let handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);
    let payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user && user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceed(true);
        setError(null);
        setProcessing(false);
        dispatch(SetcartEmpty());
        navigate("/orders");
      });
  };

  let handleChange = e => {
    setSDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div >
      <div>
        <h1>Checkout{<Link to="/checkout">{basket.length}items</Link>}</h1>
        <div className="bored">
          <div className="flex">
            <h3 className="font-bold text-lg">Delivery Address</h3>

            <div className="ml-6 text-xl">
              <p>{user && user.email}</p>
              <p>no-311,NorthStreet, marungur(po),panruti(tk) </p>
              <p>TamilNadu</p>
            </div>
          </div>
          <div>
            <div>
              <h3>Review items and Delivery</h3>
            </div>
            <div className="ml-40">
              {basket &&
                basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
          </div>
          <div>
            <h3>Payment Method</h3>

            <div className="block">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div>
                  <CurrencyFormat
                    renderText={value => (
                      <>
                        <h3>Order Total:{value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs"}
                  />
                </div>
                <button
                  className="bg-zinc-800 w-28 h-12 rounded-md flex p-2 m-2 font-bold text-lg ml-52 text-white"
                  disabled={processing || disabled || succeed}
                >
                  <span>{processing ? <p>Processing</p> : "Bye Now"}</span>
                </button>
              </form>
              {error && <div>{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
