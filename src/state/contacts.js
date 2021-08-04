import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncStorage } from "react-native";

const ip = "192.168.0.3";

const os = Platform.OS !== "android" ? "localhost" : "10.0.2.2";

const initialState = { contactAdded: {} };

export const addContact = createAsyncThunk("ADD_CONTACT", (id) => {
  console.log("llego al addContact, este es el friendId", id);
  return AsyncStorage.getItem("token")
    .then((token) => {
      return axios.post(
        `http://${os}:3001/api/user/friend`,
        { id },
        {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
        }
      );
    })
    .then((res) => res.data)
    .catch((err) => console.log("este es el error desde contacts --->", err));
});

const contactsReducer = createReducer(initialState, {
  [addContact.fulfilled]: (state, action) => {
    state.contactAdded = action.payload;
  },
});

export default contactsReducer;
