import mongoose from "mongoose";

const roteiroTypeSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  name: String,
  description: String,
});

export default mongoose.model("RoteiroType", roteiroTypeSchema);
