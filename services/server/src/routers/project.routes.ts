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

/**
 * @swagger
 * /api/v1/project:
 *   get:
 *     description: Returns all projects of authorized user
 *     responses:
 *       200:
 *         description: Success
 */
/**
 * @swagger
 * /api/v1/project:
 *   post:
 *     description: Create a new project
 *     parameters:
 *       - name: project
 *         in: body
 *         description: project name and user id
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userRef:
 *               type: string
 *             name:
 *               type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.route('/')
    .get(RequireAuth, getProjectsController)
    .post(RequireAuth, createProjectController);

/**
 * @swagger
 * /api/v1/project/{id}:
 *   get:
 *     description: Return the project by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the project
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
/**
 * @swagger
 * /api/v1/project/{id}:
 *   put:
 *     description: Update the project by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the project to update
 *         required: true
 *         type: string
 *       - name: project
 *         in: body
 *         description: project object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       200:
 *         description: Success
 */
/**
 * @swagger
 * /api/v1/project/{id}:
 *   delete:
 *     description: Delete a project (Hard Delete)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the project to delete
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Success - No content
 */
router.route('/:id')
    .get(RequireAuth, getProjectController)
    .put(RequireAuth, updateProjectController)
    .delete(RequireAuth, deleteProjectController);

export default router;