import express from "express";
import authRouter from "./auth.routes";
import projectRouter from "./project.routes";

const router = express.Router();

router.use('/', authRouter);
router.use('/project', projectRouter);

export default router;