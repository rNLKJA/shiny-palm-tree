import { configureStore } from "@reduxjs/toolkit";
import auth_slice from "./auth-slice";
import cart_slice from "./cart-slice";

const shopping_app_store = configureStore({
  reducer: {
    auth: auth_slice.reducer,
    cart: cart_slice.reducer,
  },
});

export default shopping_app_store;
