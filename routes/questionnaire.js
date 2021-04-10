const express = require('express');
const router = express.Router();
const questionnaire = require('../controller/questionnaire');




//TOD0 Authentication to create 

router.route('/')
    .post(questionnaire.createQuestionnaire)
    .get(questionnaire.index)

router.get('/new', questionnaire.renderNewForm)


router.get('/graph', questionnaire.show)


module.exports = router;