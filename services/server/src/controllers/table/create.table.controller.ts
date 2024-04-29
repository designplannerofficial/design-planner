import { Request, Response, NextFunction } from "express";
import Table from "../../models/table.model";
import { createTableSchema } from "../../utils/validation/create.table.validation";
import { validationError } from "../../utils/errors";
import Database from "../../models/database.model";

export const createTableController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = await createTableSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const table = await Table.create({
            name: value.name
        });
        await Database.updateOne({
            _id: value.databaseRef
        }, {
            $push: { tables: table._id }
        });
        res.status(201).json(table);
    } catch (error) {
        next(error);
    }
}