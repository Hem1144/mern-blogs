import * as UserController from "../controllers/users";
import express from "express";

const router = express.Router();

router.post("/signup", UserController.signUp);

export default router;
