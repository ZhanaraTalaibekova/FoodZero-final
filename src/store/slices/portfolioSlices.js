import { createSlice } from "@reduxjs/toolkit";
import { getPortfolio, getPortfolioByCategory } from "../actions";


const initialState = {
    portfolio: []
}

export const portfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getPortfolio.fulfilled]: (state, action) => {
            state.portfolio = action.payload;
        },
        [getPortfolio.rejected]: (state, action) => {
            console.log("error")
        },
        [getPortfolio.pending]: (state, action) => {
            console.log("loading...")
        }, [getPortfolioByCategory.fulfilled]: (state, action) => {
            state.portfolio = action.payload;
        },
    }
})