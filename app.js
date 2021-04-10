const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user');
const Questionnaire = require('./models/questionnaire');
const questionnaireRoutes = require('./routes/questionnaire');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const userRoutes = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/vaccine', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
const sessionConfig = {
    name: 'session',
    secret: "Why",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/', userRoutes);
app.use('/questionnaire', questionnaireRoutes)

app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000, () => {
    console.log("Serving");
});