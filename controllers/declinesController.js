const Declines = require('../models/Declines');

exports.getDeclineById = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const response = await Declines.findOne({ id: cardId });
    res.json(response);
  } catch (error) {
    console.log(error);
    next();
  }
};
