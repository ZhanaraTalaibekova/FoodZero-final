import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, getBlogsById } from "../actions";


const initialState = {
    blogs: [],
    selectedBlog: null
}

export const blogsSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getBlogs.fulfilled]: (state, action) => {
            state.blogs = action.payload;
        },
        [getBlogs.rejected]: (state, action) => {
            console.log("error")
        },
        [getBlogs.pending]: (state, action) => {
            console.log("loading...")
        },
        [getBlogsById.fulfilled]: (state, action) => {
            state.selectedBlog = action.payload;
        },
    }
})

