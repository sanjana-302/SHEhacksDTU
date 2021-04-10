const Questionnaire = require('../models/questionnaire');

module.exports.index = async(req, res) => {
    const allAnswers = await Questionnaire.find({});
    res.send(allAnswers);
    //console.log()
    //res.render('questionnaire/graph',{data : allAnswers});
}
module.exports.show = async(req, res) => {
    const allAnswers = await Questionnaire.find({});
    //res.send(allAnswers);
    //console.log()
    res.render('fightingcovid/graph', { data: allAnswers });
}
module.exports.renderNewForm = async(req, res) => {
    res.render("questionnaire/new");
}

module.exports.createQuestionnaire = async(req, res) => {
    const answers = new Questionnaire(req.body.questionnaire);
    await answers.save();
    res.render("carousel/index");
    //TODO redirect on graphs page may be!
    //  res.redirect(``);


}