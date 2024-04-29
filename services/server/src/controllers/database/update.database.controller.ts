import { Request, Response, NextFunction } from "express";
import { updateDatabaseSchema } from "../../utils/validation";
import { validationError } from "../../utils/errors";
import Database from "../../models/database.model";

export const updateDatabaseController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = await updateDatabaseSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const id = req.params.id as string;
        const updated = await Database.findByIdAndUpdate(id, {
            $set: {
                name: value.name,
                type: value.type
            }
        }, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        next(error);
    }
}