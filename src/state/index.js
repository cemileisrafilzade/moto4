import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";

const store = configureStore({
  reducer: appSlice,
});

export default store;
