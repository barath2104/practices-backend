const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.DB;
  if (!uri) throw new Error("DB connection string (process.env.DB) is not set");
  // mongoose connection options (optional)
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(uri, opts);
  console.log("✅ Connected to MongoDB");
};

module.exports = connectDB;
