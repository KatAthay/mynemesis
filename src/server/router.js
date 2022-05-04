const express = require('express');
const nemesisController = require('../controllers/nemesisController');
const router = express.Router();
const mongoose = require('mongoose');



router.get('/XX',
  nemesisController.getTweets,
  (req, res) => res.status(200).json({ ...res.locals.getTweets })
);



router.post('/XX',
  nemesisController.addTweets,
  (req, res) => res.status(200).json({})
);

module.exports = router;