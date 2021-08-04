import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { Platform } from "react-native";

const initialState = {
  categories: [],
  addedCategories: [],
};

export const showCategories = createAsyncThunk("SHOW_CATEGORIES", () => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  const ip = "192.168.200.22";
  return axios

    .get(`http://192.168.200.22:3001/api/category`)

    .then((res) => res.data)
    .catch((error) =>
      console.log("ACA ESTA EL ERROR DE CATEGORIES -----> ", error)
    );
});

export const addCategory = createAsyncThunk("ADD_CATEGORY", () => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  return axios
  .post(`http://192.168.200.22:3001/api/category`)
  .then((res) => res.data)
  .catch((error) =>
    console.log("ACA ESTA EL ERROR DE ADD_CATEGORIES -----> ", error)
  );
})

const categoriesReducer = createReducer(initialState, {
  [showCategories.fulfilled]: (state, action) => {
    state.categories = action.payload;
  },
  [addCategory.fulfilled]: (state, action) => {
    state.addedCategories = action.payload;
  },
});

export default categoriesReducer;
