const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB is  connected successfully ");
    })
    .catch((error) => {
      console.log("DB connection have some issues");
      console.log(error);
      process.exit(1);
    });
};
