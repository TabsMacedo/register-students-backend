// src/controllers/LoginController.ts
import { Request, Response } from 'express';
import { LoginService } from '../services/LoginService';



export class LoginController {
  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const loginService = new LoginService();

    const result = await loginService.login(email, password);

    res.send(result);

  }
}



