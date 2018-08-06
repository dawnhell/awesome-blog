const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
  res.json({
    message: 'Signed up successfully!',
    user: req.user
  });
});

router.post('/signin', async (req, res, next) => {
  passport.authenticate('signin', async (error, user, info) => {
    try {
      if (error || !user) {
        return res.json({ 'error': info.message });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, 'super_secrete_salt');

        return res.json({ token, "email": user.email });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.get('/signout', (req, res, next) => {
  req.logout();
//   res.redirect('/');
});

module.exports = router;
