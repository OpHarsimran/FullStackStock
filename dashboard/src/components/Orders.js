import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ?        <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
          </div>:<div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price.</th>            
            <th>Mode.</th>            
          </tr>

          {orders.map((stock, index) => {
            

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>                
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
        </div>}
    </div>
  );
};

export default Orders;
