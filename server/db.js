const mongoose = require("mongoose");
const url =
  "mongodb+srv://rest:kpOCOoQolvzLvwHi@cluster0.aht8z7g.mongodb.net/internship?retryWrites=true&w=majority"; //string to connect to the database && important to note: before ?retryWrites add the database name because mongodb will create a default 'test' db otherwise

const connection = async () => {
  try {
    //try the following sequence
    await mongoose.connect(url); //connecting process
    console.log("Suntem conectati la db!");
  } catch (error) {
    //if we try and get an error, catch it and log it
    console.log(`Eroare: ${error}`);
    process.exit(1); //terminate the process if we catch an error
  }
};

module.exports = connection;
