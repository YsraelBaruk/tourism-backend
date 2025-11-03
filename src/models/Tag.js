import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model("Tag", tagSchema);
