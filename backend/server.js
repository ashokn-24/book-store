import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookroutes.js";

const app = express();
dotenv.config();

app.use(express.json()); // Middleware

app.use(cors()); // CORS middleware

const PORT = process.env.PORT || 2000;
const MONGODB_URI = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/books", bookRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`server listening on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
