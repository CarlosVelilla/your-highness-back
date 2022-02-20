const express = require('express');

const router = express.Router();

const AcceptsController = require('../controllers/acceptsController');
const DeclinesController = require('../controllers/declinesController');
const CardsController = require('../controllers/cardsController');
const CharactersController = require('../controllers/charactersController');
const ContentsController = require('../controllers/contentsController');
const ModifiersController = require('../controllers/modifiersController');

module.exports = function () {
  router.get('/accept/:cardId', AcceptsController.getAcceptById);
  router.get('/decline/:cardId', DeclinesController.getDeclineById);
  router.get('/cards/:cardId', CardsController.getCardById);
  router.get('/character/:cardId', CharactersController.getCharacterById);
  router.get('/content/:cardId', ContentsController.getContentById);
  router.get('/modifiers/:cardIdAction', ModifiersController.getModifierById);

  return router;
};
