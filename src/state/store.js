import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//-------------REDUCERS IMPORT---------------------
import categoriesReducer from "./categories";
import plansReducer from "./plan";
import userReducer from "./user";
import commentsReducer from "./comments";

//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
const store = configureStore({
  reducer: {
    plan: plansReducer,
    categories: categoriesReducer,
    user: userReducer,
    comments: commentsReducer,
  },
});

export default store;
