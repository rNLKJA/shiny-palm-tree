import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {/* <li>
          <CartItem id={1} price={2500} name={"Macbook"} />
        </li> */}
        {cartItems.map((item) => (
          <li>
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
            ></CartItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
