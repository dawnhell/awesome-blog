const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  'use strict';
  console.log('Route: /; API works!');
  res.send('API works!');
});

module.exports = router;
