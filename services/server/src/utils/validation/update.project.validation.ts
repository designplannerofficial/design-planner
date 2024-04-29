import Joi from "joi";

export const updateProjectSchema = Joi.object({
    name: Joi.string().required()
})