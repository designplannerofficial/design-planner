import express from "express";
import { RequireAuth } from "../middlewares/auth.require";
import { 
    createDatabaseController, 
    deleteDatabaseController, 
    getDatabaseController,
    updateDatabaseController
} from "../controllers";
const router = express.Router();

router.route('/')
    .post(RequireAuth, createDatabaseController);

router.route('/:id')
    .get(RequireAuth, getDatabaseController)
    .put(RequireAuth, updateDatabaseController)
    .delete(RequireAuth, deleteDatabaseController);

export default router;