// server.js
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { connectDB } from './config/db.js';
import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: "dfxc3sati",
  api_key: "787799863893888",
  api_secret: "d7nIXfqJJu_Gml_EMgIhY5lRE98",
});

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.render("login.ejs", { url: null });
});

app.get("/register", (req, res) => {
  res.render("register.ejs", { url: null });
});

// Multer setup
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

// User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  filename: String,
  public_id: String,
  imgUrl: String,
});
const User = mongoose.model("user", userSchema);

// Registration
app.post("/register", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  const { name, email, password } = req.body;

  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "NodeJS_Mastery_Course",
  });

  await User.create({
    name,
    email,
    password,
    filename: req.file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });

  res.redirect("/");
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    res.render("login.ejs");
  } else {
    res.render("profile.ejs", { user });
  }
});

// Start server
const port = process.env.NODE_PORT || 3000;
app.listen(port, () => console.log(`🚀 Server is running on port ${port}`));

