import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//-------------REDUCERS IMPORT---------------------
import categoriesReducer from "./categories";
import plansReducer from "./plan";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      plan: plansReducer,
      categories: categoriesReducer,
    },
  });
  
  export default store;
