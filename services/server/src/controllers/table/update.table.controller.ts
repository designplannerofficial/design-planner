import { Request, Response, NextFunction } from "express";
import { updateTableSchema } from "../../utils/validation/update.table.validation";
import { validationError } from "../../utils/errors";
import Table from "../../models/table.model";

export const updateTableController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { value, error } = await updateTableSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const id = req.params.id as string;
        const updated = await Table.findByIdAndUpdate(id, {
            $set: { name: value.name }
        }, { new: true })
        res.status(200).json(updated);
    } catch (error) {
        next(error);
    }
}