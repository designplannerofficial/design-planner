import Joi from "joi";

export const addReferenceSchema = Joi.object({
    tableRef: Joi.string().required(),
    fieldRef: Joi.string().required(),
    isReferenced: Joi.boolean().required(),
    referencedTable: Joi.string().required(),
    type: Joi.string().required(),
})