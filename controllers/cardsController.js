const Cards = require('../models/Cards');

exports.getCardById = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const response = await Cards.findOne({ id: cardId });
    res.json(response);
  } catch (error) {
    console.log(error);
    next();
  }
};
