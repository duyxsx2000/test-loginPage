
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LoginData, ResponseData } from "../../types/typeUser";
import { loginApiUrl } from "../../apiUrl/authApiUrl";
import { setLoading, setStatus } from "../../pages/auth/authSlice";


export const postLogin = createAsyncThunk<ResponseData| undefined, LoginData>(
    'auth/postLogin',
    async (loginData : LoginData,{dispatch}) => {
        const token = localStorage.getItem('jwtToken');
        try {
            dispatch(setLoading(true));

            const res = await fetch(loginApiUrl,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(loginData)
            });

            dispatch(setLoading(false));

            if(!res.ok){
                dispatch(setStatus('error'));
                return undefined
            };

            dispatch(setStatus('success'));
            const responseData: ResponseData = await res.json()
            return responseData
        } catch (error) {
            return undefined
          return  
        }
    }
);