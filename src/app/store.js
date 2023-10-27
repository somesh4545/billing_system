import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./customer.slice";

export default configureStore({
  reducer: {
    customers: customerSlice
  },
});
