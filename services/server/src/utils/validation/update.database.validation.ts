import Joi from "joi";

export const updateDatabaseSchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required()
})