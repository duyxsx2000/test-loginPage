// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import userRepository from '../repositorys/userRepository';
// import config from '../config/config.js';

class AuthService {
  // async register(data: any) {
  //   const hashedPassword = await bcrypt.hash(data.password, 10);
  //   return userRepository.createUser({ ...data, password: hashedPassword });
  // }

  async login(data: any) {
    try {
        const user = await userRepository.findUser(data.account);
        if (!user) throw new Error('User not found');

        const isPassword = user.password === data.password;
        if (!isPassword) throw new Error('Invalid password');
    
        // const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
        // return { token, user };

        return user
        
    } catch (error) {
        throw new Error('User not found')
    }
    

  }
    async test() {
        return 'test'
    }
}

export default new AuthService();
