import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import plansReducer from "./plan";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      plan: plansReducer,
    },
  });
  
  export default store;
