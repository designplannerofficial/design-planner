import Joi from "joi";

export const createDatabaseSchema = Joi.object({
    projectRef: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required()
})