import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncStorage } from "react-native";

const ip = "192.168.0.3";

const os = Platform.OS !== "android" ? "localhost" : "10.0.2.2";

const initialState = { allFriends: [], contactAdded: [], contactsOnRedux: [] };

export const getFriend = createAsyncThunk("GET_FRIEND", () => {
  return AsyncStorage.getItem("token")
    .then((token) => {
      return axios.get(`http://${os}:3001/api/user/getFriend`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      });
    })
    .then((res) => {
      return res.data.contacts;
    })
    .catch((err) => console.log("este es el error desde contacts --->", err));
});

export const addContact = createAsyncThunk("ADD_CONTACT", (id) => {
  console.log("llego al addContact");
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
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("este es el error desde contacts --->", err));
});

export const addReduxContact = createAction("ADD_REDUX_CONTACTS");
export const removeReduxContact = createAction("REMOVE_REDUX_CONTACTS");
export const eraseStateContacts = createAction("ERASE_STATE_CONTACTS");

const contactsReducer = createReducer(initialState, {
  [getFriend.fulfilled]: (state, action) => {
    state.allFriends = action.payload;
  },
  [addContact.fulfilled]: (state, action) => {
    console.log("este es el action.payload apretando el mas", action.payload);

    state.contactAdded = action.payload;
    // state.allFriends = [...state.allFriends, action.payload];
    // console.log(
    //   "este es el state.allFriends apretando el mas",
    //   state.allFriends
    // );
  },
  [addReduxContact]: (state, action) => {
    console.log("este es el contacts que llega al estado", action.payload);
    if (typeof action.payload === "string") {
      const auxState = [...state.contactsOnRedux, action.payload];
      state.contactsOnRedux = [...new Set(auxState)];
    } else {
      const auxState = [...state.contactsOnRedux, ...action.payload];
      state.contactsOnRedux = [...new Set(auxState)];
    }
  },
  [removeReduxContact]: (state, action) => {
    // Aca siempre va a llegar solo un string
    console.log(
      "este es el contacts que llega al estado a ser removido",
      action.payload
    );
    const filteredContacts = state.contactsOnRedux.filter(
      (contactId) => contactId !== action.payload
    );
    state.contactsOnRedux = filteredContacts;
  },
  [eraseStateContacts]: (state, action) => {
    state.contactsOnRedux = [];
  },
});

export default contactsReducer;
