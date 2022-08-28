import { Joi } from "celebrate";

export const createBookValidator = Joi.object().keys({
  title: Joi.string().required(),
  author: Joi.string().required(),
});
