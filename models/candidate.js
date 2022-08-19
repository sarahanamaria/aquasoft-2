const { Schema, model, mongoose } = require("mongoose");
const project = require("./project");
const Interview = require("./Interview");

// Create the Schema for the interview collection.
const candidateSchema = new Schema({
  Candidate_name: { type: String, required: false },
  Email: { type: String, required: false },
  Start_date: { type: Date, required: false },
  Salary: { type: Number, required: false },
  Candidate_link: { type: String, required: false },
  Candidate_doc: { type: String, required: false },
  Projects: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: project,
  },
  Interviews: {
    type: [mongoose.SchemaTypes.ObjectId],

    ref: Interview,

  },
});

// Export schema
module.exports = model("candidate", candidateSchema);
