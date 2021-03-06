import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {showCart ? <CartItems /> : <Products />}
        <div className="total-price">
          <h3>
            Total: {"$"}
            {totalPrice}
          </h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
