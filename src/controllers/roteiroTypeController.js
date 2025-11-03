import { createRoteiroType, getRoteiroTypes } from "../services/roteiroTypeService.js";

export const createRoteiroTypeController = async (req, res) => {
  try {
    const type = await createRoteiroType(req.body);
    res.status(201).json(type);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRoteiroTypesController = async (req, res) => {
  try {
    const types = await getRoteiroTypes();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
