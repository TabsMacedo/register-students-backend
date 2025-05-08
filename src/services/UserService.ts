// services/UserService.ts
import { IUser } from "../models/interface/IUser";
import UserRepository from '../repositories/UserRepository'

class UserService {
  public async insertUserService(data: IUser) {
    try {
      if (!data) return (`data not found`)

      let operationPromisse: any;

      const userRepository = new UserRepository();

      operationPromisse = await userRepository.insertUserRepository(data);

      if (!operationPromisse) throw new Error(`Erro ao criar o usuário`);

      return operationPromisse
    }

    catch (err) {
      return (`Erro UserService: ${err}`)
    }
  }

  public async getAllUsersService() {
    try {
      const userRepository = new UserRepository();
      const users = await userRepository.getAllUsersRepository();
      return users;
    } catch (err) {
      return (`Erro UserService (getAll): ${err}`);
    }
  }

  public async updateUserService(id: string, data: Partial<IUser>) {
    try {
      const userRepository = new UserRepository();
      const result = await userRepository.updateUserRepository(id, data);
      return result;
    }
    catch (err) {
      return (`Erro UserService (update): ${err}`);
    }
  }
}

export default UserService;
