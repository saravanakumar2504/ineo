const { constants, errorMessages } = require("./constants");

const validateProfile = (req, res, next) => {
  const { profile } = req.body;
  const { BUSINESS_OR_SELF_EMPLOYED, EMPLOYED } = constants;
  const {
    PROFILE_OBJECT_IS_REQUIRED,
    ALL_PROFILE_FIELDS_ARE_MANDATORY,
    PROFESSION_MUST_BE_EMPLOYED_OR_BUSINESSORSELFEMPLOYED,
  } = errorMessages;

  // Validate profile object
  if (!profile || typeof profile !== "object") {
    return res.status(400).json({ error: PROFILE_OBJECT_IS_REQUIRED });
  }

  const {
    firstName,
    lastName,
    email,
    dob,
    pan,
    address,
    town,
    pinCode,
    aadhar,
    profession,
  } = profile;

  // Validate all fields in profile
  if (
    !firstName ||
    !lastName ||
    !email ||
    !dob ||
    !pan ||
    !address ||
    !town ||
    !pinCode ||
    !aadhar ||
    !profession
  ) {
    return res.status(400).json({ error: ALL_PROFILE_FIELDS_ARE_MANDATORY });
  }

  // Validate profession
  if (profession !== EMPLOYED && profession !== BUSINESS_OR_SELF_EMPLOYED) {
    return res.status(400).json({
      error: PROFESSION_MUST_BE_EMPLOYED_OR_BUSINESSORSELFEMPLOYED,
    });
  }

  next();
};

module.exports = {
  validateProfile,
};
