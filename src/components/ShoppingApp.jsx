import React from "react";
import Auth from "../ShoppingApp/Auth";
import { useSelector } from "react-redux";
import Layout from "../ShoppingApp/Layout";

function ShoppingApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>{isLoggedIn ? <Layout /> : <Auth />}</React.Fragment>;
}

export default ShoppingApp;
