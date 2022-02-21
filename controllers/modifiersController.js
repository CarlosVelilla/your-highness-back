const Modifiers = require('../models/Modifiers');

exports.getModifierById = async (req, res, next) => {
  try {
    const cardIdAction = req.params.cardIdAction;
    const response = await Modifiers.find({ id: cardIdAction });
    res.json(response[0]);
  } catch (error) {
    console.log(error);
    next();
  }
};
