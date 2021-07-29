import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "react-native";

const initialState = {
  comments: {},
};

export const createComment = createAsyncThunk("CREATE_COMMENT", (commentObj) => {
  const {planId} = commentObj
  return AsyncStorage.getItem("token")
    .then((token) => {
      return axios.post(`http://10.0.2.2:3001/api/plan/${planId}/comments`, commentObj, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      });
    })
    .then((res) => res.data)
    .catch((err) => console.log("este es el error desde comments --->", err));
});

const commentsReducer = createReducer(initialState, {
  [createComment.fulfilled]: (state, action) => {
    state.comments = action.payload;
  },
});

export default commentsReducer;
