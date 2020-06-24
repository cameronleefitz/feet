/* eslint-disable function-paren-newline */
const express = require('express');
const feetController = require('./controllers/feetController');
const { route } = require('./server');

// const starWarsController = require('../controllers/starWarsController');

const router = express.Router();

router.get('/getImage', feetController.getFeet, (req, res) => res.status(200).json(res.locals.feet));

// router.get('/species', starWarsController.getSpecies, (req, res) => res.status(200).json(res.locals.details));

// router.get('/homeworld', starWarsController.getHomeworld, (req, res) => res.status(200).json(res.locals.details));

// router.get('/film', starWarsController.getFilm, (req, res) => res.status(200).json({}));

// router.post('/character', starWarsController.addCharacter, (req, res) => res.status(200).json({}));

module.exports = router;
