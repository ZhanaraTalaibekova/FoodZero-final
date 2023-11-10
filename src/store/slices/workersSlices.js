import { createSlice } from "@reduxjs/toolkit";
import { getWorkers } from "../actions";



const initialState = {
    workers: []
}


export const workersSlice = createSlice({
    name: "workersSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getWorkers.fulfilled]: (state, action) => {
            state.workers = action.payload;
        },
        [getWorkers.rejected]: (state, action) => {
            console.log("error")
        },
        [getWorkers.pending]: (state, action) => {
            console.log("loading...")
        }
    }
})