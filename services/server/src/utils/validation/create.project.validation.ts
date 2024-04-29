import Joi from "joi";

export const createProjectSchema = Joi.object({
    userRef: Joi.string().required(),
    name: Joi.string().required()
})