// Handle profile submission
const createUser = (req, res) => {
  const { mobileNumber, profile, profession } = req.body;

  // If validation passed, return success response
  res.status(200).json({
    message: "Profile submitted successfully",
    data: {
      mobileNumber,
      profile,
      profession,
    },
  });
};

module.exports = {
  createUser,
};
