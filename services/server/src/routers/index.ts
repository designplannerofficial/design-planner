import express from "express";
import authRouter from "./auth.routes";
import projectRouter from "./project.routes";
import datbaseRouter from "./database.routes";

const router = express.Router();

router.use('/', authRouter);
router.use('/project', projectRouter);
router.use('/database', datbaseRouter);

export default router;