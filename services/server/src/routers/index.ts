import express from "express";
import authRouter from "./auth.routes";
import projectRouter from "./project.routes";
import datbaseRouter from "./database.routes";
import tableRouter from "./table.routes";

const router = express.Router();

router.use('/', authRouter);
router.use('/project', projectRouter);
router.use('/database', datbaseRouter);
router.use('/table', tableRouter);

export default router;