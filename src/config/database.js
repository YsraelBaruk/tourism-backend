// database.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/meubanco");
    console.log("✅ MongoDB conectado!");
  } catch (error) {
    console.log(process.env.MONGO_URI);
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
