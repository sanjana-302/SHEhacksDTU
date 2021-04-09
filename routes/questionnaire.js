const express = require('express');
const router = express.Router();
const questionnaire = require('../controller/questionnaire');




//TOD0 Authentication to create 

router.route('/')
    .post(questionnaire.createQuestionnaire)

router.get('/new', questionnaire.renderNewForm)





module.exports = router;