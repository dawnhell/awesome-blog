const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/model');

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await UserModel.create({
            email,
            password
        });

        done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use('signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return done(null, false, { message: 'User not found.' });
        }

        const validate = await user.isValidPassword(password);
        if(!validate) {
            return done(null, false, { message: 'Wrong password.' });
        }

        return done(null, user, { message: 'Signed in successfully.' });
    } catch (error) {
        return done(error);
    }
}));

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new JWTstrategy({
  secretOrKey : 'super_secrete_salt',
  jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}));
