// juntar as rotas
import express from 'express';
import initRoutes from './initRoutes';
import UserController from '../controllers/UserController';


class UserRoutes {
  public express: express.Router
  public userController = new UserController()

  constructor() {
    this.express = express();
    this.initRoutes();
  }

  private initRoutes() {
    this.express.post(`/user/insert`, this.userController.insertUserController);
    this.express.get(`/user/:idUser`, this.userController.getUserByIdController);
    this.express.put(`/user/update/:idUser`, this.userController.updateUserController);
    this.express.delete(`/user/delete/:idUser`, this.userController.deleteUserController);
  }
}

export default new UserRoutes().express