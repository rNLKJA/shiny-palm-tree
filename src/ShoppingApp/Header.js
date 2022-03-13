import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { authActions } from "../store/ShoppingApp/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <Button
              color="secondary"
              variant="outlined"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
