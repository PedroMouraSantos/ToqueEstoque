import { Request, Response } from 'express';
import { createProduct } from '../models/productModel';

const addProduct = async (req: Request, res: Response) => {
  const { nome, descricao, imagem, valor, quantidade } = req.body;

  try {
    await createProduct({ nome, descricao, imagem, valor, quantidade });
    res.status(201).send('Produto adicionado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao adicionar produto');
  }
};

export { addProduct };
