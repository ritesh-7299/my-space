import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./auth/authUser";

export const store = configureStore({
  reducer: {
    user: userAuth,
  },
});
