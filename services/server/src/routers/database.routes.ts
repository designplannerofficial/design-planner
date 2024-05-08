import express from "express";
import { RequireAuth } from "../middlewares/auth.require";
import { 
    createDatabaseController, 
    deleteDatabaseController, 
    getDatabaseController,
    updateDatabaseController
} from "../controllers";
const router = express.Router();

/**
 * @swagger
 * /api/v1/database:
 *   post:
 *     description: Create a new database and append to the project
 *     parameters:
 *       - name: database
 *         in: body
 *         description: project reference id, db name and type (sql or nosql)
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             projectRef:
 *               type: string
 *             name:
 *               type: string
 *             type:
 *               type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.route('/')
    .post(RequireAuth, createDatabaseController);
/**
 * @swagger
 * /api/v1/database/{id}:
 *   get:
 *     description: Returns database inside a project with populated tables
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the database
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
/**
 * @swagger
 * /api/v1/database/{id}:
 *   put:
 *     description: Update the database by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the database
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
 *             type:
 *               type: string
 *     responses:
 *       200:
 *         description: Success
 */
/**
 * @swagger
 * /api/v1/database/{id}:
 *   delete:
 *     description: Delete a Database inside a project (Hard Delete)
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the database to delete
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Success - No content
 */
router.route('/:id')
    .get(RequireAuth, getDatabaseController)
    .put(RequireAuth, updateDatabaseController)
    .delete(RequireAuth, deleteDatabaseController);

export default router;