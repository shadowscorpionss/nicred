import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/persisted-state";
import { rootReducer } from "./reducers";

const persistedState = loadState();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState(store.getState());
});