import { Request, Response, NextFunction } from "express";
import Table from "../../models/table.model";
import { addFieldSchema } from "../../utils/validation";
import { validationError } from "../../utils/errors";

export const addFieldController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { values, error} = await addFieldSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const updated = await Table.findByIdAndUpdate(values.tableRef, {
            $push: {
                fields: {
                    ...values
                }
            }
        }, { new: true });
        res.status(200).json(updated)
    } catch (error) {
        next(error);
    }
}