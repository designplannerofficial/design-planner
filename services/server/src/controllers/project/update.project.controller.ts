import { Request, Response, NextFunction } from "express";
import { updateProjectSchema } from "../../utils/validation";
import { validationError } from "../../utils/errors";
import Project from "../../models/project.model";
import { UserPayload } from "../../utils/types";

export const updateProjectController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = await updateProjectSchema.validateAsync(req.body);
        const user = req.user as UserPayload;
        const id = req.params.id as string;
        if (error) {
            throw new validationError(error);
        }
        const project = await Project.findById(id);
        if (!project) {
            throw new Error("Project doesn't exist");
        }
        if(project.userRef.toString() !== user._id.toString()) {
            throw new Error("Invalid user");
        }
        await project.updateOne({ $set: { name: value.name }});
        const updated = await project.save();
        res.status(200).json(updated);
    } catch (error) {
        next(error);
    }
}