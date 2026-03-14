import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import type { Application } from "express";
import userRouter from "./routes/user.route";

const app: Application = express();
const port = process.env.PORT || "";

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes 

app.use("/api",userRouter);

app.listen(port, () => {
  console.log(`[server] :: server listen on port:${port}`);
});
