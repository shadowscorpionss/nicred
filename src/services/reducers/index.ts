import { combineReducers } from "@reduxjs/toolkit";
import { creditCardReducer } from "./credit-card";

export const rootReducer = combineReducers({
   creditCards: creditCardReducer,
});