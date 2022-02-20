const express = require('express');

const router = express.Router();

const AcceptsController = require('../controllers/acceptsController');
const DeclinesController = require('../controllers/declinesController');

module.exports = function () {
  router.get('/accept/:cardId', AcceptsController.getAcceptById);
  router.get('/decline/:cardId', DeclinesController.getDeclineById);
  // router.get('/content/:cardId', ContentsController.getContentById);
  // router.get('/character/:cardId', CharactersController.getCharacterById);
  // router.get('/modifiers/:cardId', ModifiersController.getModifierById);

  return router;
};
