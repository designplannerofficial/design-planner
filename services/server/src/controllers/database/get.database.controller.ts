import { Request, Response, NextFunction } from "express";
import Database from "../../models/database.model";

export const getDatabaseController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const database = await Database.findById(id).populate('tables');
        res.status(200).json(database);
    } catch (error) {
        next(error);
    }
}