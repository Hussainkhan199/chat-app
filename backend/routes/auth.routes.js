import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router();

router.put("/signup" ,signup);

router.put("/login" ,login);

router.put("/logout" ,logout);

export default router;