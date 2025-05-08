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
    this.express.get(`/user`, this.userController.getAllUsersController);
    this.express.put(`/user/update/:idUser`, this.userController.updateUserController);
  }
}

export default new UserRoutes().express