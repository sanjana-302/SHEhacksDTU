const Questionnaire = require('../models/questionnaire');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/vaccine', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

const sample = ['Yes', 'No']


const seedDB = async() => {

    await Questionnaire.deleteMany({});
    for (let i = 0; i < 20; i++) {
        const random12 = Math.floor((Math.random() * 1000) % 2);
        const answers = new Questionnaire({
            pain: '3 days',
            fatigue: sample[random12],
            diarrhoea: sample[random12],
            fever: sample[random12],
            allergy: sample[random12],
            recommendation: sample[random12],
            precautions: sample[random12],
            instituteType: 'Private',
        });

        await answers.save();
        console.log(answers)
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});