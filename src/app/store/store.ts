import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/src/features/search";

export const rootReducer = combineSlices(counterSlice);
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};