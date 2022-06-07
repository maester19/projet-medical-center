const config = require("config");
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(`conecttion string ${config.get("database.connectionString")}`)
  const conn = await mongoose.connect(config.get("database.connectionString"), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(
    `Successful connection to database established: ${conn.connection.host}`
      .cyan.underline.bold
  );
};

module.exports = connectDB;
