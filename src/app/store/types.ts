import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { makeStore, rootReducer } from "./store";


// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

