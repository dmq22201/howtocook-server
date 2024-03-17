const mongoose = require("mongoose");
const { db } = require("../configs");

const connectDB = async () => {
  try {
    await mongoose.connect(db.connStr);
    console.log(`Connect to database successful`);
  } catch (err) {
    console.log(`Connect to database failed`);
    throw err;
  }
};

module.exports = connectDB();
