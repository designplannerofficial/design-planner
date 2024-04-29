import Joi from "joi";

export const updateTableSchema = Joi.object({
    name: Joi.string().required()
})