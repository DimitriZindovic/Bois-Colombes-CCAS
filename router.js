import express from "express";
import user from "./UserRoute.js";

const router = express.Router();

router.use("/user", user);

export default router;
