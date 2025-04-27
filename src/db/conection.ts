import mongoose from 'mongoose';

// passar o .env.local
require('dotenv').config()

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string);
    console.log('✅ Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo se der erro
  }
}; 

connectDatabase().then(() => {
  console.log("FInalizou a conexão")
})