import express from "express";
import {
  list_user,
  add_user,
  detail_user,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", list_user);
userRouter.post("/", add_user);
userRouter.get("/:id", detail_user);
export default userRouter;
