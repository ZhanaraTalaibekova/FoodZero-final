import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';


export const registerUser = createAsyncThunk(
    "registerUser",
    async (newUser) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/register`, newUser);
            localStorage.setItem("token", data.accessToken)
            console.log(data)
            toast.success("вы успешно создали аккаунт")
            return data.user;
        } catch (error) {
            console.log(error)
            toast.error(error.response.data)
        }
    }
)

export const getUserInfo = createAsyncThunk(
    "getUserInfo",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/users`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            return data
        } catch (error) {
            console.log(error)
        }
    }
)


export const loginUser = createAsyncThunk("loginUser", 
async (newUser) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_MAIN_URL}/login`,
      newUser
    );
    localStorage.setItem("id", data.user.id);
    localStorage.setItem("token", data.accessToken);
    toast.success("You have successfully logged into your account!");
    return data.user;
  } catch (error) {
    toast.error(error.response.data);
  }
});