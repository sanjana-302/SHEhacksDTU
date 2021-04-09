const express = require('express');
const app = express();
const path = require('path');
const Questionnaire = require('./models/questionnaire');
const questionnaireRoutes = require('./routes/questionnaire');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vaccine', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('home');
});


app.use('/questionnaire', questionnaireRoutes)

//TODO
// app.get('/questionnaire', async(req, res) => {
//     const allCampgrounds = await Questionnaire.find({});
//     res.render("questionnaire/index", { allCampgrounds });
// })



// app.get('/campgrounds/:id', async(req, res) => {
//     const campgroundById = await Questionnaire.findById(req.params.id);
//     res.render("campgrounds/show", { campgroundById });
// })

app.listen(3000, () => {
    console.log("Serving");
});