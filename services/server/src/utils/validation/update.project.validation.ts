import Joi from "joi";

export const updateProjectSchema = Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().required()
})