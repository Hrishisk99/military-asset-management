import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");
    console.log(`📂 Database: ${connection.connection.name}`);
    console.log(`🌐 Host: ${connection.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err.message);

    process.exit(1);
  }
};

export default connectDB;