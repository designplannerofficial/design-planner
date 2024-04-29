import { Request, Response, NextFunction } from "express";
import { UserPayload } from "../../utils/types";
import Project from "../../models/project.model";

export const getProjectsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user as UserPayload;
        const projects = await Project.find({userRef: user._id });
        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
}