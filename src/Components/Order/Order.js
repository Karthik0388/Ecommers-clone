import React from "react";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div>
      <h1>Order</h1>
      <p>{moment.unix(order.data.created).format("mm dd yyyy ,h:mm")}</p>
      <p>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => {
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.price}
          hideButton
        />;
      })}
      <CurrencyFormat
        renderText={value => (
          <>
                      <h3>order Total {value }</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
    </div>
  );
};

export default Order;
