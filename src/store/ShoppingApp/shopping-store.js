import { configureStore } from "@reduxjs/toolkit";
import auth_slice from "./auth-slice";

const shopping_app_store = configureStore({
  reducer: {
    auth: auth_slice.reducer,
  },
});

export default shopping_app_store;
