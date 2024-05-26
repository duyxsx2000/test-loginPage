import User from '../models/userModel';
import { UserType } from '../types/typeUser';

class UserRepository {
    async createUsre(newUser: UserType) {
        User.create(newUser)
    };

    async findUser(account: string) {
        console.log(account);
        return User.findOne({account: account});
    }

}

export default new UserRepository();
