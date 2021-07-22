import { createAction, createReducer } from "@reduxjs/toolkit";

export const setGoogleTrue = createAction("SET_GOOGLE_TRUE");
export const setGooglefalse = createAction("SET_GOOGLE_FALSE");

const googleReducer = createReducer(false, {
  [setGoogleTrue]: (state, action) => true,
  [setGooglefalse]: (state, action) => false,
});

export default googleReducer;
