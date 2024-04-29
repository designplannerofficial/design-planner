import { Request, Response, NextFunction } from "express";
import { createProjectSchema } from "../../utils/validation";
import { validationError } from "../../utils/errors";
import Project from "../../models/project.model";

export const createProjectController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = await createProjectSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const project = Project.create({
            userRef: value.userRef,
            name: value.name
        });
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
}