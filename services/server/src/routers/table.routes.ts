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

router.route('/')
    .post(RequireAuth, createTableController);

router.route('/:id')
    .put(RequireAuth, updateTableController);

router.route('/field')
    .put(RequireAuth, updateFieldController)
    .post(RequireAuth, addFieldController);

router.route('/reference')
    .put(RequireAuth, makeReferenceController)
    .post(RequireAuth, makeReferenceController);

export default router;