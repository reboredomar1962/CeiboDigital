import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//-------------REDUCERS IMPORT---------------------
import categoriesReducer from "./categories";
import plansReducer from "./plan";

//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
const store = configureStore({
  reducer: {
    plan: plansReducer,
    categories: categoriesReducer,
  },
});

export default store;
