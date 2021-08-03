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
  searchedPlans: [],
};
const ip ="10.0.2.2"
const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";

export const showPlans = createAsyncThunk("SHOW_PLANS", () => {
  return axios
    .get(`http://${os}:3001/api/plan`)
    .then((res) => res.data)
    .catch((error) =>
      console.log("ACA ESTA EL ERROR EN SHOW_PLANS -----> ", error)
    );
});

export const showSinglePlan = createAsyncThunk("SHOW_SINGLE_PLAN", (param) => {
  return axios
    .get(`http://${os}:3001/api/plan/${param}`)
    .then((res) => res.data)
    .catch((error) =>
      console.log("ACA ESTA EL ERROR EN SINGLE PLAN -----> ", error)
    );
});

export const searchPlans = createAsyncThunk("SEARCH_PLANS", (namePlan) => {
  console.log("este es el namePLan", namePlan);

  if (namePlan.fromModal) {
    return axios
      .post(`http://${os}:3001/api/plan/search/multipleFilter`, namePlan)
      .then((res) => {
        return res.data;
      })
      .catch((error) =>
        console.log("ACA ESTA EL ERROR EN SEARCH PLANS MODALS-----> ", error)
      );
  } else if (namePlan.query !== "" && namePlan.fromSearch) {
    return axios
      .get(`http://${os}:3001/api/plan/search?name=${namePlan.query}`)
      .then((res) => {
        console.log("dentro del segundo, length", res.data.length);
        return res.data;
      })
      .catch((error) =>
        console.log("ACA ESTA EL ERROR EN SEARCH PLANS SEARCH-----> ", error)
      );
  } else if (namePlan.type) {
    return axios
      .get(`http://${os}:3001/api/plan/category/${namePlan.type}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) =>
        console.log("ACA ESTA EL ERROR EN SEARCH PLANS CATEGORY-----> ", error)
      );
  } else return [];
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
