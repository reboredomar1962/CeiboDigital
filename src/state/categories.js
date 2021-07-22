import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { Platform } from "react-native";

const initialState = {
    categories: [],
}

export const showCategories = createAsyncThunk('SHOW_CATEGORIES', ()=>{
    const os = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'
    return axios.get(`http://${os}:3001/api/category`)
    .then(res => res.data)
    .catch(error => console.log('ACA ESTA EL ERROR DE CATEGORIES -----> ',error))  
})

export const showCategories = createAsyncThunk("SHOW_CATEGORIES", () => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  return axios
    .get(`http://10.0.2.2:3001/api/category`)
    .then((res) => res.data)
    .catch((error) => console.log("ACA ESTA EL ERROR -----> ", error));
});

<<<<<<< HEAD
const categoriesReducer = createReducer(initialState, {
  [showCategories.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
=======
const categoriesReducer = createReducer([], {
    [showCategories.fulfilled] : (state, action) => action.payload,
})
  
export default categoriesReducer;
>>>>>>> ffc66c64dc1acd4225931e741cec8ef45e09c439
