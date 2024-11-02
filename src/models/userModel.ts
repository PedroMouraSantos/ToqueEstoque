import connection from '../config/database';
import bcrypt from 'bcryptjs';

interface User {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

const createUser = async (user: User) => {
  const salt = await bcrypt.genSalt(10);
  user.senha = await bcrypt.hash(user.senha, salt);

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(query, [user.nome, user.email, user.senha], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getUserByEmail = (email: string) => {
  return new Promise<User>((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

export { createUser, getUserByEmail };
