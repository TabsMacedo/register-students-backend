// juntar as rotas
import express from 'express';
import initRoutes from './initRoutes';


class UserRoutes {
  public express: express.Router

  constructor() {
    this.express = express()
    this.initRoutes()
  }

  private initRoutes(){
    this.express.post(`/user/insert/:idUser`, this.userController.insertUserController)
  }
}

export default new UserRoutes().express