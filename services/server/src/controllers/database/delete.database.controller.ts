import { Request, Response, NextFunction } from "express";
import Database from "../../models/database.model";

export const deleteDatabaseController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const database = await Database.deleteOne({
            _id: id
        });
        res.status(204).json(database);
    } catch (error) {
        next(error);
    }
}