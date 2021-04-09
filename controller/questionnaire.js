const Questionnaire = require('../models/questionnaire');

module.exports.index = async(req, res) => {
    const allAnswers = await Questionnaire.find({});
    console.log(allAnswers);

}

module.exports.renderNewForm = async(req, res) => {
    res.render("questionnaire/new");
}

module.exports.createQuestionnaire = async(req, res) => {
    const answers = new Questionnaire(req.body.questionnaire);
    await answers.save();

    console.log(answers);

    //TODO redirect on graphs page may be!
    //  res.redirect(``);


}