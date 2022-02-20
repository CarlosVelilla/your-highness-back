const Accepts = require('../models/Accepts');

exports.getAcceptById = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const response = await Accepts.find({ id: cardId });
    res.json(response);
  } catch (error) {
    console.log(error);
    next();
  }
};
