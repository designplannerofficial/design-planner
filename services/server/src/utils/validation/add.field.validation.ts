import Joi from "joi";

export const addFieldSchema = Joi.object({
    tableRef: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    default: Joi.string(),
    unique: Joi.boolean(),
    required: Joi.boolean(),
    indexed: Joi.boolean()
})