import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//-------------REDUCERS IMPORT---------------------
import categoriesReducer from "./categories";
import plansReducer from "./plan";
import userReducer from "./user";

//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
const store = configureStore({
  reducer: {
    plan: plansReducer,
    categories: categoriesReducer,
    user: userReducer,
  },
});

export default store;
