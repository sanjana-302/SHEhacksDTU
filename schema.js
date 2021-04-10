const Joi = require('joi');
const { number } = require('joi');

module.exports.questionnaireSchema = Joi.object({
    campground: Joi.object({
        pain: Joi.string().required(),
        fatigue: Joi.string().required(),
        diarrhoea: Joi.string().required(),
        fever: Joi.string().required(),
        allergy: Joi.string().required(),
        recommendation: Joi.string().required(),
        precautions: Joi.string().required(),
        instituteType: Joi.string().required(),
    }).required()
});