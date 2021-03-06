const Modifiers = require('../models/Modifiers');

exports.getModifierById = async (req, res, next) => {
  try {
    const cardIdAction = req.params.cardIdAction;
    const response = await Modifiers.findOne({ id: cardIdAction });
    res.json(response);
  } catch (error) {
    console.log(error);
    next();
  }
};
