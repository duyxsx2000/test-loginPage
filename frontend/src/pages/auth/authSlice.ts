import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { postLogin } from "../../services/auth/authFetchApi";
import { ResponseData } from "../../types/typeUser";

interface Auth {
    user: {
        name: string
        account: string,
        password: string
    } | undefined,
    token: string | undefined,
    loading: boolean,
    status: string  
};

const initialState: Auth = {
    user: undefined,
    token: undefined,
    loading:  false,
    status:''
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
      setLoading(state,action: PayloadAction<boolean>) {
        state.loading = action.payload
      },
      setStatus(state,action: PayloadAction<string>) {
        state.status = action.payload
      }
    },

    extraReducers: (builder) => {

        builder
        .addCase(
            postLogin.fulfilled, 

            (state, action:PayloadAction<ResponseData | undefined>) => {
               if(!action.payload || !action.payload.token || !action.payload.user) return

               //set data auth after login succsess
                state.token = action.payload.token;
                state.user = action.payload.user;
   
            }
        )
    },
});



const  {reducer,actions} = authSlice;
export const {setLoading, setStatus} = actions;
export default reducer