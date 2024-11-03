import { Request, Response } from 'express';
import { createProduct, getAllProducts, updateProductById, deleteProductById } from '../models/productModel';

const addProduct = async (req: Request, res: Response) => {
  const { nome, descricao, imagem, valor, quantidade } = req.body;

  try {
    await createProduct({ nome, descricao, imagem, valor, quantidade });
    res.status(201).send('Produto adicionado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao adicionar produto');
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, descricao, imagem, valor, quantidade } = req.body;

  try {
    await updateProductById(id, { nome, descricao, imagem, valor, quantidade });
    res.send('Produto atualizado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao atualizar produto');
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const {
