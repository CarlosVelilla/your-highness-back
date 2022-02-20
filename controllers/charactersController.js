const Characters = require('../models/Characters');

exports.getCharacterById = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const response = await Characters.find({ id: cardId });
    res.json(response);
  } catch (error) {
    console.log(error);
    next();
  }
};
