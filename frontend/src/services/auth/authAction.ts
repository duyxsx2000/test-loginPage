import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { ActionType, LoginData } from '../../types/typeUser';
import { postLogin } from './authFetchApi';


const actionPostLogin = (loginData: LoginData) => {
    //create action redux login
    const action: | AsyncThunkAction<ResponseType | null, string, AsyncThunkConfig> | ActionType= postLogin(loginData);
    return action
};


export {
    actionPostLogin, 
}