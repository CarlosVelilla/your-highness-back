const Contents = require('../models/Contents');

exports.getContentById = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const response = await Contents.find({ id: cardId });
    res.json(response);
  } catch (error) {
    console.log(error);
    next();
  }
};
