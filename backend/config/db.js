import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // ADD THIS DEBUG LINE
    console.log('Mongo URI from .env:', process.env.MONGO_URI);
    
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;