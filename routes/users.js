const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsync(async(req, res, next) => {
    try {
        const { firstName, lastName, location, mobile, age, username, email, password } = req.body;
        const user = new User({ firstName, lastName, location, mobile, age, email, username });
        console.log(user);
        const registeredUser = await User.register(user, password);
        console.log(registeredUser);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to the Survey!');
            console.log(registeredUser);
            res.redirect('/questionnaire/new');
        })
    } catch (e) {
        req.flash('error', e.message);
        console.log("Sorry");
        res.redirect('register');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'welcome back!');
    res.redirect('/covid');
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Thanks for sharing your experience!");
    res.redirect('/');
})

module.exports = router;