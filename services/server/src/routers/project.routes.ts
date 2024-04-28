import express from "express";
import {
    createProjectController,
    deleteProjectController,
    getProjectController,
    getProjectsController,
    updateProjectController
} from "../controllers";
const router = express.Router();

router.route('/')
    .get(getProjectsController)
    .post(createProjectController);

router.route('/:id')
    .get(getProjectController)
    .put(updateProjectController)
    .delete(deleteProjectController);

export default router;