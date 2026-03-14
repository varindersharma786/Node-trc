import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "hello world" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default userRouter;