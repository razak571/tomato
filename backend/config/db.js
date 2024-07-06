import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoDBUrl = process.env.MONGODBURL;
  await mongoose.connect(mongoDBUrl).then(() => console.log("DB connected!!"));
};
