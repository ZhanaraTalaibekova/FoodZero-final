import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, loginUser } from "../actions/usersActions";




export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userInfo: null
    },
    reducers: {},
    extraReducers: {
        [getUserInfo.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
        }, 
        [loginUser.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
        }
    }
})

