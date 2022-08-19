const { Schema, model, default: mongoose } = require("mongoose");

// Create the Schema for the interview collection.
const interviewSchema = new Schema({
  Interview_date: {
    type: Date,
    required: true,
  },

  Interview_duration: {
    type: Number,
    required: true,
  },

  Interviewer: {
    type: String,
    required: true,
  },
});

// Export schema.
module.exports = model("Interview", interviewSchema);
