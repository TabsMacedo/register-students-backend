// src/services/LoginService.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { LoginRepository } from '../repositories/LoginRepository';

export class LoginService {
  private loginRepository = new LoginRepository();

  async login(email: string, password: string) {
    try {
      const user = await this.loginRepository.findByEmail(email);

      if (!user) {
        return { status: 0, mensagem: 'Usuário não bate com a informação' };
      }

      const verifyPass = await bcrypt.compare(password, user.password);

      if (!verifyPass) {
        return { status: 0, mensagem: 'E-mail ou senha não encontrados' };
      }

      const secret = process.env.JWT_PASS;
      if (!secret) {
        return { status: 0, mensagem: 'Chave JWT não configurada no ambiente' };
      }

      const token = jwt.sign(
        { id: user._id },
        secret,
        { expiresIn: '8h' }
      );
      return {
        mensagem: 'Usuário logado com sucesso',
        status: 1,
        id: user._id,
        token,
        auth: true,
        permission: user.permission,
      };

    } catch (err: any) {
      return {
        status: 0,
        mensagem: err.message || 'Erro ao realizar login',
      };
    }
  }
}
