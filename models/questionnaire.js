const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
    pain: String,
    fatigue: String,
    diarrhoea: String,
    fever: String,
    allergy: String,
    recommendation: String,
    precautions: String,
    instituteType: String,
});

module.exports = mongoose.model('questionnaire', questionnaireSchema);