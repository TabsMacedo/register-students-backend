import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { IUser } from '../models/interface/IUser';
import UserSchema from '../schemas/UserSchema';
import { z } from 'zod';

class UserController {


  public async insertUserController(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;

      const userService = new UserService();

      const execute = await userService.insertUserService(data);

      res.status(200).json(execute);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }

  // método Read
  public async getUserByIdController(req: Request, res: Response): Promise<void> {
    try {
      const { idUser } = req.params;
      const userService = new UserService();
      const user = await userService.getUserByIdService(idUser);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  public async updateUserController(req: Request, res: Response): Promise<void> {
    const createUserSchema = z.object({
      _id: z.string(),
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      phone: z.string(),
      permission: z.string()

    });

    const userSchemaValidator = createUserSchema.safeParse(req.body);
    if (!userSchemaValidator.success) return
    const data = userSchemaValidator.data

    try {
      const { idUser } = req.params;

      const idUserSchema = z.string().length(24, "idUser inválido");
      const idUserValidation = idUserSchema.safeParse(idUser);
      if (!idUserValidation.success) {
        res.status(400).json({ error: idUserValidation.error.format() });
        return;
      }

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
  
  public async deleteUserController(req: Request, res: Response): Promise<void> {
    try {
      const { idUser } = req.params;

      const userService = new UserService();
      const result = await userService.deleteUserService(idUser);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: `Erro ao deletar usuário: ${err}` });
    }
  }

}
export default UserController;
