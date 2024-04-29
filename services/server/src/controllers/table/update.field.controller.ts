import { Request, Response, NextFunction } from "express";
import { updateFieldSchema } from "../../utils/validation";
import { validationError } from "../../utils/errors";
import Table from "../../models/table.model";

export const updateFieldController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { values, error } = await updateFieldSchema.validateAsync(req.body);
        if (error) {
            throw new validationError(error);
        }
        const updated = await Table.updateOne({
            'fields._id': values.fieldRef
        }, {
            $set: { 
                'fields.$.name': values.name,
                'fields.$.type': values.type,
                'fields.$.default': values.default,
                'fields.$.unique': values.unique,
                'fields.$.required': values.required,
                'fields.$.indexed': values.indexed
            }
        }, { new : true });
        res.status(200).json(updated)
    } catch (error) {
        next(error);
    }
}