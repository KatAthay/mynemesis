const express = require('express');
const nemesisController = require('../controllers/nemesisController');
const router = express.Router();
const mongoose = require('mongoose');

// router.get('/',
//   nemesisController.getCharacters,
//   (req, res) => res.status(200).json([ ...res.locals.characters ])
// );

router.get('/species',
  nemesisController.getTweets,
  (req, res) => res.status(200).json({ ...res.locals.getTweets })
);

// router.get('/homeworld',
//   nemesisController.getHomeworld,
//   (req, res) => res.status(200).json({ ...res.locals.homeworld })
// );

// router.get('/film',
//   nemesisController.getFilm,
//   (req, res) => res.status(200).json({})
// );

router.post('/character',
  nemesisController.addTweets,
  (req, res) => res.status(200).json({})
);

module.exports = router;