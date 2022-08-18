import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// karena menggunakan import module, maka harus menuliskan file ekstensinya
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// konfigurasi .env
dotenv.config();

// init connection
const connect = async () => {
  try {
    // connect to db di .env
    await mongoose.connect(process.env.MONGO);
    console.log("connect to mongo");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb Disconnected...");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDb Connected...");
});

// CREATE MIDDLEWARES

// next middleware
/* app.use((req, res, next) => {
  console.log("Testing next middleware");
  next(); // maka next middleware akan dipanggil lebih awal
}); */

// to connect backend
app.use(cors());

// cookie-parser
app.use(cookieParser());

// testing postman middleware
app.use(express.json());

// all middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// error handling middleware
// add err parameter here
app.use((err, req, res, next) => {
  // send specific message
  const errStatus = err.status || 500; // jika tidak ada err.status, maka akan jadi 500
  const errMessage = err.message || "Something went wrong"; // jika tidak ada message, maka tampilkan ...
  return res.status(errStatus).json({
    // customize json message
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack, // give detail more about error
  });
});

app.listen(3001, () => {
  // memanggil connect
  connect();
  console.log("Connected...");
});
