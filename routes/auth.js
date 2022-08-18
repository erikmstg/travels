import express from "express";
import { login, register, userGet } from "../controller/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", userGet);

export default router;
