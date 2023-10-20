import mongoose from "mongoose";
export const connect = async () => {
  // Connecting to the database
  try {
    console.log('DB URI: ', process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  }
};

export const disconnect = async () => {
  await mongoose.connection.close();
};