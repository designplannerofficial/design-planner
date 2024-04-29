import { Request, Response, NextFunction } from "express";
import Project from "../../models/project.model";
import { UserPayload } from "../../utils/types";

export const deleteProjectController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const user = req.user as UserPayload;
        const project = await Project.findById(id);
        if(project?.userRef.toString() !== user._id.toString()) {
            throw new Error("Invalid user");
        }
        await Project.deleteOne({ _id: id });
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}