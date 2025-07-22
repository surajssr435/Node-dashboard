import mongoose from 'mongoose';

mongoose.connect("mongodb://admin:admin123@65.1.110.58:27017/NodeJs_Mastery_Course?authSource=admin", {
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  console.log("MongoDB Connected!");
  process.exit(0);
})
.catch(err => {
  console.error("Connection failed:", err);
  process.exit(1);
});
