import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncStorage } from "react-native";

const initialState = {
  comments: [],
};

const ip = "192.168.0.3";

export const createComment = createAsyncThunk(
  "CREATE_COMMENT",
  (commentObj) => {
    const { planId } = commentObj;
    console.log("LLEGAMOS AKKIIIII", commentObj);
    return AsyncStorage.getItem("token")
      .then((token) => {
        return axios.post(
          `http://${ip}:3001/api/plan/${planId}/comments`,
          commentObj,
          {
            headers: { Authorization: `Bearer ${JSON.parse(token)}` },
          }
        );
      })
      .then((res) => res.data)
      .catch((err) => console.log("este es el error desde comments --->", err));
  }
);

export const showComments = createAsyncThunk("SHOW_COMMENTS", (planId) => {
  return AsyncStorage.getItem("token")
    .then((token) => {
      return axios.get(`http://${ip}:3001/api/plan/${planId}/comments`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      });
    })
    .then((res) => res.data)
    .catch((err) =>
      console.log("este es el error desde show_comments --->", err)
    );
});

const commentsReducer = createReducer(initialState, {
  [createComment.fulfilled]: (state, action) => {
    action.payload;
  },
  [showComments.fulfilled]: (state, action) => {
    state.comments = action.payload;
  },
});

export default commentsReducer;
