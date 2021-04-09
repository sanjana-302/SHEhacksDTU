const Questionnaire = require('../models/questionnaire');


module.exports.renderNewForm = async(req, res) => {
    res.render("questionnaire/new");
}

module.exports.createQuestionnaire = async(req, res) => {
    const answers = new Questionnaire(req.body.questionnaire);
    await answers.save();

    console.log(answers);
    //  res.redirect(`campgrounds/${newCampground._id}`);


}