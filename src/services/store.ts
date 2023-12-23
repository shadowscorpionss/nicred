import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../utils/persisted-state";
import { rootReducer } from "./reducers";

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});