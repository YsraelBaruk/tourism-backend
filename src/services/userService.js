import User from "../models/User.js";

export const createUser = async (data) => {
  return await User.create(data);
};

export const getUsers = async () => {
  return await User.find();
};
