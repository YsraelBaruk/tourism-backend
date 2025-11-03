import mongoose from "mongoose";

const passoSchema = new mongoose.Schema({
  title: String,
  description: String,
  image_url: String,
  ord: Number,
  prerequisites: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

const imageSchema = new mongoose.Schema({
  image_url: String,
  local_path: String,
  caption: String,
  ord: Number,
});

const roteiroSchema = new mongoose.Schema({
  creator_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type_id: { type: mongoose.Schema.Types.ObjectId, ref: "RoteiroType" },
  title: String,
  description: String,
  image_url: String,
  local_image_path: String,
  visibility: { type: String, enum: ["public", "private"], default: "public" },
  max_slots: Number,
  tags: [String],
  passos: [passoSchema],
  images: [imageSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

export default mongoose.model("Roteiro", roteiroSchema);
