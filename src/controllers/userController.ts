import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createUser, getUserByEmail } from '../models/userModel';

const register = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  const userExists = await getUserByEmail(email);
  if (userExists) return res.status(400).send('Usuário já registrado');

  await createUser({ nome, email, senha });
  res.status(201).send('Usuário registrado com sucesso');
};

const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const user = await getUserByEmail(email);
  if (!user || !(await bcrypt.compare(senha, user.senha))) {
    return res.status(400).send('Credenciais inválidas');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  res.json({ token });
};

export { register, login };
