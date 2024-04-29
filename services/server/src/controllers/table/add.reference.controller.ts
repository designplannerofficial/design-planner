import { Request, Response, NextFunction } from "express";
import Table from "../../models/table.model";
import { validationError } from "../../utils/errors";
import { addReferenceSchema } from "../../utils/validation";

export const addReferenceController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { values, error} = await addReferenceSchema.validateAsync(req.body);
        if(error) {
            throw new validationError(error);
        }
        const updated = await Table.updateOne({
            'fields._id': values.fieldRef
        }, {
            $set: {
                'fields.$.reference': {
                    'isReferenced': values.isReferenced,
                    'referencedTable': values.referencedTable,
                    'type': values.type
                }
            }
        }, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        next(error);
    }
}