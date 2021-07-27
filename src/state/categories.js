import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { Platform } from "react-native";

const initialState = {
  categories: [],
};

export const showCategories = createAsyncThunk("SHOW_CATEGORIES", () => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  return axios
    .get(`http://${os}/api/category`)
    .then((res) => res.data)
    .catch((error) =>
      console.log("ACA ESTA EL ERROR DE CATEGORIES -----> ", error)
    );
});

const categoriesReducer = createReducer([], {
  [showCategories.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
