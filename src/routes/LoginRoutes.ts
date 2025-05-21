import express from 'express';
import { LoginController } from '../controllers/LoginController';

class LoginRoutes {
  public express: express.Router;
  public loginController = new LoginController();

  constructor() {
    this.express = express(); 
    this.initRoutes();
  }

  private initRoutes() {
    this.express.post(`/login`, this.loginController.login);
  }
}

export default new LoginRoutes().express;
