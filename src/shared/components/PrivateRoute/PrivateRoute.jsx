import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (token == null) {
            navigate("/register")
        }
    })
    return children
};

