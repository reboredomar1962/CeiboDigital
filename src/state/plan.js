import axios from "axios";
import { createReducer, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import { Platform } from "react-native";

const initialState = {
    plans: [],
}

export const showPlans = createAsyncThunk('SHOW_PLANS', ()=>{
    const os = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'
    return axios.get(`http://${os}:3001/api/plan`)
    .then(res => res.data)
    .catch(error => console.log('ACA ESTA EL ERROR -----> ',error))
    
})

export const showSinglePlan = createAsyncThunk('SHOW_SINGLE_PLAN', (param)=>{
    return axios.get(`http://${os}:3001/api/plan/${param}`)
})

const plansReducer = createReducer(initialState, {
    [showPlans.fulfilled] : (state, action) => action.payload,
    [showSinglePlan.fulfilled] : (state, action) => action.payload
})
  
export default plansReducer;