import axios from "axios";

import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";

import { Platform } from "react-native";

const initialState = {
  userRegister: {},

};

export const createUser = createAsyncThunk("CREATE_USER", (user) => {
  const os = Platform.OS === "android" ? "10.0.2.2" : "localhost";
  console.log("esta llegando el user", user);
  return axios
    .post(`http://10.0.2.2:3001/api/user/register`, user)
    .then((res) => res.data)
    .catch((error) =>
      //en el caso de usuario ya creado, llega el error 409. Como hacer que esto llegue al front?
      console.log("ACA ESTA EL ERROR EN CREATE_USER -----> ", error)
    );
});



const userReducer = createReducer(initialState, {
  [createUser.fulfilled]: (state, action) => {
    state.userRegister = action.payload;
  },
});

export default userReducer;
