import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection: any = {};
  try {
    if (connection.isConnected) return;
    const db: any = await mongoose.connect(process.env.MONGO as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
