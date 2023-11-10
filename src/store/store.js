import { configureStore } from '@reduxjs/toolkit';
import { blogsSlice, portfolioSlice, usersSlice, workersSlice } from './slices';



export const store = configureStore({
    reducer: {
        workers: workersSlice.reducer,
        blogs: blogsSlice.reducer,
        portfolio : portfolioSlice.reducer,
        users: usersSlice.reducer
    }
})
