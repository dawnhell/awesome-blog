const express = require('express');

const router = express.Router();

router.get('/profile', (req, res, next) => {
    res.json({
        message: 'You have made it!',
        user: req.user,
        token: req.query.secret_token
    });
});

module.exports = router;
