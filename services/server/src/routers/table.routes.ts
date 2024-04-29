import express from "express";
import { RequireAuth } from "../middlewares/auth.require";
import {
    createTableController,
    updateTableController,
    addFieldController,
    addReferenceController,
    updateFieldController
} from "../controllers";
const router = express.Router();

router.route('/')
    .post(RequireAuth, createTableController);

router.route('/:id')
    .put(RequireAuth, updateTableController);

router.route('/field')
    .put(updateFieldController)
    .post(addFieldController);

router.route('/reference')
    .post(addReferenceController);

export default router;