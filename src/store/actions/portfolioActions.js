import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getPortfolio = createAsyncThunk(
    "getPortfolio",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/portfolio`);
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const getPortfolioByCategory = createAsyncThunk(
    "getPortfolioByCategory",
    async (category, {dispatch}) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/portfolio?category=${category}`);
            return data
        } catch (error) {
            console.log(error)
        }
    }
)