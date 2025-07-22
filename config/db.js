// config/db.js
/*
import mongoose from 'mongoose';

//const MONGO_URI = "mongodb://admin:admin123@65.1.110.58:27017/NodeJs_Mastery_Course?authSource=admin";
// Debug log to ensure MONGO_URI is being read correctly
console.log('MONGO_URI:', process.env.MONGO_URI);
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 30000
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
};
*/
// config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const DB_HOST = process.env.MONGO_DB;
const DB_USER = process.env.DB_USER;
const DB_PASSWD = process.env.DB_PASSWD;
const DB_NAME = process.env.DB_NAME;

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:27017/${DB_NAME}?authSource=admin`;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 30000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
};

