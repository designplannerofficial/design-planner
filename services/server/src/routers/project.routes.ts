import express from "express";
import { RequireAuth } from "../middlewares/auth.require";
import {
    createProjectController,
    deleteProjectController,
    getProjectController,
    getProjectsController,
    updateProjectController
} from "../controllers";
const router = express.Router();

router.route('/')
    .get(RequireAuth, getProjectsController)
    .post(RequireAuth, createProjectController);

router.route('/:id')
    .get(RequireAuth, getProjectController)
    .put(RequireAuth, updateProjectController)
    .delete(RequireAuth, deleteProjectController);

export default router;