import Joi from "joi";

export const updateFieldSchema = Joi.object({
    tableRef: Joi.string().required(),
    fieldRef: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    default: Joi.string(),
    unique: Joi.boolean(),
    required: Joi.boolean(),
    indexed: Joi.boolean()
})