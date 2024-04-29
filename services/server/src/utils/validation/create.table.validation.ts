import Joi from "joi";

export const createTableSchema = Joi.object({
    databaseRef: Joi.string().required(),
    name: Joi.string().required()
})