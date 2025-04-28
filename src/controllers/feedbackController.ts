// controllers/feedbackController.ts
import { Request, Response } from 'express';

export class GetFeedback {
  // mudar padrão express: httpRequest
  async handle(req: Request, res: Response) {
    res.json({ message: 'Chamou o controller GetFeedback com sucesso!' });
  }
}