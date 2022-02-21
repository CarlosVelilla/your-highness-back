const Cards = require('../models/Cards');

exports.getCardById = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const response = await Cards.find({ id: cardId });
    res.json(response[0]);
  } catch (error) {
    console.log(error);
    next();
  }
};
