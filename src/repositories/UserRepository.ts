import { IUser } from "../models/interface/IUser";
import UserSchema from "../schemas/UserSchema";
import bcrypt from 'bcryptjs'

class UserRepository {
  static findOneBy(arg0: { email: any; }) {
    throw new Error('Method not implemented.');
  }
  public async insertUserRepository(data: IUser) {
    try {
      let operationPromisse: any;

      let rc: any;

      operationPromisse = UserSchema.findOne({ email: data.email });

      rc = await operationPromisse;

      if (rc) throw new Error(`Já existe um usuário com esse e-mail`);

      data.password = await this.cryptPassword(data.password);

      operationPromisse = UserSchema.create(data);

      rc = await operationPromisse;

      if (!rc) throw new Error(`Erro ao criar o usuário`);

      const user = rc;

      return ({
        status: 1,
        msg: "Usuário criado com sucesso",
        data: user
      })
    }
    catch (err) {
      return (`Erro UserRepository: ${err}`)
    }
  }

  private async cryptPassword(password: string): Promise<string> {
    if (!password) return ``

    const salt = await bcrypt.genSalt(7);

    const newPassword = bcrypt.hash(password, salt);

    return newPassword;
  }

  public async getUserByIdRepository(idUser: string) {
    try {
      const user = await UserSchema.findById(idUser);
      return user;
    } catch (err) {
      throw new Error(`Erro ao buscar usuário por ID: ${err}`);
    }
  }

  public async updateUserRepository(id: string, data: Partial<IUser>) {
    try {
      if (data.password) {
        data.password = await this.cryptPassword(data.password);
        const updatedUser = await UserSchema.findByIdAndUpdate(id, data, { new: true });

        if (!updatedUser) throw new Error('Usuário não encontrado');

        return {
          status: 1,
          msg: 'Usuário atualizado com sucesso',
          data: updatedUser
        };
      }
    }
    catch (err) {
      throw new Error(`Erro ao atualizar usuário: ${err}`);
    }
  }
  
  public async deleteUserRepository(id: string) {
    try {
      const deletedUser = await UserSchema.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error('Usuário não encontrado');
      }
      return {
        status: 1,
        msg: 'Usuário deletado com sucesso',
        data: deletedUser
      };
    } catch (err) {
      throw new Error(`Erro ao deletar usuário: ${err}`);
    }
  }

}
export default UserRepository;