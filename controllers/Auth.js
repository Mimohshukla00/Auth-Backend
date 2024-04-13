

  const bcrypt = require("bcrypt");
const User = require("../model/User");

// signup

exports.signup = async (req, res) => {
  try {
    // get data

    const { name, email, password, role } = req.body;
    // check if user exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }

    // secure password

    

    

  } catch (err) {
    console.log(err);
  }
};
