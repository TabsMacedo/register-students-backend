import { model, Schema } from 'mongoose';
import { IUser } from '../models/interface/IUser';

const User = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  phone: {
    type: String
  },
  permission: {
    type: String
  }
}, {
  timestamps: true
});

export default model<IUser>('User', User);