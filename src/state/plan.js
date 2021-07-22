import axios from "axios";

import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

import { Platform } from "react-native";

// const os = Platform.OS !== "android" ? "localhost" : "10.0.2.2";

const initialState = {
  plans: [],
};

export const showPlans = createAsyncThunk("SHOW_PLANS", () => {
  return axios
    .get(`http://10.0.2.2:3001/api/plan`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR -----> ", error));
});

export const showSinglePlan = createAsyncThunk("SHOW_SINGLE_PLAN", (param) => {
  //console.log("entro aca");
  return axios.get(`http://10.0.2.2:3001/api/plan/${param}`);
});

export const searchPlans = createAsyncThunk("SEARCH_PLANS", (namePlan) => {
  return axios
    .get(`http://10.0.2.2:3001/api/plan/search?name=${namePlan}`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR -----> ", error));
});

const plansReducer = createReducer(initialState, {
  [showPlans.fulfilled]: (state, action) => action.payload,
  [showSinglePlan.fulfilled]: (state, action) => action.payload,
  [searchPlans.fulfilled]: (state, action) => action.payload,
});

export default plansReducer;
