import React from 'react'
import { useEffect, useState } from 'react'
import { db } from "../../firebase";
import Order from '../../Components/Order/Order';
import { useSelector } from 'react-redux';

const Orders = () => {
    let { user } = useSelector(state => state.reducer);
    let [order, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) =>
                    setOrder(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data:doc.data(),
                }))
            ))
        } else {
            setOrder([]);
     }
    },[user])
    return (
      <div>
        <h1>your orders</h1>
        <div>
          {order &&
            order.map((order, index) => <Order order={order} key={index} />)}
        </div>
      </div>
    );
}

export default Orders
