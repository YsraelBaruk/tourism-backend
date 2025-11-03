import mongoose from "mongoose";

const certificadoSchema = new mongoose.Schema({
  roteiro_id: String,
  certificate_image_url: String,
  local_certificate_path: String,
  score: Number,
  issued_at: Date,
});

const progressoSchema = new mongoose.Schema({
  roteiro_id: String,
  passo_id: String,
  completed: Boolean,
  completed_at: Date,
  score: Number,
  meta: Object,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: {
    type: String,
    enum: ["usuario_comum", "host_turistico", "promotor_turistico", "administrador"],
    default: "usuario_comum",
  },
  profile_image_url: String,
  local_profile_path: String,
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
  progresso: [progressoSchema],
  certificados: [certificadoSchema],
});

export default mongoose.model("User", userSchema);
