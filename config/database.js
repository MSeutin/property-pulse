// config/database.js
import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error(
        'MONGODB_URI is not defined in the environment variables'
      );
    }

    mongoose.set('strictQuery', true);

    await mongoose.connect(mongoUri);

    mongoose.connection.on('connected', () => {
      console.log('Successfully connected to MongoDB');
      isConnected = true;
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      isConnected = false;
    });

    console.log('New database connection established');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
