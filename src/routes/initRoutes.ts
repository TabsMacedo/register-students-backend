// juntar as rotas
import express from 'express';
import UserRoutes from './UserRoutes'
import LoginRoutes from './LoginRoutes';

class InitRoutes {
  public express: express.Router

  constructor() {
    this.express = express()
    this.routes()
  }

  private routes() {
    this.express.use(UserRoutes)
    this.express.use(LoginRoutes)
  }
}

export default new InitRoutes().express