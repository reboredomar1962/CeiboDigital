import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { Platform } from "react-native";

const initialState = {
  plans: [],
};

export const showPlans = createAsyncThunk("SHOW_PLANS", () => {
  if (!Platform.OS) console.log("llego aca");
  // const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  // console.log(os);
  return axios
    .get(`http://localhost:3001/api/plan`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR -----> ", error));
});

export const searchPlans = createAsyncThunk("SEARCH_PLANS", () => {});

const plansReducer = createReducer(initialState, {
  [showPlans.fulfilled]: (state, action) => action.payload,
});

export default plansReducer;
