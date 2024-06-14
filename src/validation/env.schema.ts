import * as Joi from '@hapi/joi';

export const envSchema = Joi.object({
  PORT: Joi.number(),
});
