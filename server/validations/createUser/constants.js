const constants = {
  EMPLOYED: "employed",
  BUSINESS_OR_SELF_EMPLOYED: "businessOrSelfEmployed",
};

const errorMessages = {
    "MOBILE_NUMBER_IS_MANDATORY": "Mobile number is mandatory",
    "PROFILE_OBJECT_IS_REQUIRED": "Profile object is required",
    "ALL_PROFILE_FIELDS_ARE_MANDATORY": "All profile fields are mandatory",
    "PROFESSION_MUST_BE_EMPLOYED_OR_BUSINESSORSELFEMPLOYED": "Profession must be 'employed' or 'businessOrSelfEmployed'",
    "INVALID_EMPLOYED_OBJECT_ALL_FIELDS_ARE_MANDATORY": "Invalid employed object. All fields are mandatory.",
    "INVALID_BUSINESSORSELFEMPLOYED_OBJECT_ALL_FIELDS_ARE_MANDATORY": "Invalid businessOrSelfEmployed object. All fields are mandatory."
  }
module.exports = { constants, errorMessages };
