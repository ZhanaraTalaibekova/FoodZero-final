import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getWorkers = createAsyncThunk(
    "getWorkers",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/workers`);
            return data
        } catch (error) {
            console.log(error)
        }
    }
)
