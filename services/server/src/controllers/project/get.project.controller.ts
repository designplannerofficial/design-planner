import { Request, Response, NextFunction } from "express";
import Project from "../../models/project.model";

export const getProjectController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const project = await Project.findById(id).populate('databases');
        if(!project) {
            throw new Error("Project doesn't exist");
        }
        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
}