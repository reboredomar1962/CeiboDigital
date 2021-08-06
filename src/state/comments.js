import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncStorage } from "react-native";

const initialState = {
  comments: [],
};

const ip = "192.168.200.22";

const os = Platform.OS !== "android" ? "localhost" : "10.0.2.2";

export const createComment = createAsyncThunk(
  "CREATE_COMMENT",
  (commentObj) => {
    const { planId } = commentObj;
    console.log("LLEGAMOS AKKIIIII", commentObj);
    return AsyncStorage.getItem("token")
      .then((token) => {
        return axios.post(
          `http://${os}:3001/api/plan/${planId}/comments`,
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
      return axios.get(`http://${os}:3001/api/plan/${planId}/comments`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      });
    })
    .then((res) => res.data)
    .catch((err) =>
      console.log("este es el error desde show_comments --->", err)
    );
});

const commentsReducer = createReducer(initialState, {
  // Recordar destructurar el "crearComentarios" para poder traer los comentarios anteriores
  [createComment.fulfilled]: (state, action) => {
    state.comments = [...state.comments, action.payload];
  },
  [showComments.fulfilled]: (state, action) => {
    state.comments = action.payload;
  },
});

export default commentsReducer;
