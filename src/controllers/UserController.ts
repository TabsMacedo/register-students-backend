import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { IUser } from '../models/interface/IUser';
import UserSchema from '../schemas/UserSchema';

class UserController {
  public async insertUserController(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const { idUser } = req.params;

      const userService = new UserService();

      const execute = await userService.insertUserService(data);

      res.status(200).json(execute);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }

  // método Read
  public async getAllUsersController(req: Request, res: Response): Promise<void> {
    try {
      const userService = new UserService();
      const users = await userService.getAllUsersService();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }


  public async updateUserController(req: Request, res: Response): Promise<void> {
    try {
      const { idUser } = req.params;
      const data: IUser = req.body;
      // fazer validação dos dados, usar o Zod, não acessar o schema aqui

      const existingUser = await UserSchema.findOne({ _id: idUser });
      if (!existingUser) {
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }

      const updateFields: Partial<IUser> = {
        email: data.email !== existingUser.email ? data.email : undefined,
        name: data.name !== existingUser.name ? data.name : undefined,
        permission: data.permission !== existingUser.permission ? data.permission : undefined,
      };

    

      if (Object.keys(updateFields).length === 0) {
        res.status(200).json({
          status: 1,
          message: 'Nenhuma alteração detectada',
          data: existingUser
        });
        return
      }

      const userUpdate = await UserSchema.findOneAndUpdate(
        { _id: idUser },
        updateFields,
        { new: true }
      );

      if (!userUpdate) throw new Error('Erro ao atualizar o usuário');

      res.status(200).json({
        status: 1,
        updatedFields: updateFields
      });
    } catch (err) {
      res.status(500).json({ error: `Erro UserController: ${err}` });
    }
  }

}
export default UserController;
