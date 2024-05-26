import userRepository from '../repositorys/userRepository';
import { UserLoginResponse, UserType } from '../types/typeUser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = process.env.KEY_TOKEN; 

class AuthService {

  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
  }

  async loginByAccount(data: UserType): Promise<UserLoginResponse> {
    try {
      const user = await userRepository.findUser(data.account);
      if (!user || !user.password) throw new Error('User not found or password is missing');

      const isPasswordValid = await bcrypt.compare(data.password, user.password);
      if (!isPasswordValid) throw new Error('Invalid password');

      const token = jwt.sign({ id: user._id, account: user.account }, SECRET_KEY, { expiresIn: '1h' });
      return {
        user: user,
        token: token
      };

    } catch (error) {

      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unknown error');
      }
    }
  }


}

export default new AuthService();
