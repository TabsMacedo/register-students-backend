import { IUser } from '../models/interface/IUser';
import User from '../schemas/UserSchema';

export class LoginRepository {
  async findByEmail(email: string): Promise<Pick<IUser, '_id' | 'email' | 'password' | 'permission'> | null> {
    return await User.findOne({ email }, '_id email password permission');
  }
}
