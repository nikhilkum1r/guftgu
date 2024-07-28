const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Set the strictQuery option to prepare for future Mongoose versions
    mongoose.set('strictQuery', false); // or true, based on your preference

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(`Error in connecting Database: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
