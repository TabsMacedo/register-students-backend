import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import Database from './config/connection';
import feedbackRouter from './routes/UserRoutes'


const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
dotenv.config({path: envPath})

class Server {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    const db = new Database();
    db.mongooseConnect();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use('/api', feedbackRouter); 
  }
}

export default new Server().express;
