import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

const initialState = {
  plans: [],
};

export const showPlans = createAsyncThunk("SHOW_PLANS", () => {
  return axios
    .get("http://10.0.2.2:3001/api/plan")
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR -----> ", error));
});

const plansReducer = createReducer(initialState, {
  [showPlans.fulfilled]: (state, action) => action.payload,
});

export default plansReducer;
