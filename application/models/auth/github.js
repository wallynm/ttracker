'use strict';
var passport = require('koa-passport');
var GithubStrategy = require('passport-github').Strategy;

passport.use(new GithubStrategy({
  clientID: '7b7e1d9595acaa031d39',
  clientSecret: '7b00e2ecfeb284a5ea1ca9fd79631f13ab237728',
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
  function(accessToken, refreshToken, profile, done) {
    //Based on profile return from Github, find existing user
    let user = profile;

    //Return user model
    return done(null, user);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
