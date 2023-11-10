import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../actions/usersActions";





export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userInfo: null
    },
    reducers: {},
    extraReducers: {
        
        [getUserInfo.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
        }
    }
})

