import { Request, Response, NextFunction } from "express";
import { createDatabaseSchema } from "../../utils/validation";
import { validationError } from "../../utils/errors";
import Database from "../../models/database.model";
import Project from "../../models/project.model";

export const createDatabaseController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = await createDatabaseSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const database = await Database.create({
            name: value.name,
            type: value.type
        });
        await Project.updateOne({
            _id: value.projectRef
        }, {
            $push: { databases: value.projectRef }
        });
        res.status(201).json(database);
    } catch (error) {
        next(error);
    }
}