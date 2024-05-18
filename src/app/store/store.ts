import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../features/search/model/slices/counterSlice";

export const rootReducer = combineSlices(counterSlice);
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};