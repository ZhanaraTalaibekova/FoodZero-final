import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const getBlogs = createAsyncThunk(
    "getBlogs",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/blogs`);
            return data
        } catch (error) {
            console.log(error)
        }
    }
)


export const getBlogsById = createAsyncThunk(
    "getBlogsById",
    async (id,) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/blogs/${id}`);
             return data

        } catch (error) {
            console.log(error)
        }
    }
)


export const addToCart = createAsyncThunk(
    "addToCart",
    async (blog) => {
        try {
            await axios.post(`${process.env.REACT_APP_MAIN_URL}/cart`, blog);
            toast.success("вы добавили к корзину")
        } catch (error) {
            toast.error("произошла ошибка")
            console.log(error)
        }
    }

)



export const addComment = createAsyncThunk(
    "addComment",
    async (comment, { dispatch }) => {
        try {
            const { data } = await axios.patch(`${process.env.REACT_APP_MAIN_URL}/blogs/${comment.id}`, comment);
            console.log(data)
            toast.success("вы успешно добавили коментарий")
            dispatch(getBlogsById(data?.id));
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)


export const editProduct = createAsyncThunk(
    "editProduct",
    async ({ blogData, id }, { dispatch }) => {
        try {
            console.log(blogData);
            const { data } = await axios.patch(`${process.env.REACT_APP_MAIN_URL}/blogs/${id}`, blogData);
            toast.success("вы убарали определенный продукт")
            dispatch(getBlogsById(id));
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)
