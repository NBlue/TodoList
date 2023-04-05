const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connect to MongoDB successfully!");
    })
    .catch((error) => {
      console.log("Connect MongoDB failed with error: " + error);
    });
};

module.exports = connectDB;
