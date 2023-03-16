import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import blogRoute from "./routes/blogRoute.js";
import cors from "cors";

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth", blogRoute);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to my app",
  });
});

//Port
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`.bgCyan.white);
});
