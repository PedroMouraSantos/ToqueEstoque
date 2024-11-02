import connection from '../config/database';

interface Product {
  id?: number;
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
  quantidade: number;
}

const createProduct = (product: Product) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO products (nome, descricao, imagem, valor, quantidade) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [product.nome, product.descricao, product.imagem, product.valor, product.quantidade], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

export { createProduct };
 