const { constants, errorMessages } = require("./constants");

const validateProfession = (req, res, next) => {
  const { BUSINESS_OR_SELF_EMPLOYED, EMPLOYED } = constants;
  const {
    INVALID_EMPLOYED_OBJECT_ALL_FIELDS_ARE_MANDATORY,
    INVALID_BUSINESSORSELFEMPLOYED_OBJECT_ALL_FIELDS_ARE_MANDATORY,
  } = errorMessages;

  const { profile, profession = {} } = req.body;
  if (Object.keys(profession).length > 0) {
    if (profile["profession"] === EMPLOYED) {
      const { employed } = profession;

      // Validate employed object
      if (
        !employed ||
        !employed.employerName ||
        !employed.designation ||
        typeof employed.grossSalary !== "number" ||
        typeof employed.netSalary !== "number" ||
        typeof employed.bankCredit !== "boolean"
      ) {
        return res.status(400).json({
          error: INVALID_EMPLOYED_OBJECT_ALL_FIELDS_ARE_MANDATORY,
        });
      }
    } else if (profile["profession"] === BUSINESS_OR_SELF_EMPLOYED) {
      const { businessOrSelfEmployed } = profession;

      // Validate businessOrSelfEmployed object
      if (
        !businessOrSelfEmployed ||
        !businessOrSelfEmployed.typeofBusiness ||
        typeof businessOrSelfEmployed.annualTurnover !== "number" ||
        !businessOrSelfEmployed.lastFYProfit ||
        typeof businessOrSelfEmployed.itrFiles !== "boolean"
      ) {
        return res.status(400).json({
          error: INVALID_BUSINESSORSELFEMPLOYED_OBJECT_ALL_FIELDS_ARE_MANDATORY,
        });
      }
    }
  } else {
    console.log(
      `This validation will run only on ${EMPLOYED} or ${BUSINESS_OR_SELF_EMPLOYED}`
    );
  }

  next();
};

module.exports = {
  validateProfession,
};
