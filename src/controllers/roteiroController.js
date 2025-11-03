import { createRoteiro, getRoteiros } from "../services/roteiroService.js";

export const createRoteiroController = async (req, res) => {
  try {
    const roteiro = await createRoteiro(req.body);
    res.status(201).json(roteiro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRoteirosController = async (req, res) => {
  try {
    const roteiros = await getRoteiros();
    res.json(roteiros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
