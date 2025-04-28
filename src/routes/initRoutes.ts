// juntar as rotas
import express from 'express';
import UserRoutes from './UserRoutes'

class InitRoutes {
  public express: express.Router

  constructor() {
    this.express = express()
    this.routes()
  }

  private routes() {
    this.express.use(UserRoutes)

  }
}

export default new InitRoutes().express