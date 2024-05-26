import { Request, Response } from 'express';
import authService from '../services/authService';
import ResponseData from '../global/responseData'; 



export const authLogin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const dataLogin = req.body;
    const user = await authService.loginByAccount(dataLogin);

    return res.status(201).json(ResponseData.success({ 
      message: 'login success',
      token: user.token ,
      user: user
    }, 'Login successful'));

  } catch (err) {

    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return res.status(400).json(ResponseData.error(errorMessage, 'Login failed'));
  }
};
