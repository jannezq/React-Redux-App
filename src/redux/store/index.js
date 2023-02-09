import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
// store is the fully configured Redux Store!
