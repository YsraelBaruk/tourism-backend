import Roteiro from "../models/Roteiro.js";

export const createRoteiro = async (data) => {
  return await Roteiro.create(data);
};

export const getRoteiros = async () => {
  return await Roteiro.find().populate("creator_id type_id");
};
