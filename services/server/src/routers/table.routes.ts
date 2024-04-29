import express from "express";
import { RequireAuth } from "../middlewares/auth.require";
import {
    createTableController,
    updateTableController,
    addFieldController,
    updateFieldController,
    makeReferenceController
} from "../controllers";
const router = express.Router();
/**
 * @swagger
 * /api/v1/table:
 *   post:
 *     description: Create new table
 *     parameters:
 *       - name: Table details
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             databaseRef:
 *               type: string
 *             name:
 *               type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.route('/')
    .post(RequireAuth, createTableController);
/**
 * @swagger
 * /api/v1/table/{id}:
 *   put:
 *     description: Update the table by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the table to update
 *         required: true
 *         type: string
 *       - name: table name
 *         in: body
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
router.route('/:id')
    .put(RequireAuth, updateTableController);
/**
 * @swagger
 * /api/v1/table/field:
 *   put:
 *     description: "Update existing field in table"
 *     parameters:
 *       - name: "schema field"
 *         in: "body"
 *         description: "Field object"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             tableRef:
 *               type: string
 *             fieldRef:
 *               type: string
 *             name:
 *               type: string
 *             type:
 *               type: string
 *             default:
 *               type: string
 *             unique:
 *               type: boolean
 *             required:
 *               type: boolean
 *             indexed:
 *               type: boolean
 *     responses:
 *       200:
 *         description: "Success"
 */
/**
 * @swagger
 * /api/v1/table/field:
 *   post:
 *     description: "Add new field to database table"
 *     parameters:
 *       - name: "Schema field"
 *         in: "body"
 *         description: "Field object"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             tableRef:
 *               type: string
 *             name:
 *               type: string
 *             type:
 *               type: string
 *             default:
 *               type: string
 *               description: "Optional field"
 *             unique:
 *               type: boolean
 *               description: "Optional field"
 *             required:
 *               type: boolean
 *               description: "Optional field"
 *             indexed:
 *               type: boolean
 *               description: "Optional field"
 *     responses:
 *       201:
 *         description: "Success"
 */
router.route('/field')
    .put(RequireAuth, updateFieldController)
    .post(RequireAuth, addFieldController);
/**
 * @swagger
 * /api/v1/table/reference:
 *   put:
 *     description: change or remove relation between the field and table
 *     parameters:
 *       - name: Reference details
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             tableRef:
 *               type: string
 *             fieldRef:
 *               type: string
 *             type:
 *               type: string
 *             isReferenced:
 *               type: boolean
 *             referencedTable:
 *               type: string
 *     responses:
 *       200:
 *         description: Success
 */
/**
 * @swagger
 * /api/v1/table/reference:
 *   post:
 *     description: make relation between the field and table
 *     parameters:
 *       - name: Reference details
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             tableRef:
 *               type: string
 *             fieldRef:
 *               type: string
 *             type:
 *               type: string
 *             isReferenced:
 *               type: boolean
 *             referencedTable:
 *               type: string
 *     responses:
 *       201:
 *         description: Success
 */
router.route('/reference')
    .put(RequireAuth, makeReferenceController)
    .post(RequireAuth, makeReferenceController);

export default router;