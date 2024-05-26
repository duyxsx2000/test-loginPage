import authService from '../services/authService';

export const test = async (req : any, res: any) => {
  try {
    const user = await authService.test()
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: '' });
  }
};

export const authLogin = async (req: any, res: any) => {
  try {
    const dataLogin = req.body;
    console.log(dataLogin);
    const user = await authService.login(dataLogin)
    res.status(201).json({
      message: "login success",
      token:'token'
    });
  } catch (err) {
    res.status(400).json({message: '' });
  }
};

