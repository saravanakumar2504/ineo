const { errorMessages } = require("./constants");

const validateMobile = (req, res, next) => {
  const { mobileNumber } = req.body;

  if (!mobileNumber) {
    return res
      .status(400)
      .json({ error: errorMessages.MOBILE_NUMBER_IS_MANDATORY });
  }

  next();
};

module.exports = {
  validateMobile,
};
