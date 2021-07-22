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
  singlePlan: {},
  searchedPlans: []
};

export const showPlans = createAsyncThunk("SHOW_PLANS", () => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  return axios
    .get(`http://10.0.2.2:3001/api/plan`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR EN SHOW_PLANS -----> ", error));
});

export const showSinglePlan = createAsyncThunk("SHOW_SINGLE_PLAN", (param) => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  return axios
    .get(`http://10.0.2.2:3001/api/plan/${param}`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR EN SINGLE PLAN -----> ", error));
});

export const searchPlans = createAsyncThunk("SEARCH_PLANS", (namePlan) => {
  return axios
    .get(`http://10.0.2.2:3001/api/plan/search?name=${namePlan}`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR EN SEARCH PLANS-----> ", error));
});

const plansReducer = createReducer(initialState, {
  [showPlans.fulfilled]: (state, action) => {
    state.plans = action.payload;
  },
  [showSinglePlan.fulfilled]: (state, action) => {
    state.singlePlan = action.payload;
  },
  [searchPlans.fulfilled]: (state, action) => {
    state.searchedPlans = action.payload;
  },
});

export default plansReducer;
