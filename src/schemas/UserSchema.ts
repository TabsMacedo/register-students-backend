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
    type: String,
    enum: ['admin', 'aluno'],
    default: 'aluno'
  }
}, {
  timestamps: true
});

export default model<IUser>('User', User);