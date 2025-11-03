import RoteiroType from "../models/RoteiroType.js";

export const createRoteiroType = async (data) => {
  return await RoteiroType.create(data);
};

export const getRoteiroTypes = async () => {
  return await RoteiroType.find();
};
