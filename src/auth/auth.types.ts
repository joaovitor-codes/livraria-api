import { TipoUsuario } from '@prisma/client';
import { Request } from 'express';

// Dados guardados dentro do token JWT.
export interface JwtPayload {
  sub: string;
  tipoUsuario: TipoUsuario;
}

// Requisição que já passou pelo AuthGuard: o usuário do token fica em request.user.
export interface AuthenticatedRequest extends Request {
  user: JwtPayload;
}
